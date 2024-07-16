<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container conatiner_not_found">
    <p class="breadcrumbs"><RouterLink to="/">Home</RouterLink>/ <span>404 Error</span></p>
    <div class="not_found_container">
      <h1 class="not_found_title">404 Not Found</h1>
      <p>Your visisted page not found. You may go home page.</p>

      <RouterLink to="/" class="btn">Back to home page</RouterLink>
    </div>
  </div>
</template>

<style src="./NotFound.scss" lang="scss"></style>