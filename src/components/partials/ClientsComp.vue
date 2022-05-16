<template>
  <section class="clients mb-1">
    
      <div class="singleClient" v-for="(element, i) in clients" :key="i">
        <img
          :src="require('@/assets/img/' + element.image + '.png')"
          
        />
      </div>
    
  </section>
</template>

<script>
export default {
  name: "ClientsComp",
  data() {
            return {
                clients: [{
                       
                        image: 'h1-clients-img-4'
                    },
                    {
                        
                        image: 'h1-clients-img-3'
                    },
                    {
                       
                        image: 'h1-clients-img-1'
                    },
                    {
                        
                        image: 'h1-clients-img-2'
                    },
                    {
                        
                        image: 'h1-clients-img-5'
                    },
                ]
            }
        }
};
</script>

<style lang="scss" scoped>
.clients{
    display: flex;
    justify-content: center;
    background-color: #f6f7f2;
    padding: 50px 0;
}
</style>