<script setup>
import Button from "@/helper/button.vue";
import { useWishlistStore } from "@/store/wishlistStore";
import ProductListing from "@/components/Products/ProductListing.vue";

const wishlistStore = useWishlistStore();

const addAllToCart = () => {
  //   console.log("Move All To Bag", wishlistStore);
  wishlistStore.moveAllToCart();
};
</script>
<template>
  <div class="container">
    <div v-if="wishlistStore.wishListCount">
      <div class="wishlist_top_container">
        <p>Wishlist ({{ wishlistStore.wishListCount }})</p>
        <Button variant="border" @click="addAllToCart">Move All To Bag</Button>
      </div>
      <ul class="product_lists">
        <ProductListing
          v-for="product in wishlistStore.wishlist"
          :key="product.id"
          :product="product"
          :wishlist="true"
        />
      </ul>
    </div>
    <div v-else class="conatiner_not_found">
      <div class="not_found_container">
        <h1 class="not_found_title">Your Wishlist is empty</h1>
        <p>Please add more products to your wishlist.</p>

        <RouterLink to="/" class="btn">Back to home page</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Wishlist.scss"></style>