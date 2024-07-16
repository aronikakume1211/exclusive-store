<script setup>
import { onMounted } from "vue";
import { useProducts } from "./UseProducts";
import loader from "../../assets/images/loader.gif";
import Button from "@/helper/button.vue";
import Title from "@/helper/title.vue";
import ProductListing from "./ProductListing.vue";

const { products, loading, error, fetchProducts } = useProducts();

onMounted(() => {
  fetchProducts();
  console.log(products);
  console.log(loading);
  console.log(error);
});
const handleClick = () => {
  console.log("clicked");
};
</script>
<template>
  <div class="container">

    <Title>
      <div class="sub_title">
        <div class="title_side_bar"></div>
        <h2>Our Products</h2>
      </div>
      <h2 class="header--title">Explore Our Products</h2>
    </Title>
    
    <div v-if="loading">
      <img :src="loader" alt="loading" width="32" height="32" />
    </div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!loading && !error" class="product_lists">
      <ProductListing v-for="product in products" :key="product.id" :product="product" />
      <!-- <li v-for="product in products" :key="product.id">
        {{ product.title }}
        <Button @click="handleClick" variant="primary">Click Me</Button>
        <Button @click="handleClick" variant="danger">delete</Button>
      </li> -->
    </ul>
  </div>
</template>

<style src="./products.scss" lang="scss"></style>