<template>
  <div id="app">
    <SiteHeader/>
    <SiteMain/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'


export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
}
}
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

#app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  letter-spacing: 2px;
  
}
</style>
