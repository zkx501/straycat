const routes = [{
        path: '*',
        meta: {
            title: ''
        },
        component: resolve=> require(['./404.vue'], resolve)
    },{
        path: '/',
        meta: {
            title: ''
        },
        component: resolve=> require(['./components/index.vue'], resolve)
    },{
        path: '/index',
        meta: {
            title: ''
        },
        component: resolve=> require(['./components/index.vue'], resolve)
    },{
        path: '/test',
        meta: {
            title: ''
        },
        component: resolve=> require(['./components/test.vue'], resolve)
    }];

export default routes;