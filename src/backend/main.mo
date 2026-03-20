import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";



actor {
  type Product = {
    id : Text;
    name : Text;
    catalogNumber : Text;
    brand : Text;
    category : Text;
    description : Text;
    packSizes : [Text];
    grade : Text;
    applications : [Text];
  };

  type CompanyInfo = {
    name : Text;
    address : Text;
    partners : [Text];
    contactDetails : ContactDetails;
  };

  type ContactDetails = {
    phone : Text;
    email : Text;
    website : Text;
    address : Text;
  };

  type Pagination = {
    pageNumber : Nat;
    pageSize : Nat;
  };

  type PaginatedProducts = {
    totalCount : Nat;
    pageNumber : Nat;
    pageSize : Nat;
    products : [Product];
  };

  type ProductSearchResponse = {
    products : [Product];
    pagination : Pagination;
    totalResults : Nat;
  };

  type QuoteRequest = {
    id : Text;
    timestamp : Int;
    customerName : Text;
    email : Text;
    phone : Text;
    productName : Text;
    casNumber : Text;
    catalogNumber : Text;
    quantity : Text;
    message : Text;
  };

  type QuoteRequestInput = {
    customerName : Text;
    email : Text;
    phone : Text;
    productName : Text;
    casNumber : Text;
    catalogNumber : Text;
    quantity : Text;
    message : Text;
  };

  let products = Map.empty<Text, Product>();
  let quoteRequests = List.empty<QuoteRequest>();
  var nextQuoteRequestId = 1;
  stable var nextProductId = 1;

  let companyInfo : CompanyInfo = {
    name = "Scientific Industries";
    address = "Parque Industrial Produquimica, Mz E, Lt. 1, Dist. de Lurin, Lima 16, Peru";
    partners = ["Merck", "Sigma-Aldrich", "Millipore", "Whatman"];
    contactDetails = {
      phone = "+51.13031221";
      email = "contacto@scientific.com.pe";
      website = "https://scientific.com.pe";
      address = "Parque Industrial Produquimica, Mz E, Lt. 1, Dist. de Lurin, Lima 16, Peru";
    };
  };

  func matchesSearchTerm(text : Text, searchTerm : Text) : Bool {
    text.contains(#text(searchTerm));
  };

  public query ({ caller = _ }) func searchProducts(searchTerm : Text) : async [Product] {
    if (searchTerm.size() == 0) { Runtime.trap("Search term cannot be empty") };
    products.filter(
      func(_, product) {
        matchesSearchTerm(product.name, searchTerm) or matchesSearchTerm(product.catalogNumber, searchTerm);
      }
    ).values().toArray();
  };

  public query ({ caller = _ }) func filterProductsByBrand(brand : Text) : async [Product] {
    if (brand.size() == 0) { Runtime.trap("Brand cannot be empty") };
    products.filter(
      func(_, product) {
        product.brand.contains(#text(brand));
      }
    ).values().toArray();
  };

  public query ({ caller = _ }) func filterProductsByCategory(category : Text) : async [Product] {
    if (category.size() == 0) { Runtime.trap("Category cannot be empty") };
    products.filter(
      func(_, product) {
        product.category.contains(#text(category));
      }
    ).values().toArray();
  };

  public query ({ caller = _ }) func filterProducts(brand : Text, category : Text) : async [Product] {
    if (brand.size() == 0 or category.size() == 0) {
      Runtime.trap("Brand and Category cannot be empty");
    };
    products.filter(
      func(_, product) {
        product.brand.contains(#text(brand)) and product.category.contains(#text(category));
      }
    ).values().toArray();
  };

  public query ({ caller = _ }) func getPaginatedProducts(pageNumber : Nat, pageSize : Nat) : async [Product] {
    if (pageNumber == 0 or pageSize == 0) {
      Runtime.trap("Page number and size must be greater than zero");
    };
    let start = (pageNumber - 1) * pageSize;
    let allProducts = products.values().toArray();
    if (start >= allProducts.size()) { [] } else {
      allProducts.sliceToArray(start, start + pageSize);
    };
  };

  public query ({ caller = _ }) func getAllCategories() : async [Text] {
    products.values().map(func(p) { p.category }).toArray();
  };

  public query ({ caller = _ }) func getCompanyInfo() : async CompanyInfo {
    companyInfo;
  };

  public query ({ caller = _ }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller = _ }) func getProductById(productId : Text) : async Product {
    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func submitQuoteRequest(quoteRequest : QuoteRequestInput) : async Text {
    let id = "QR" # nextQuoteRequestId.toText();
    let timestamp = Time.now();

    let newQuoteRequest : QuoteRequest = {
      quoteRequest with
      id;
      timestamp;
    };

    quoteRequests.add(newQuoteRequest);
    nextQuoteRequestId += 1;
    id;
  };

  public query ({ caller = _ }) func getQuoteRequests() : async [QuoteRequest] {
    quoteRequests.toArray().sort(
      func(a, b) {
        if (a.timestamp > b.timestamp) { return #less };
        if (a.timestamp < b.timestamp) { return #greater };
        #equal;
      }
    );
  };

  public query ({ caller = _ }) func getQuoteRequestCount() : async Nat {
    quoteRequests.size();
  };
};

