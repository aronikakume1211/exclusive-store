<!-- src/components/MyButton.vue -->
<template>
    <div class="title_cintainer">
        <slot></slot>
    </div>
  </template>
    
    <script>
  export default {
    name: "Title",
    props: {
      type: {
        type: String,
        default: "button",
      },
      variant: {
        type: String,
        default: "default",
      },
    },
    
    
  };
  </script>
    
    <style scoped>
  .header--title{

  }
  /* Add more variants as needed */
  </style>
    