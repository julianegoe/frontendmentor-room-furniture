<template>
    <div>
        <button @click="$emit('previousContent')" class="left">
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </button>
        <button  @click="$emit('nextContent')" class="right">
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Buttons',
  emits: ['previousContent', 'nextContent'],
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';

button {
    all: none;
    width: $distance-base-6;
    border: none;
    padding: $distance-base-2;
    background-color: $color-black;
    cursor: pointer;
}

button:hover {
        background-color: $color-very-dark-grey;
    }



</style>