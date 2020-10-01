import Vue from 'vue'
import VueRouter from 'vue-router'

import Create from '../src/components/create.vue'
import Home from '../src/components/home.vue'
import Edit from '../src/components/edit.vue'
import Details from '../src/components/details.vue'



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/create',
            name: 'create',
            component: Create
        },
        {
            path:'/edit',
            name: 'edit',
            component: Edit
        },
        {
            path:'/details',
            name: 'details',
            component: Details
        },
    ]

});