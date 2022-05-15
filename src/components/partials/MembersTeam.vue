<template>
  <section class="team">
    <div class="team-member" v-for="(element, i) in team" :key="i">
      <img
        :src="require('@/assets/img/' + element.image + '.jpg')"
        :alt="'foto di ' + element.name"
      />

      <!-- NOTE informazioni del singolo membro che compaiono all'hover sull'immagine -->
      <div class="info-member">
        <h2 class="fw-500">{{ element.name }}</h2>

        <span class="fw-300">{{ element.role }}</span>

        <div class="socials"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MembersTeam",
  data() {
    return {
      team: [
        {
          name: "Maccio Capatonda",
          role: "Manager",
          image: "h1-team-1a",
        },
        {
          name: "Anna Pannocchia",
          role: "Hostess",
          image: "h1-team-2a",
        },
        {
          name: "Ivo Avido",
          role: "Pizza Maker",
          image: "h1-team-3a",
        },
        {
          name: "Rupert Sciamenna",
          role: "Waitress",
          image: "h1-team-4a",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.team {
  display: flex;
}

.team-member {
  width: 25%;
  position: relative;
}
.team-member:hover img {
  opacity: 0.6;
}

.team-member:hover .info-member {
  opacity: 1;
}

img {
  width: 100%;
  transition: 0.7s ease;
  backface-visibility: hidden;
  opacity: 1;
}

.info-member {
  // centrare il div che compare all'hover
  position: absolute;
  // centrare le info presenti nel div centrato
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  transition: 0.7s ease;
  opacity: 0;
  background-color: orange;
  height: 80%;
  width: 80%;
  color: white;
  cursor: default;
}
  span {
    text-transform: initial;
    font-size: 1.2em;
  }

</style>