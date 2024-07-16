<script setup>
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();
const addToCart = (product) => {
  cartStore.addItemToCart(product);
};

const wishlistStore = useWishlistStore();
const addToWishList = (product) => {
  wishlistStore.addItemToWishList(product);
};
</script>

<template>
  <li class="product_list">
    <div class="product_image_container">
      <div class="wishlist_icons">
        <i
          :class="
            wishlistStore.isInWishList(product.id)
              ? 'pi pi-heart-fill active'
              : 'pi pi-heart'
          "
          @click="addToWishList(product)"
        ></i>
        <i class="pi pi-eye"></i>
      </div>

      <RouterLink :to="'/product/' + product.id">
        <img :src="product.image" />
      </RouterLink>
      <button
        :class="
          cartStore.isInCart(product.id) ? 'add_to_cart added' : 'add_to_cart'
        "
        :disabled="cartStore.isInCart(product.id)"
        @click="addToCart(product)"
      >
        Add To Cart
      </button>
    </div>
    <h3>{{ product.title }}</h3>
    <p>
      <span class="price"> ${{ product.price }} </span>
      <span class="rating">
        <i class="pi-star-full"></i>
        <!-- <i v-for="n in product?.rating.rate" :key="n" class="pi-star-full"></i> -->
      </span>

      <span>({{ product?.rating.count }})</span>
    </p>
  </li>
</template>