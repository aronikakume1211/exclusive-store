<script setup>
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  product: Object,
  wishlist: Boolean,
});

const cartStore = useCartStore();
const addToCart = (product) => {
  cartStore.addItemToCart(product);
};
console.log(props.wishlist);

const wishlistStore = useWishlistStore();
const addToWishList = (product) => {
  wishlistStore.addItemToWishList(product);
};
const removeWishlist = (item) => {
  wishlistStore.removeItemFromWishList(item);
};
</script>

<template>
  <li class="product_list">
    <div class="product_image_container">

      <!-- discount badge -->
      <div class="dicount_badge">
        -{{ product.discountPercentage }}%
      </div>

      <div class="wishlist_icons">
        <i v-if="props.wishlist" class="pi pi-trash" @click="removeWishlist(product)"></i>
        <i
          v-if="!props.wishlist"
          :class="
            wishlistStore.isInWishList(product.id)
              ? 'pi pi-heart-fill active'
              : 'pi pi-heart'
          "
          @click="addToWishList(product)"
        ></i>
        <i v-if="!props.wishlist" class="pi pi-eye"></i>
      </div>

      <RouterLink :to="'/product/' + product.id">
        <img :src="product.thumbnail" />
      </RouterLink>
      <button
        :style="props.wishlist ? 'transform: translateY(0px); opacity: 1;' : ''"
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

      <span> ({{ product?.reviews.length }})</span>
    </p>
  </li>
</template>