<template>
    <div class="content-layout">
        <image-slider></image-slider>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ImageSlider from '../components/ImageSlider.vue';

export default defineComponent({
  name: 'ContentLayout',
  components: {
      ImageSlider,
  },
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';

.content-layout {
    display: grid;
    grid-template-columns: 60% auto;
    grid-gap: 0;
    overflow: hidden;
}

@media ($breakpoint-small) {
    .content-layout {
        grid-template-rows: auto auto;
    }
}



</style>