<template>
  <section class="hero">
    <div class="slider">
      <SliderComp />
    </div>   
  </section>
</template>

<script>
import SliderComp from "@/components/partials/SliderComp.vue";

export default {
  name: "HeroSection",
  components: {
    SliderComp,
  },
  data() {
    return {
      cardsCounter: 4,
                showByIndex: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-color: #1c1c1c;
  background-image: url(@/assets/img/bg-stars.png);
  background-repeat: repeat;
  background-position: center;
  padding-top: 20px;
}

.slider {
  background-image: url(@/assets/img/h3-rev-img-5.png);
  background-repeat: no-repeat;
  background-position: top;
  height: 500px;
}


</style>