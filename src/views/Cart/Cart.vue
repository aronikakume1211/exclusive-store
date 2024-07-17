<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "@/store/cartStore";
import { trimmedTitle } from "@/helper/utils";
import Button from "@/helper/button.vue";
import { reactive } from "vue";
const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

const updateCart = () => {
  // cartStore.updateCart();
  console.log("updated..");
};
const state = reactive({
  quantity: 1,
});
</script>
<template>
  <div class="container conatiner_not_found">
    <p class="breadcrumbs">
      <RouterLink to="/">Home</RouterLink>/
      <span>Cart</span>
    </p>
    <!-- Cart List -->
    <div v-if="cartItems.length > 0">
      <table v-if="cartItems" class="cart_lists_table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.cartItems" :key="item.id">
            <td class="cart_image_container">
              <i
                class="pi pi-times-circle"
                @click="cartStore.removeItemFromCart(item)"
                style="color: red"
              ></i>
              <RouterLink :to="'/product/' + item.id">
                <img
                  :src="item.thumbnail"
                  alt="item.title"
                  width="48"
                  height="42"
                />
              </RouterLink>
              {{ trimmedTitle(item.title, 15) }}
            </td>
            <td>${{ item.price }}</td>
            <td><input type="number" min="1" value="1" /></td>
            <td>${{ item.price }}</td>
          </tr>
        </tbody>
      </table>
      <div class="cart_update_container">
        <RouterLink to="/">Return To Shop</RouterLink>
        <Button @click="updateCart" variant="border">Update Cart</Button>
      </div>
      <!-- Cart coupon code and cart total -->
      <div class="cart_coupon_cart_total">
        <div class="cart_coupon_container">
          <p>
            <input type="text" placeholder="Coupon Code" />
            <Button variant="danger">Apply Coupon</Button>
          </p>
        </div>
        <div class="cart_total_container">
          <h3>Cart Total</h3>
          <p>
            <span>Subtotal:</span> <span>${{ cartStore.cartTotal }}</span>
          </p>
          <hr />
          <p><span>Shipping: </span><span>Free</span></p>
          <hr />
          <p>
            <span>Total: </span> <span>${{ cartStore.cartTotal }}</span>
          </p>
          <Button variant="danger">Proceed To Checkout</Button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="not_found_container">
        <h1 class="not_found_title">Your cart is empty</h1>
        <p>Please add more products to your cart.</p>

        <RouterLink to="/" class="btn">Back to home page</RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Cart.scss"></style>