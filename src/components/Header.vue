<template>
    <nav class="nav bigscreen">
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

    <nav class="nav smallscreen">
        <a class="icon-burger" @click="$emit('menuTriggered')"><svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg> </a>
        <img class="nav-logo" src="../assets/logo.svg"/>
    </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  emits: ['menuTriggered'],
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

    > .nav-links {
        display: flex;

        > li {
        list-style: none;
        margin-left: $distance-base-2;
        color: $color-white;
        font-weight: $font-weight-400;
        cursor: pointer;
    }
}

&.smallscreen {
    display: none;
}
}

@media ($breakpoint-small) {

    .nav {
        &.bigscreen {
            display: none;
        }
    }

    .nav {
        &.smallscreen {
            display: flex;
            width: 50%;
            justify-content: space-between;
        }

        > .icon-burger {
            cursor: pointer;
        }
    }

}


</style>