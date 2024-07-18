<!-- src/components/MyButton.vue -->
<template>
  <button :class="computedClass" @click="onClick">
    <slot></slot>
  </button>
</template>
  
  <script>
export default {
  name: "Button",
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
.btn--danger {
  background-color: #db4444;
  color: #ffffff;
  border-radius: 4px;
}
.btn--border {
  border: 1px solid #111112;
  color: #000000;
  background-color: inherit;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.btn--border:hover {
  background-color: #db4444;
  color: #ffffff;
  border: 1px solid #db4444;
}
/* Add more variants as needed */
</style>
  