<template>
  <section class="specials">
    <div class="row">
      <div class="col-6 p-0">
        <div class="img-specials">
          <img src="@/assets/img/h1-img-4.jpg"/>
        </div>
      </div>
      <div class="col-6 p-0">
        <div class="text-specials">
          <div class="combos">
            <h2>specials*</h2>
            <p class="main-caption fw-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesent
              ut.
            </p>

            <div class="combo-list" v-for="(item, i) in specials" :key="i">
              <div>
                <span class="combo-price fw-bold fs-4">
                  {{ item.price }}
                </span>
              </div>

              <div>
                <span class="combo-name fw-bold fs-4">
                  {{ item.name }}
                </span>
                <p class="sub-caption">{{ item.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SpecialsComp",
  data() {
    return {
      specials: [
        {
          name: "combo piccolo",
          price: "$10",
          caption:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui.",
        },
        {
          name: "combo medio",
          price: "$20",
          caption:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui.",
        },
        {
          name: "combo grande",
          price: "$30",
          caption:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.specials {
  padding-top: 5px;
  background-color: white;
  min-height: 70vh;
}

.row{
    width: 100%;
}
img {
  width: 100%;
  height: 100%;
}

.text-specials {
  display: flex;
  justify-content: center;
  text-align: start;
  position: relative;
  text-transform: uppercase;
}

.combos {
  width: 55%;
  padding: 50px 0;
}

h2 {
  font-size: 40px;
}

p {
  text-transform: initial;
}

p.main-caption {
  color: grey;
  margin-bottom: 50px;
}

.combo-list {
  margin: 30px 0;
  display: flex;
}
.combo-price {
  color: #ab4027;
  margin-right: 10px;
}

.combo-price,
.combo-name {
  font-size: 1.4em;
}

.sub-caption {
  color: grey;
  font-size: 0.9em;
  max-width: 300px;
}

.slice-icon-circle {
  bottom: 25px;
}
</style>