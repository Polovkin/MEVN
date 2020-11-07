

import 'normalize.css'

import "./assets/scss/app.scss";
import 'bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'


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
