<script setup>
import signup from "../../assets/images/signup.jpeg";
import Button from "@/helper/button.vue";
import { RouterLink } from "vue-router";

const handleSubmit = () => {
  console.log("Submit");
};
</script>
<template>
  <div class="container_fluid signup_signin">
    <div class="signup_image_container">
      <img :src="signup" alt="signup" />
    </div>
    <div class="signup_form_container">
      <h1>Log in to Exclusive</h1>
      <p>Enter your details below</p>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-col cols="12" md="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            aria-placeholder="Email or Phone Number"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="E-mail"
            aria-placeholder="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <div class="signup_button_container">
          <Button variant="danger" type="submit">Log in</Button>
          <RouterLink to="/login">Forget Password?</RouterLink>
        </div>
      </v-form>
    </div>
  </div>
</template>

<style lang="scss" src="./Signup.scss"></style>