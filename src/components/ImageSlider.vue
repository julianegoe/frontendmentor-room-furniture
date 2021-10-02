<template>
<!-- Image Group -->
<div class="bigscreen">
    <img class="image" :src="contents[index].image" alt="furniture"/>   
</div>

<div class="smallscreen">
    <img class="image" :src="imagesMobile[index]" alt="furniture"/> 
    <Buttons @previous-content="previous" @next-content="next" class="img-btn"></Buttons>
</div>

<!-- Text Group -->
    <div class="text-content-container">
        <div class="text-content"> 
            <h1>{{contents[index].title}}</h1>
            <p>{{contents[index].description}}</p>
            <p class="call-to-action" >SHOP NOW <span><svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg></span></p>
        </div>
        <Buttons @previous-content="previous" @next-content="next" class="img-btn bigscreen"></Buttons>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Buttons from './Buttons.vue';

export default defineComponent({
  name: 'ImageSlider',
  components: {
      Buttons,
  },
  data() {
      return {
          contents: [
	{
		image: require(`@/assets/desktop-image-hero-1.jpg`),
		title: 'Discover innovative ways to decorate',
		description:
			'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
	},
	{
		image: require(`@/assets/desktop-image-hero-2.jpg`),
		title: 'We are available all across the globe',
		description:
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
	},
	{
		image: require(`@/assets/desktop-image-hero-3.jpg`),
		title: 'Manufactured with the best materials ',
		description:
			'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
	},
],
            index: 0,
            imagesMobile: [require(`@/assets/mobile-image-hero-1.jpg`), require(`@/assets/mobile-image-hero-2.jpg`), require(`@/assets/mobile-image-hero-3.jpg`)]
      }
  },
  methods: {
      next: function() {
          this.index < this.contents.length - 1 ? this.index++ : null;
      },
      previous: function() {
          this.index > 0 ? this.index-- : null;
      },
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/globals';


.bigscreen {
    grid-column: 1 / span 1;

    > .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    
}
}

.text-content-container {
    grid-column: 2 / span 1;
    display: grid;
    grid-template-rows: auto auto;

    > .text-content {
        padding: $distance-base-4 $distance-base-6;
        grid-row: 1 / span 1;

        > .call-to-action {
            letter-spacing: $distance-base-0_5;
            color: $color-black;
            padding-top: $distance-base-2;
        }

    }

    > .img-btn {
    grid-row: 2 / span 1;
    place-self: end start;
}
}

.smallscreen {
    display: none;
}

@media ($breakpoint-small) {
    .smallscreen {
        grid-column: 1 / span 1;
        display: initial;
        position: relative;
        width: 100%;
        height: 100%;

        > .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        > .img-btn {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }

    .text-content-container {
        grid-column: 1 / span 1;
    }

    .bigscreen {
        display: none;
    }
}

</style>