<template>
  <div>
    <HeroSection />
    <UnderJumbo />
    <articlesSection />
    <SpecialsComp />
    <MidJumbo />
    <MembersComp />
    <ClientsComp />
    <PizzaType />
    <EventsComp />
    <BookingComp />

    <div class="icons">
      <div class="cycle">
        <img class="cycle-icon" src="@/assets/svg/svg-7.svg" alt="" />
      </div>

      <div class="cart">
        <img class="cart-icon" src="@/assets/svg/svg-9.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "./partials/HeroSection.vue";
import UnderJumbo from "./partials/UnderJumbo.vue";
import articlesSection from "./partials/articlesSection.vue";
import SpecialsComp from "./partials/SpecialsComp.vue";
import MidJumbo from "./partials/MidJumbo.vue";
import MembersComp from "./partials/MembersComp.vue";
import ClientsComp from "./partials/ClientsComp.vue";
import PizzaType from "./partials/PizzaType.vue";
import EventsComp from "./partials/EventsComp.vue";
import BookingComp from "./partials/BookingComp.vue";

export default {
  name: "SiteMain",
  components: {
    HeroSection,
    UnderJumbo,
    articlesSection,
    SpecialsComp,
    MidJumbo,
    MembersComp,
    ClientsComp,
    PizzaType,
    EventsComp,
    BookingComp,
  },
};
</script>

<style lang="scss" scoped>
.icons {
  position: fixed;
  right: 0;
  top: 20%;
  z-index: 1;
  width: 30px;
  height: 30px;
}

.cycle-icon {
  background-color: #ef2853;
  padding: 5px;
  margin-bottom: 5px;
}

.cart-icon {
  background-color: white;
  padding: 5px;
}
</style>