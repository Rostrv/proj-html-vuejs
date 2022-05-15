<template>
<div>
    <HeroSection/>
    <UnderJumbo/>
    <articlesSection/>
    <SpecialsComp/>
    <MidJumbo/>
</div>
    
</template>

<script>

import HeroSection from "./partials/HeroSection.vue";
import UnderJumbo from "./partials/UnderJumbo.vue"
import articlesSection from './partials/articlesSection.vue';
import SpecialsComp from "./partials/SpecialsComp.vue";
import MidJumbo from "./partials/MidJumbo.vue";


export default{
    name:"SiteMain",
    components:{
    HeroSection,
    UnderJumbo,
    articlesSection,
    SpecialsComp,
    MidJumbo,
    
}
}
</script>

<style lang="scss" scoped>

</style>