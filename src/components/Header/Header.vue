<script setup>
import { RouterLink } from "vue-router";
import logo from "../../assets/images/logo.png";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
</script>
<template>
  <nav>
    <div class="top_navbar">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <RouterLink to="/shop">Shop Now</RouterLink>
    </div>
    <div class="container">
      <RouterLink to="/">
        <img :src="logo" alt="exclusive header logo" height="24px" />
      </RouterLink>
      <div class="navigation_links">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/sign-up">Sign Up</RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar_right_container">
        <div class="navbar_search">
          <input type="text" placeholder="What are you looking for?" />
          <i class="pi pi-search"></i>
        </div>
        <p>
          <RouterLink to="/whish">
            <i class="pi pi-heart"></i>
            <span v-if="wishlistStore.wishListCount > 0" class="cart_counter">{{
              wishlistStore.wishListCount
            }}</span>
          </RouterLink>
        </p>
        <p>
          <RouterLink to="/cart">
            <i class="pi pi-shopping-cart"></i>
            <span v-if="cartStore.cartItemsCount > 0" class="cart_counter">{{
              cartStore.cartItemsCount
            }}</span>
          </RouterLink>
        </p>
      </div>
    </div>
  </nav>
</template>
<style src="./Header.scss" lang="scss" ></style>