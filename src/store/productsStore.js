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
        async fetchProducts(limit=8) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
                const data = await response.data;
                console.log(data.products);
                this.products = data.products;
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