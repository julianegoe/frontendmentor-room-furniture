<template>
    <footer class="footer-layout">
        <Footer></Footer>
    </footer>
</template>

<script>
import { defineComponent } from 'vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'FooterLayout',
  components: {
      Footer,
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';

.footer-layout {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

</style>