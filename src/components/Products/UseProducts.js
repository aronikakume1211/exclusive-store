import { useCartStore } from "@/store/cartStore";
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

export function useCart() {
    const cartStore = useCartStore();
    const cartItems = computed(() => cartStore.cartItems);
    const addItemToCart = (item) => cartStore.addItemToCart(item);
    const removeItemFromCart = (item) => cartStore.removeItemFromCart(item);
    const clearCart = () => cartStore.clearCart();
    return {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart
    }
}