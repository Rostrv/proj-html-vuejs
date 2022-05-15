<template>
  <section class="team mb-1">
    <div class="member" v-for="(member, i) in team" :key="i">
      <img :src="require('@/assets/img/' + member.image + '.jpg')" />
      <div class="info">
        <h3>{{ member.name }}</h3>
        <span>{{ member.role }}</span>
        <div class="icons">
            <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
            <a href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>                     
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MembersComp",
  data() {
    return {
      team: [
        {
          name: "Ivo Avido",
          role: "Manager",
          image: "h1-team-1a",
        },
        {
          name: "Anna Pannocchia",
          role: "Hostess",
          image: "h1-team-2a",
        },
        {
          name: "Ruper Sciamenna",
          role: "Pizza Maker",
          image: "h1-team-4a",
        },
        {
          name: "Catherine J Junior",
          role: "Waitress",
          image: "h1-team-3a",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  transition: 0.7s ease;
}
.team {
  display: flex;
}
.member {
  position: relative;
}
.member:hover img {
  filter: opacity(0.6);
}
.member:hover .info {
  opacity:1;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  background-color: orangered;
  height: 80%;
  width: 80%;
  color: white;
  transition: .7s ease;
  opacity: 0;
  
}
span {
  text-transform: initial;
  font-size: 16px;
  margin-bottom: 10px;
}

.icons a{
    text-decoration: none;
    color: white;
    margin: 0 10px;
}
</style>