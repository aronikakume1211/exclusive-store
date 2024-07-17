<template>
    <div class="star-rating">
      <span v-for="star in stars" :key="star" class="star">
        <i :class="{'filled': star <= fullStars, 'half-filled': star === fullStars + 1 && hasHalfStar, 'empty': star > fullStars + (hasHalfStar ? 1 : 0)}">★</i>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarRating',
    props: {
      rating: {
        type: Number,
        required: true
      },
      maxStars: {
        type: Number,
        default: 5
      }
    },
    computed: {
      fullStars() {
        return Math.floor(this.rating);
      },
      hasHalfStar() {
        return this.rating % 1 !== 0;
      },
      stars() {
        return Array.from({ length: this.maxStars }, (v, i) => i + 1);
      }
    }
  }
  </script>
  
  <style scoped>
  .star-rating i{
    font-style: normal;
  }
  .star {
    font-size: 24px;
    color: gray;
  }
  .filled {
    color: #FFAD33;
  }
  .half-filled {
    background: linear-gradient(to right, #FFAD33 50%, lightgray 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .empty {
    color: lightgray;
  }
  </style>
  