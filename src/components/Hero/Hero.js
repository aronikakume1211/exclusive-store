import { useProductsStore } from "@/store/productsStore";
import { computed } from "vue";

export function useProducts() {

    const productsStore = useProductsStore();
    const products = computed(() => productsStore.products);
    const loading = computed(() => productsStore.loading);
    const error = computed(() => productsStore.error);
    const fetchProducts = () => productsStore.fetchProducts();
    return {
        products,
        loading,
        error,
        fetchProducts
    }

}