<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { RouterLink, useRoute } from "vue-router";
import Title from "@/helper/title.vue";
import ProductListing from "@/components/Products/ProductListing.vue";
import StarRating from "@/helper/rating.vue";
import Button from "@/helper/button.vue";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";

const route = useRoute();
const productId = route.params.id;
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addItemToCart(product);
};

const addToWishList = (product) => {
  wishlistStore.addItemToWishList(product);
};
const removeWishlist = (item) => {
  wishlistStore.removeItemFromWishList(item);
};

const state = reactive({
  product: [],
  isLoading: true,
  relatedProducts: [],
  quantity: 1,
  currentImage: "",
});

const increment = () => {
  state.quantity += 1;
};

const decreament = () => {
  state.quantity > 2 ? (state.quantity -= 1) : (state.quantity = 1);
};

const hoverImage = (id) => {
  console.log(id);
  console.log(state.product.images[id]);
  state.currentImage = state.product.images[id];
};


onMounted(async () => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    const data = await response.data;
    state.product = data;
    state.currentImage = data.images[0];

    const res = await axios.get(`https://dummyjson.com/products?limit=${4}`);
    const related = await res.data;
    state.relatedProducts = related.products;
  } catch (error) {
    console.log("Error fetching products");
  } finally {
    state.isLoading = false;
    console.log(state.product);
  }
});
</script>
<template>
  <div class="container conatiner_not_found">
    <div
      v-if="state.isLoading"
      class="loading_container"
      style="text-align: center"
    >
      <PulseLoader />
    </div>
    <div v-else>
      <p class="breadcrumbs">
        <RouterLink to="/">Home</RouterLink>/
        <span>{{ state.product?.title }}</span>
      </p>
      <div class="product_detail_container">
        <div class="product_detail_image_container">
          <ul class="thumbnails_lists">
            <li
              v-for="(image, index) in state.product.images"
              :key="index"
              class="tumbnails_list"
            >
              <img :src="image" @mouseover="hoverImage(index)" />
            </li>
          </ul>
          <div class="product_image">
            <img :src="state.currentImage" />
          </div>
        </div>

        <div class="product_detail_right">
          <h1>{{ state.product?.title }}</h1>
          <div class="product_stars_review">
            <StarRating :rating="state.product.rating" />
            <span> ({{ state.product?.reviews?.length }} Reviews) </span>
            <span>|</span>
            <span class="instock">{{ state.product?.availabilityStatus }}</span>
          </div>
          <p class="price">$ {{ state.product?.price }}</p>
          <p class="description">{{ state.product?.description }}</p>
          <hr />
          <div class="product_btns">
            <div class="incremant_decrement_btns">
              <button class="btn_minus" @click="decreament">-</button>
              <input type="number" :value="state.quantity" />
              <button class="btn_plus" @click="increment">+</button>
            </div>
            <Button
              style="height: 44px; width: 165px"
              variant="danger"
              :class="
                cartStore.isInCart(state.product.id)
                  ? 'add_to_cart added'
                  : 'add_to_cart'
              "
              @click="addToCart(state.product)"
              >Buy Now</Button
            >
            <span class="wishlist_icon">
              <i
                :class="
                  wishlistStore.isInWishList(state.product.id)
                    ? 'pi pi-heart-fill active'
                    : 'pi pi-heart'
                "
                @click="addToWishList(state.product)"
              ></i>
            </span>
          </div>

          <div class="free_delivery">
            <div class="free">
              <i class="pi pi-truck"></i>
              <p>
                <span class="tit">Free Delivery</span><br />
                <span>Enter your postal code for Delivery Availability</span>
              </p>
            </div>
            <hr />
            <div class="return">
              <i class="pi pi-sync"></i>
              <p>
                <span class="tit">Return Delivery</span><br />
                <span
                  >Free 30 Days Delivery return. <a href="#">Details</a></span
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="product_related_container">
        <Title style="margin-bottom: 40px">
          <div class="sub_title">
            <div class="title_side_bar"></div>
            <h2>Related Item</h2>
          </div>
        </Title>
        <ul class="product_lists">
          <ProductListing
            v-for="product in state.relatedProducts"
            :key="product.id"
            :product="product"
            :wishlist="false"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Product.scss"></style>