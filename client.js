import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './client/app.vue';

import routes from './client/routes';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import Vuex from 'vuex';


Vue.use(iView);
Vue.use(VueRouter);
Vue.use(Vuex);


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next)=>{
    iView.LoadingBar.start();
    let title = to.meta.title;
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
    next();
});

router.afterEach((to, from, next)=>{
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});

const app = new Vue({
    store: store,
    router: router,
    render: h=>h(App)
}).$mount('#app');