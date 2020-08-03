import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import ShoppingCarComponent from './components/ShoppingCarComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import store from "./store/index.js"
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueSweetalert2);

const routes = [
  { path: '/car', component: ShoppingCarComponent },
  { path: '/', component: ProductsComponent },
  { path: '/products', component: ProductsComponent },
  { path: '*', component: ErrorComponent }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
