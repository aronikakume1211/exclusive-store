<script setup>
import footerScript from "./Footer.js";
</script>
<template>
  <footer>
    <div class="container footer_top">
        <div class="subscribe_container">
            <img :src="footerScript.footerlogo" alt="">
            <h4>Subscribe</h4>
            <p>Get 10% off your first order</p>
            <div class="subscribe_field_container">
                <input type="text" placeholder="Enter your email">
                <i class="pi pi-send"></i>
            </div>

        </div>
        <div class="support_container">
            <h2>Support</h2>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            <a href="tel:+25184949494">+2454545546565</a>
        </div>
        <div class="account_container">
            <h2>Account</h2>
            <ul>
                <li><a href="/account">My Account</a></li>
                <li><a href="/login">Login/Register</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/wishlist">Wishlist</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
        </div>

        <div class="quick_link_container">
            
        </div>
        <h2>Footer Logo</h2>
    </div>
    <div class="footer_bottom">
        <p>
            Copyright Rimel 2022. All right reserved
        </p>
    </div>

  </footer>
</template>
<style src="./Footer.scss" lang="sass"></style>