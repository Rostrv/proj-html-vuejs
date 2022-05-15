<template>
  <section id="articles">
    <div class="slider">
      <div class="slider-content">
        <img
          src="@/assets/img/double-quotes.png"
          
          class="quotes"
        />

        <p class="review">“ {{ articles[currentIndex].review }} ”</p>
        <p class="paper">{{ articles[currentIndex].paper }}</p>

        <div class="dots">
          <button
            class="dot"
            :class="i == currentIndex ? 'currentDot' : ''"
            v-for="(item, i) in articles"
            :key="i"
            @click="clickDots(i)"
          ></button>
        </div>
      </div>

      <div class="prev">
        <a @click.prevent="prev" href="">prev</a>
      </div>
      <div class="next">
        <a @click.prevent="next" href="">next</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "articlesSection",

  data() {
    return {
      currentIndex: 0,

      articles: [
        {
          review:
            "forget the trendy pizza shops this hidden spot makes the best new york-style pizza slice in naples",
          paper: "washington post 2018",
        },
        {
          review:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab harum eligendi delectus consequatur",
          paper: "chicago tribune 2019",
        },
        {
          review:
            "Lorem ipsum dolor sit. Nulla ad nam facilis error accusamus accusantium libero dolorem obcaecati",
          paper: "the new york times 2020",
        },
      ],
    };
  },

  methods: {
    next() {
      this.currentIndex += 1;
      if (this.currentIndex > this.articles.length - 1) {
        this.currentIndex = 0;
      }
    },

    prev() {
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = this.articles.length - 1;
      }
    },

    clickDots(indexImage) {
      this.currentIndex = indexImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  background: white url("@/assets/img/h3-testimonials-bckgrnd.jpg")
    no-repeat top;
  position: relative;
}

.slider-content {
  height: 60vh;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.quotes {
  height: 50px;
}

.review {
  line-height: 24px;
  max-width: 630px;
  margin-top: 40px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.paper {
  color: orangered;
  font-size: 16px;
  margin: 10px 0 50px 0;
  text-transform: uppercase;
}

.dots {
  padding: 10px;
  text-align: center;
  z-index: 1;
  position: absolute;
  bottom: 15%;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #ebebde;
  border-radius: 50%;
  margin: 0 7px;
  border: none;

  &:hover {
    cursor: pointer;
  }
}

.currentDot {
  background-color: lightslategray;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 45%;
  background-color: white;
  padding: 10px 20px;
  font-size: 12px;
  border-top-left-radius: 68px;
  border-top-right-radius: 68px;
  text-decoration: none;
  
  text-transform: uppercase;
}
.next {
  right: -14px;
  transform: rotate(270deg);
}

.prev {
  left: -17px;
  transform: rotate(90deg);
}

a{
    text-decoration: none;
    color: orangered;
    
}
</style>