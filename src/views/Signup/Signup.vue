<script setup>
import signup from "../../assets/images/signup.jpeg";
import Button from "@/helper/button.vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/store/userStore";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import loading from '@/assets/images/loader.gif';

const userStore = useUserStore();
const router = useRouter();

const state = reactive({
  firstname: "",
  email: "",
  password: "",
  error: "",
});

const validateForm = () => {
  if (!state.firstname || !state.email || !state.password) {
    console.log("All fields are required.");
    state.error='All fields are required.';
    return false;
  }
  return true;
};
const handleSubmit = () => {
  if (!validateForm()) {
    return;
  }
  try {
    const res = userStore.register(state);
    res.then((response) => {
      router.push("/login");
    });
    // console.log(res);
  } catch (e) {
    console.log("Failed to register");
  }
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
            v-model="state.firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="state.email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="state.password"
            :rules="passwordRules"
            label="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <p style="color: #db4444;">{{ state.error }}</p>

        <Button variant="danger" type="submit" style="width: 100%"
          >Create Account

          <img v-if="userStore.isLoading" :src="loading" alt="loading" width="22" height="22" style="position: absolute; margin-left: 4px;" />
          </Button
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