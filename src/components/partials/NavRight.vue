<template>
    <div class="menu d-flex justify-content-between">
        <ul class="links d-flex mb-0 justify-content-between align-items-center p-0">
            <li v-for="element in rightLinks" :key="element">
                <a :href="element.url">{{element.name}}</a>
            </li>
        </ul>
        <ul class="options d-flex mb-0 justify-content-between align-items-center">
            <li>
                <img src="@/assets/svg/svg-1.svg" alt="">
                <a href="#">cart</a>
            </li>
            <li>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <a href="#">search</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'NavRight',

        data() {
            return {

                counterCart: 0,

                rightLinks: [{
                        name: 'event',
                        url: '#events',
                        icon: null,
                    },
                    {
                        name: 'blog',
                        url: '#testimonials',
                        icon: null,
                    },
                    {
                        name: 'landing',
                        url: '#booking',
                        icon: null,
                    },
                ],

            }
        }
    }
</script>
<style lang="scss" scoped>
.menu{
    width: 40%;
}

ul{
  list-style: none;
}

li img{
    filter: invert(1);
    margin-right:5px;
}

.links{
    width: 45%;
}

a{
    text-decoration: none;
    color: white;
    text-transform: uppercase;
}

.options li{
    margin: 0 10px
}

.fa-magnifying-glass{
    transform: rotateY(160deg);
    color:white;
    margin-right:5px;
}

a:hover{
  color:#C83B1A
}
</style>