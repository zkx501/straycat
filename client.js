import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './client/app.vue';

import routes from './client/routes';
// import NotFoundComponent from './client/404.vue';
//
//
// const routes = [{ path: '*', component: NotFoundComponent
// },{
//     path: '/',
//     component: resolve=> require(['./client/components/index.vue'], resolve)
// },{
//     path: '/test',
//     component: resolve=> require(['./client/components/test.vue'], resolve)
// }];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    router: router,
    render: h=>h(App)
}).$mount('#app');