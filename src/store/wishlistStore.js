import { defineStore } from "pinia";
import { useCartStore } from "./cartStore";
import router from "@/router";



export const useWishlistStore = defineStore("wishlist", {
    state: () => ({
        wishlist: [],
    }),
    actions: {
        addItemToWishList(item) {
            const existingItem = this.wishlist.find(
                (i) => i.id === item.id
            );
            if (existingItem) {
                this.removeItemFromWishList(existingItem);
                return;
            }
            this.wishlist.push(item);
            console.log(this.wishlist);
        },
        removeItemFromWishList(item) {
            this.wishlist = this.wishlist.filter((i) => i.id !== item.id);
        },

        moveAllToCart() {
            const cartStore = useCartStore();

            this.wishlist.forEach(item => {
                cartStore.addItemToCart(item);
                this.removeItemFromWishList(item);
            });
            router.push("/cart");
        }
    },
    getters: {
        isInWishList: state => (id) => {
            return state.wishlist.find(i => i.id === id)
        },
        wishListCount(state) {
            return state.wishlist.length;
        },
    }
});