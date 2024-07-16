<!-- src/components/MyButton.vue -->
<template>
  <button :class="computedClass" @click="onClick">
    <slot></slot>
  </button>
</template>
  
  <script>
export default {
  name: "MyButton",
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
  computed: {
    computedClass() {
      return {
        btn: true,
        [`btn--${this.variant}`]: true,
      };
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
  
  <style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.btn--default {
  background-color: #007bff;
  color: white;
}
.btn--primary {
  background-color: #0069d9;
  color: white;
}
.btn--secondary {
  background-color: #6c757d;
  color: white;
}
.btn--danger{
    background-color: #DB4444;
    color: #FFFFFF;
}
/* Add more variants as needed */
</style>
  