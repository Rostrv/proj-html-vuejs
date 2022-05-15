<template>
<div>
    <HeroSection/>
    <UnderJumbo/>
    <articlesSection/>
</div>
    
</template>

<script>

import HeroSection from "./partials/HeroSection.vue";
import UnderJumbo from "./partials/UnderJumbo.vue"
import articlesSection from './partials/articlesSection.vue';

export default{
    name:"SiteMain",
    components:{
        HeroSection,
        UnderJumbo,
        articlesSection

    }
}
</script>

<style lang="scss" scoped>

</style>