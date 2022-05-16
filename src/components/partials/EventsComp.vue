<template>
  <section class="events mb-1">
    <div class="row m-0">
      <div class="col-6 left">
        <div class="list-container">
          <div class="events-list text-white ">
            <span class="text-uppercase">made with love</span>
            <h2 class="text-uppercase">Delish pizza deals</h2>
            <ul>
              <li
                class="single-event d-flex bb"
                v-for="(element, i) in events"
                :key="i"
              >
                <div class="event-date text-uppercase">
                  <span class="event-day">{{ element.day }}</span>
                  <span class="event-month">{{ element.month }}</span>
                </div>

                <div class="event-details">
                  <p class="event-name text-uppercase">{{ element.name }}</p>
                  <div class="event-location">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    <span>{{ element.location }}</span>
                  </div>
                </div>
                
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div class="col-6 right">
        <img src="@/assets/img/h3-img-5a.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventsComp",
  data() {
    return {
      events: [
        {
          name: "traditional neapolitan pies in kyoto pizza mercato",
          location: "204 E. Pizzetta Tommaso",
          day: "02",
          month: "nov",
        },
        {
          name: "terrazza patio dining space opening this weekend",
          location: "204 E. Pizzetta Tommaso",
          day: "03",
          month: "nov",
        },
        {
          name: "sienna private dining room with stéphane brunn",
          location: "204 E. Pizzetta Tommaso",
          day: "04",
          month: "nov",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  width: 100%;
}

img {
  width: 100%;
}

.list-container {
  background-color: #1c1c1c;
  background-image: url('@/assets/img/bg-stars.png');
}

.events-list {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: flex-start;
  padding-top: 50px;
  
}

.single-event {
  margin-bottom: 80px;
}

.col-6 {
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
}

span {
  color: orangered;
  font-weight: lighter;
}


.event-day {
  display: block;
  font-size: 60px;
  font-weight: bold;
  
}

.event-month {
  font-size: 1.5em;
  color: white;
  font-weight: bold;
}

.event-details {
  margin: 15px 0 0 15px;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  
  
}
.event-name {
 
  color: white;
  font-size: 25px;
  text-align:start
  
}

.event-location {
  color: orangered;
  text-align: start;
  
}

.fa-location-dot{
    margin-right: 5px;
}

.single-event::after .bb{
    border-bottom: 3px dotted orange;
}
</style>