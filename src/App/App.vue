<script setup>
import "./App";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <keep-alive>
    <RouterView />
  </keep-alive>
  <Footer />
</template>

<style src="./App.scss" lang="scss"></style>