<template>
<div>
    <HeroSection/>
    <UnderJumbo/>
    <articlesSection/>
    <SpecialsComp/>
    <MidJumbo/>
    <MembersComp/>
    <ClientsComp/>
    <PizzaType/>
    <EventsComp/>
    <BookingComp/>
</div>
    
</template>

<script>

import HeroSection from "./partials/HeroSection.vue";
import UnderJumbo from "./partials/UnderJumbo.vue"
import articlesSection from './partials/articlesSection.vue';
import SpecialsComp from "./partials/SpecialsComp.vue";
import MidJumbo from "./partials/MidJumbo.vue";
import MembersComp from "./partials/MembersComp.vue";
import ClientsComp from "./partials/ClientsComp.vue";
import PizzaType from "./partials/PizzaType.vue";
import EventsComp from "./partials/EventsComp.vue";
import BookingComp from "./partials/BookingComp.vue";




export default{
    name:"SiteMain",
    components:{
    HeroSection,
    UnderJumbo,
    articlesSection,
    SpecialsComp,
    MidJumbo,
    MembersComp,
    ClientsComp,
    PizzaType,
    EventsComp,
    BookingComp
}
}
</script>

<style lang="scss" scoped>

</style>