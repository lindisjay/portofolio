import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/LanderWeb.vue')},
        
    ]
});
export default router;