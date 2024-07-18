<script setup>
import { RouterLink } from "vue-router";
import logo from "../../assets/images/logo.png";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { reactive, watch } from "vue";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

const state = reactive({
  isOpen: false,
});

const toggleUserMenu = () => {
  state.isOpen = !state.isOpen;
};

watch(
  () => cartStore.isDark,
  (newVal) => {
    document.body.style.backgroundColor = newVal ? "#121212" : "#FFFFFF";
    document.body.style.transition = "all 0.5s ease-in-out";
  },
  { immediate: true }
);

</script>
<template>
  <nav :dark="cartStore.isDark">
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
          <RouterLink to="/wishlist">
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
        <!-- <p>
          <i
            :class="cartStore.isDark ? 'pi pi-sun' : 'pi pi-moon'"
            style="font-size: 18px; cursor: pointer"
            @click="cartStore.toggleDarkMode"
          ></i>
        </p> -->
        <div class="navbar_profile">
          <i
          @click="toggleUserMenu"
            class="pi pi-user"
            style="font-size: 20px; cursor: pointer; margin-left: 10px"
          ></i>
          <div v-if="state.isOpen" class="navbar_profile_container">
            <ul>
              <li>
                <i class="pi pi-user"></i>
                <RouterLink to="/my-account">Manage My Account</RouterLink>
              </li>
              <li>
                <i class="pi pi-shopping-bag"></i>
                <RouterLink to="/my-orders">My Orders</RouterLink>
              </li>
              <li>
                <i class="pi pi-times-circle"></i>
                <RouterLink to="/my-cancellations">My Canellations</RouterLink>
              </li>
              <li>
                <i class="pi pi-star"></i>
                <RouterLink to="/my-reviews">My Reviews</RouterLink>
              </li>
              <li>
                <i class="pi pi-sign-out"></i>
                <RouterLink to="/my-account">Logout</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style src="./Header.scss" lang="scss" ></style>