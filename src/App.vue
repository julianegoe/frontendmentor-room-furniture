<template>
  <Header @menuTriggered="triggerMenu"></Header>
  <nav-mobile @menuTriggered="triggerMenu" class="nav-mobile" :class="{closed: smallMenuClosed}"></nav-mobile>
  
  <content-layout>
  </content-layout>

  <footer-layout>
  </footer-layout>
  
</template>

<script>
import ContentLayout from './layouts/ContentLayout.vue';
import Header from './components/Header.vue';
import FooterLayout from './layouts/FooterLayout.vue';
import NavMobile from './components/NavMobile.vue';


export default {
  name: 'App',
  components: {
    ContentLayout,
    Header,
    FooterLayout,
    NavMobile,
  },
  methods: {
    triggerMenu() {
      this.smallMenuClosed = !this.smallMenuClosed;
    },
  },
  data() {
    return {
      smallMenuClosed: true,
    }
  }
}
</script>

<style lang="scss">
@import './assets/globals';


body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Spartan', sans-serif;
}

  @media ($breakpoint-small) {

      .nav-mobile {
        display: initial;
        transition: all 250ms ease;

        &.closed {
         transform: translateY(-200px);
      }
    }
  }


</style>
