<template>
  <section class="pizza-type py-5">
    <div class="title">
      <span>Choose your flavor</span>
      <h3 class="text-uppercase mb-3">The best pizza menu in town</h3>
      <p class="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ullam sed
        <br />
        ipsa aliquam in sit ad non assumenda nostrum?
      </p>
    </div>

    <div class="row">
      <div class="col-2" v-for="(element, i) in products" :key="i">
        <img :src="require('@/assets/img/' + element.image + '.png')" />

        <h5 class="name">{{ element.name }}</h5>

        <div>
          <span v-if="element.initialPrice !== null" class="initialPrice">{{
            element.initialPrice
          }}</span>

          <span class="currentPrice">{{ element.currentPrice }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PizzaType",
  data() {
    return {
      products: [
        {
          name: "bismarck",
          image: "h3-product-img-1a",
          initialPrice: "$35.00",
          currentPrice: "$30.00",
        },
        {
          name: "fiori di zucca",
          image: "h3-product-img-2a",
          currentPrice: "$30.00",
          initialPrice: null,
        },
        {
          name: "valdostana",
          image: "h3-product-img-3a",
          currentPrice: "$7.00 - $50.00",
          initialPrice: null,
        },
        {
          name: "pizza tartufata",
          image: "h3-product-img-4a",
          currentPrice: "$45.00",
          initialPrice: null,
        },
        {
          name: "francescana",
          image: "h3-product-img-5a",
          currentPrice: "$25.00",
          initialPrice: "$35.00",
        },
        {
          name: "campagnola",
          image: "h3-product-img-6a",
          currentPrice: "$50.00 - $95.00",
          initialPrice: null,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  color: orangered;
  text-transform: uppercase;
  font-size: 12px;
}

img {
  width: 50%;
  margin-bottom: 20px;
}

.row {
  width: 100%;
  margin-top: 50px;
}

.name {
  text-transform: uppercase;
  color: #b6913d;
}

.initialPrice {
  margin-right: 10px;
  color: lightgrey;
  text-decoration: line-through;
}
</style>