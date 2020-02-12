import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: ()=>import('../views/Home'),
        },
        {
            path: '/detail/:id', 
            component: ()=>import('../views/Detail'),
        },
        {
            path: '/add',
            component: ()=>import('../views/Add'),
        },
        {
            path: '*',
            component: ()=>import('../views/404')
        }
    ]
});

export default router;