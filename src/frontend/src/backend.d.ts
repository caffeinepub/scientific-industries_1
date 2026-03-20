import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactDetails {
    email: string;
    website: string;
    address: string;
    phone: string;
}
export interface QuoteRequestInput {
    customerName: string;
    productName: string;
    email: string;
    catalogNumber: string;
    message: string;
    quantity: string;
    phone: string;
    casNumber: string;
}
export interface QuoteRequest {
    id: string;
    customerName: string;
    productName: string;
    email: string;
    catalogNumber: string;
    message: string;
    timestamp: bigint;
    quantity: string;
    phone: string;
    casNumber: string;
}
export interface Product {
    id: string;
    name: string;
    description: string;
    catalogNumber: string;
    grade: string;
    category: string;
    brand: string;
    applications: Array<string>;
    packSizes: Array<string>;
}
export interface CompanyInfo {
    name: string;
    partners: Array<string>;
    address: string;
    contactDetails: ContactDetails;
}
export interface backendInterface {
    filterProducts(brand: string, category: string): Promise<Array<Product>>;
    filterProductsByBrand(brand: string): Promise<Array<Product>>;
    filterProductsByCategory(category: string): Promise<Array<Product>>;
    getAllCategories(): Promise<Array<string>>;
    getAllProducts(): Promise<Array<Product>>;
    getCompanyInfo(): Promise<CompanyInfo>;
    getPaginatedProducts(pageNumber: bigint, pageSize: bigint): Promise<Array<Product>>;
    getProductById(productId: string): Promise<Product>;
    getQuoteRequestCount(): Promise<bigint>;
    getQuoteRequests(): Promise<Array<QuoteRequest>>;
    searchProducts(searchTerm: string): Promise<Array<Product>>;
    submitQuoteRequest(quoteRequest: QuoteRequestInput): Promise<string>;
}
