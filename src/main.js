import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./pages/login.vue";
import App from "./app.vue"
import Axios from "axios";
import bootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css"
import echarts from 'echarts'

 
Vue.use(VueRouter);
Vue.use(bootstrapVue)
Vue.prototype.$http = Axios;
Vue.prototype.$echarts = echarts;

const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {
      path:"/",
      component: Login
    },
    {
      path:"/info/:name",
      name:"info",
      component:()=>import("./pages/info.vue")
    }
  ]
});

new Vue({
  router,
  render:h=>h(App)
}).$mount("#app")
