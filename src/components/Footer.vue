<template>
        <img class="left" src="../assets/image-about-dark.jpg"/>
        <div class="middle">
            <h2>ABOUT OUR FURNITURE</h2>
            <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <img class="right" src="../assets/image-about-light.jpg"/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';

.left, .middle, .right {
    width: 100%;
    object-fit: cover;
}

.middle {
    padding: $distance-base-3 $distance-base-2;
}


</style>