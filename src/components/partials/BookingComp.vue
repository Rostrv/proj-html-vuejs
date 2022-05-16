<template>
  <section class="booking">
    <div class="elements">
      <div class="users">
        <font-awesome-icon icon="fa-solid fa-user-group" />
        <input type="number" placeholder="1 Person" min="1" required />
      </div>
<span>for</span>
      <input
        type="date"
        id="start"
        name="trip-start"
        value="2022-05-20"
        min="2022-01-01"
        max="2022-12-31"
      />
<span>at</span>
      <input
        type="time"
        id="appt"
        name="appt"
        min="12:00"
        max="23:00"
        value="19:00"
        required
      />
      <button class="btn rounded-0">book a table</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookinComp",
};
</script>

<style lang="scss" scoped>
.booking {
  display: flex;
  flex-wrap: initial;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(http://localhost:8081/img/h3-background-img-3.534ebd33.jpg);
  background-size: cover;
  background-position: right;
  height: 250px;
}

.elements {
  padding: 50px 0;

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 70%;
}

.users input{
  width: 100%;
}

input {
  padding: 15px 15px;
  color: black;
  border: 1.5px solid #1f1f1f;
  width:20%

}

[type="number"]::-webkit-inner-spin-button {
  display: none;
}

.users {
  position: relative;
}

.fa-user-group {
  position: absolute;
  right: 15px;
  top: 20px;
  width: 23px;
}

.btn {
  background-color: #c83b1a;
  color: #ffffff;
  text-transform: uppercase;
  padding: 15px 50px;
}

span{
  text-transform: uppercase;
  color: white;
}
</style>