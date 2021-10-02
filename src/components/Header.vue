<template>
    <nav class="nav">
        <img class="nav-logo" src="../assets/logo.svg"/>
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
  name: 'Header',
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';

.nav {
    position: absolute;
    top: 0;
    left: 0;
    padding: $distance-base-3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 3;

    .nav-links {
        display: flex;

        > li {
        list-style: none;
        margin-left: $distance-base-2;
        color: $color-white;
        font-weight: $font-weight-400;
        cursor: pointer;
    }
    }
}

</style>