import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cartItems: [],
        couponCode: '',
        discount: 10,
        isDark: JSON.parse(localStorage.getItem('isDark')) || false,
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

        applyCoupon(couponCode) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (couponCode === 'FREE_SHIPPING') {
                        this.discount = 10;
                        this.couponCode = couponCode;
                        resolve('Coupon Applied');

                    } else {
                        reject('Invalid Coupon');
                    }
                }, 1000);
            });
        },
        toggleDarkMode() {
            this.isDark = !this.isDark;
            localStorage.setItem('isDark', JSON.stringify(this.isDark));
        }
    },
    getters: {
        cartTotal(state) {
            const total = state.cartItems.reduce((a, c) => a + c.price, 0);
            const discountAmount = total * (state.discount / 100);
            const finalTotal = total - discountAmount;
            return finalTotal.toFixed(2);
        },
        cartItemsCount(state) {
            return state.cartItems.length;
        },
        isInCart: (state) => (id) => {
            return state.cartItems.some((i) => i.id === id);
        }
    }
});