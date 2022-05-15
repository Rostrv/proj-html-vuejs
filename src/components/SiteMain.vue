<template>
<div>
    <HeroSection/>
    <UnderJumbo/>
    <articlesSection/>
    <SpecialsComp/>
    <MidJumbo/>
    <MembersTeam/>
</div>
    
</template>

<script>

import HeroSection from "./partials/HeroSection.vue";
import UnderJumbo from "./partials/UnderJumbo.vue"
import articlesSection from './partials/articlesSection.vue';
import SpecialsComp from "./partials/SpecialsComp.vue";
import MidJumbo from "./partials/MidJumbo.vue";
import MembersTeam from "./partials/MembersTeam.vue";


export default{
    name:"SiteMain",
    components:{
    HeroSection,
    UnderJumbo,
    articlesSection,
    SpecialsComp,
    MidJumbo,
    MembersTeam
}
}
</script>

<style lang="scss" scoped>

</style>