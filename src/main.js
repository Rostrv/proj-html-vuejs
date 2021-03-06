import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMagnifyingGlass, faLocationDot, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret, faMagnifyingGlass, faEye, faTwitter, faInstagram, faLinkedin, faLocationDot, faFacebookSquare, faUserGroup)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')