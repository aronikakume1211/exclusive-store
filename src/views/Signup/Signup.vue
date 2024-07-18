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
      <h1>Create an account</h1>
      <p>Enter your details here</p>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-col cols="12" md="12">
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            hide-details
            required
          ></v-text-field>
        </v-col>


        <v-col cols="12" md="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <Button variant="danger" type="submit" style="width: 100%"
          >Create Account</Button
        >
      </v-form>
      <Button variant="border" type="submit" style="width: 100%"
        ><i class="pi pi-google" style="margin-right: 8px"></i>Sign up with
        Google</Button
      >
      <p style="text-align: center; margin-top: 10px">
        Already have account?<RouterLink to="/login">Login in</RouterLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" src="./Signup.scss"></style>