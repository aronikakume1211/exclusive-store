import { defineStore } from "pinia";

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
                this.removeItem(existingItem);
                return;
            }
            this.wishlist.push(item);
            console.log(this.wishlist);
        },
        removeItem(item) {
            this.wishlist.splice(this.wishlist.indexOf(item), 1);
        },
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