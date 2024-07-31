<script setup>
import signup from "../../assets/images/signup.jpeg";
import Button from "@/helper/button.vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "@/store/userStore";
import { reactive } from "vue";
import { capitalize } from "@/filters/filters";
import { useRouter } from "vue-router";
import loading from '@/assets/images/loader.gif';

const userStore = useUserStore();
const msg = "log in to Exclusive";
const router = useRouter();

const state = reactive({
  email: "michaelw",
  password: "michaelwpass",
});

const handleSubmit = async () => {
  await userStore.login({ email: state.email, password: state.password });
  if (userStore.user) {
    router.push("/");
  }
};
</script>
<template>
  <div class="container_fluid signup_signin">
    <div class="signup_image_container">
      <img :src="signup" alt="signup" />
    </div>
    <div class="signup_form_container">
      <h1>{{ capitalize(msg) }}</h1>
      <p>Enter your details below</p>
      <v-form v-model="valid" @submit.prevent="handleSubmit">
        <v-col cols="12" md="12">
          <v-text-field
            v-model="state.email"
            :rules="emailRules"
            label="E-mail"
            aria-placeholder="Email or Phone Number"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="state.password"
            :rules="passwordRules"
            label="Password"
            aria-placeholder="Password"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <div class="signup_button_container">
          <Button variant="danger" type="submit"
            >Log in
            <img
              v-if="userStore.isLoading"
              :src="loading"
              alt="loading"
              width="22"
              height="22"
              style="position: absolute; margin-left: 4px"
            />
          </Button>
          <RouterLink to="/login">Forget Password?</RouterLink>
        </div>
      </v-form>
    </div>
  </div>
</template>

<style lang="scss" src="./Signup.scss"></style>