<script setup>
import { useProducts } from "./Hero.js";
const { products, loading, error, fetchProducts } = useProducts();

</script>

<template>
  <div class="container">
    <h1 class="hero_container">Home Hero</h1>
    <div>
      <button @click="fetchProducts">Fetch Products</button>
     
    </div>
  </div>
</template>
<style src="./Hero.scss" lang="scss" ></style>