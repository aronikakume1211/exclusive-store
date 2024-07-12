<script setup>
import { RouterLink } from "vue-router";
import logo from "../../assets/images/logo.png";
</script>
<template>
  <nav>
    <div class="top_navbar">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <RouterLink to="/shop">Shop Now</RouterLink>
    </div>
    <div class="container">
      <img :src="logo" alt="exclusive header logo" height="24px" />
      <div class="navigation_links">
        <ul>
          <li>
            <RouterLink to="/" >Home</RouterLink>
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
          <RouterLink to="/whish"><i class="pi pi-heart"></i></RouterLink>
        </p>
        <p>
          <RouterLink to="/cart">
            <i class="pi pi-shopping-cart"></i>
            <span class="cart_counter">2</span>
          </RouterLink>
        </p>
      </div>
    </div>
  </nav>
</template>
<style src="./Header.scss" lang="scss" ></style>