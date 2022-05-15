<template>
  <section class="jumbo mb-1">
    <div class="part1 side top"></div>
    <div class="part2 center top"></div>
    <div class="part3 side top"></div>
    <div class="part4 side mid"></div>
    <div class="part5 center mid">
        <p>Go ahead and <br> build your <br> own pizza <br> we won't <br> judge!</p>
    </div>
    <div class="part6 side mid"></div>
    <div class="part7 side bottom"></div>
    <div class="part8 center bottom"></div>
    <div class="part9 side bottom"></div>
  </section>
</template>

<script>
export default {
  name: "MidJumbo",
};
</script>

<style lang="scss" scoped>
.jumbo {
  display: flex;
  flex-wrap: wrap;
  height: 550px;
  min-height: 550px;
  position: relative;
  padding-bottom: 5px;
}

div {
  background-image: url("@/assets/img/h3-background-img.jpg");
}

.side{
     width: 10%;
      height: 25%;
}

.center{
    width: 80%;
}

.side.mid{
    height: 50%;
}

 .part1,
    .part2 {
      background-position: bottom right;
    }

    .part5,
    .part8 {
      background-size: 100%;
    }

    .part2 {
      background-size: 110%;
    }

    .part3 {
      background-position: bottom left;
    }

    .part4 {
      background-position: bottom 93% right;
    }

    .part5 {
      background-position: left top;
      position: relative;
    }
    .part6 {
      background-position: left -30px top -50px;
    }

    .part7 {
      background-position: top 66% right -10px;
      background-size: 1200%;
    }

    .part8 {
      background-position: center bottom 30%;
    }

    .part9 {
      background-position: bottom 38% right 98%;
    }
    p {
        position: absolute;
        left: 15%;
        top: -5%;
        color: white;
        font-size: 60px;
        text-align: start;
        line-height: 59px;
        text-transform: uppercase;
      }
</style>