<template>
  <div class="menu d-flex justify-content-between">
    <button class="btn text-uppercase text-white">
      order online
    </button>
    <ul class="links d-flex mb-0 justify-content-between align-items-center p-0">
      <li v-for="element in leftLinks" :key="element">
        <a :href="element.url">{{ element.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'NavLeft',
    data(){
        return{
            leftLinks:[
            {name: 'home',
            url: '#',
           
          },
          {
            name: 'pages',
            url: '#footer-info',
            
          },
          {
            name: 'menu',
            url: '#menu',
            
          },
            ]

        }
    }
}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}

.btn{
  background-color: #C83B1A;
  padding: 8px 20px;
  border:none;
  border-radius: 0;
}

.menu{
  width: 40%;
}

.links{
  width:45%;
}

a{
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}

a:hover{
  color:#C83B1A
}
</style>