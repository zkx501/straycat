const routes = [{
        path: '*',
        meta: {
            title: '错误页'
        },
        component: resolve=> require(['./404.vue'], resolve)
    },{
        path: '/',
        meta: {
            title: '首页'
        },
        component: resolve=> require(['./components/index.vue'], resolve)
    },{
        path: '/index',
        meta: {
            title: '首页2'
        },
        component: resolve=> require(['./components/index.vue'], resolve)
    },{
        path: '/test',
        meta: {
            title: '测试'
        },
        component: resolve=> require(['./components/test.vue'], resolve)
    },{
        path: '/register',
        meta: {
            title: '注册'
        },
        component: resolve=> require(['./components/register.vue'], resolve)
    },{
        path: '/login',
        meta: {
            title: '登录'
        },
        component: resolve=> require(['./components/login.vue'], resolve)
    },{
        path: '/article',
        meta: {
            title: '文章'
        },
        component: resolve=> require(['./components/article.vue'], resolve)
    }];

export default routes;