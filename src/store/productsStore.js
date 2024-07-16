import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", {
    state: () => {
        return {
            products: [],
            loading: false,
            error: null,
        };
    },
    actions: {
        async fetchProducts() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                const data = await response.data;
                this.products = data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        async fetchProduct(id) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                const data = await response.data;
                this.products = data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    }

});