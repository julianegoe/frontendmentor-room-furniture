<template>
  <Header></Header>
  
  <content-layout>
  </content-layout>

  <footer-layout>
  </footer-layout>
  
</template>

<script>
import ContentLayout from './layouts/ContentLayout.vue';
import Header from './components/Header.vue';
import FooterLayout from './layouts/FooterLayout.vue';


export default {
  name: 'App',
  components: {
    ContentLayout,
    Header,
    FooterLayout,
  }
}
</script>

<style lang="css">

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Spartan', sans-serif;
}

</style>
