

import 'normalize.css'
import "./assets/scss/app.scss";



import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
//import './firebase.config.js'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
