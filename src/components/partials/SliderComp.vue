<template>
  <div class="">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg.img" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">Prev</a>
    <a class="next" @click="next" href="#">next</a>
  </div>
</template>

<script>
export default {
  name: "SliderComp",
  data() {
    return {
      images: [
        { img: require("@/assets/img/h3-pizza-1.png") },
        { img: require("@/assets/img/h3-pizza-2.png") },
        { img: require("@/assets/img/h3-pizza-3.png") },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}
 
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  width: 350px;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  background-color: white;
  padding: 10px 20px;
  font-size: 12px;
  border-top-left-radius: 68px;
  border-top-right-radius: 68px;
  text-decoration: none;
  color: orange;
  text-transform: uppercase;
}

.next {
  transform: rotate(270deg);
  right: -14px;
}

.prev {
  left: -14px;
  transform: rotate(90deg);
}
</style>