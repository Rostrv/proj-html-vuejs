<template>
  <section class="mb-2">
    <div class="row">
      <div
        class="col-3 g-2"
        v-for="(image, index) in images"
        :key="index.img"
        :src="image.img"
      >
        <div class="box">
          <img :src="image.img" alt="" />
          <font-awesome-icon icon="fa-regular fa-eye" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UnderJumbo",
  data() {
    return {
      images: [
        {
          img: require("@/assets/img/h3-img-1.jpg"),
        },
        {
          img: require("@/assets/img/h3-img-2.jpg"),
        },
        {
          img: require("@/assets/img/h3-img-3.jpg"),
        },
        {
          img: require("@/assets/img/h3-img-4.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.row {
  display: flex;

  width: 100%;
  margin: auto;
}

.col-3 {
  position: relative;
}

.box {
  width: 100%;
}


.box:hover .fa-eye {
  display: block;
}

.box:hover img {
  filter: opacity(0.5);
}

.fa-eye {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: orangered;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
  display: none;
}
</style>