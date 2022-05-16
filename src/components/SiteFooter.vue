<template>
  <section class="footer">
    <div class="row m-0">
      <div class="col-6 info">
        <div class="row">
          <div class="col-4 find">
            <h5 class="">find our restaurants</h5>
            <ul>
              <li
                class="restaurant"
                v-for="(element, i) in restaurants"
                :key="'a' + i"
              >
                <span class="">{{ element.address }}</span>
                <span class="">{{ element.city }}</span>
                <span class="">{{ element.phoneNumber }}</span>
              </li>
              <li class="footer-credits">
                <span class="credits">Created with &#9825; by </span>
                <a href="" class="credits-end">Qode Interactive</a>
              </li>
            </ul>
          </div>
          <div class="col-4 working-hours">
            <h5 class="">working hours</h5>

            <ul>
              <li v-for="(item, i) in workingHours" :key="'b' + i">
                <div class="d-flex">
                  <h6>{{ item.day }}</h6>
                  
                </div>
                <span
                  :class="
                    item.restaurantStatus == 'Kitchen Closed'
                      ? 'closed'
                      : ''
                  "
                  >{{ item.restaurantStatus }}</span
                >
              </li>

              <li class="footer-social">
                <h6 class="">follow us:</h6>
                <div class="social">
                  <a href="#twitter">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </a>

                  <a href="#facebook">
                    <font-awesome-icon icon="fa-brands fa-facebook-square" />
                  </a>

                  <a href="#instagram">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                  </a>

                  <a href="#linkedin">
                    <font-awesome-icon icon="fa-brands fa-linkedin" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-4 caption">
            <p>
              the don peppe crew first and foremost values an authentic well
              baked slice of pizza.
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 image">
        <img src="@/assets/img/footer-img-1.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      restaurants: [
        {
          address: "1614 E. Bell Rd #104",
          city: "Salerno, AZ 85022",
          phoneNumber: "(602) 867-1010",
        },
        {
          address: "204 E. Pizzetta Tommaso",
          city: "Sorrento, AZ 85022",
          phoneNumber: "(358) 867-1010",
        },
        {
          address: "Viale Puglia 54",
          city: "Torre Del Greco, AZ 85022",
          phoneNumber: "(359) 867-1010",
        },
        {
          address: "Corso Italia AA",
          city: "Naples, AZ 85022",
          phoneNumber: "(081) 867-1010",
        },
      ],

      workingHours: [
        {
          day: "monday",
          restaurantStatus: "Kitchen Closed",
        },
        {
          day: "tuesday until friday",
          restaurantStatus: "9 AM - 10 PM",
        },
        {
          day: "saturday",
          restaurantStatus: "11 AM - Midnight ",
        },
        {
          day: "sunday",
          restaurantStatus: "9 AM - 10 PM",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  color: white;
}

img{
    width:100%;
}

.working-hours li{
    margin-bottom: 20px;
}

h5 {
  color: #a58239;
  text-transform: uppercase;
  margin-bottom: 20px;
}

h6 {
  color: #a58239;
  text-transform: uppercase;
  margin: 0;
}

.row {
  width: 100%;
}

.col-6 {
  padding: 0;
}

.col-4 {
  text-align: start;
}

.info {
  background-color: #1c1c1c;
  background-image: url("@/assets/img/bg-stars.png");
  padding: 50px;
}

.restaurant {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.credits {
  color: #a58239;
  
}

.footer-credits{
    margin-top: 100px;
}

.social a{
    color: white;
    margin-right: 5px;
}

a {
  color: green;
  text-decoration: none;
}

.closed{
    color: #D2401E;
}

.caption{
    color: white;
    text-transform: uppercase;
    font-size: 25px;
}

span {
  color: #6f6f6e;
}
</style>