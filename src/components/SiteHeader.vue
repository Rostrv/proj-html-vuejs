<template>
<div class="header">
  
  <nav class="d-flex justify-content-between align-items-center">
    <navLeft />
    <SiteLogo />
    <NavRight />
  </nav>

</div>

  
</template>

<script>
import NavLeft from "./partials/NavLeft.vue";
import SiteLogo from "./partials/SiteLogo.vue";
import NavRight from "./partials/NavRight.vue";
 export default {
        name: 'SiteHeader',

        components: {
            NavLeft,
            SiteLogo,
            NavRight
        },

    }
</script>

<style lang="scss" scoped>

.header{
  background-color: #1c1c1c;
  background-image: url(@/assets/img/bg-stars.png);
  background-repeat:repeat;
  background-position:center;
  padding:20px 0;
  

}
nav{
  height: 100%;
    width: 80%;
    margin: 0 auto;
}
</style>