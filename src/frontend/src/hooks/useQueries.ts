import { useQuery } from "@tanstack/react-query";
import type { Product } from "../backend";
import { useActor } from "./useActor";

export function useGetPaginatedProducts(page: number, pageSize: number) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "paginated", page, pageSize],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPaginatedProducts(BigInt(page), BigInt(pageSize));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSearchProducts(term: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "search", term],
    queryFn: async () => {
      if (!actor || !term.trim()) return [];
      return actor.searchProducts(term.trim());
    },
    enabled: !!actor && !isFetching && term.trim().length > 0,
  });
}

export function useFilterByBrand(brand: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "brand", brand],
    queryFn: async () => {
      if (!actor || !brand) return [];
      return actor.filterProductsByBrand(brand);
    },
    enabled: !!actor && !isFetching && !!brand,
  });
}

export function useFilterByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (!actor || !category) return [];
      return actor.filterProductsByCategory(category);
    },
    enabled: !!actor && !isFetching && !!category,
  });
}

export function useFilterProducts(brand: string, category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "filter", brand, category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.filterProducts(brand, category);
    },
    enabled: !!actor && !isFetching && !!(brand && category),
  });
}

export function useGetAllCategories() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProductById(id: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!actor || !id) throw new Error("No actor or id");
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}
