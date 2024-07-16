import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cartItems: [],
    }),
    actions: {
        addItemToCart(item) {
            const existingItem = this.cartItems.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
                return;
            }
            this.cartItems.push(item);
        },
        removeItemFromCart(item) {
            this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
        },
        clearCart() {
            this.cartItems = [];
        },
    },
    getters: {
        cartTotal(state) {
            return state.cartItems.reduce((a, c) => a + c.price, 0);
        },
        cartItemsCount(state) {
            return state.cartItems.length;
        },
        isInCart: (state) => (id) => {
            return state.cartItems.some((i) => i.id === id);
        }
    }
});