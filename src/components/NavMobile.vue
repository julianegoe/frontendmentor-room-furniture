<template>
  <nav class="nav">  
    <svg @click="$emit('menuTriggered')" class="icon-close" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
     <ul class="nav-links">
            <li>
                home
            </li>
            <li>
                shop
            </li>
            <li>
                about
            </li>
            <li>
                contact
            </li>
        </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavMobile',
  emits: ['menuTriggered']
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';

.nav {
    display: none;
}

@media ($breakpoint-small) {
    .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    padding: $distance-base-3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 3;
    background-color: $color-white;

    .nav-links {
        display: flex;

        > li {
        list-style: none;
        margin-left: $distance-base-2;
        color: $color-black;
        font-weight: $font-weight-400;
        cursor: pointer;
    }
    }

    .icon-close {
        cursor: pointer;
    }
}
}

</style>
