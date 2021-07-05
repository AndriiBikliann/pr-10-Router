import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import Product from '@/pages/Product'
import AddProduct from '@/pages/AddProduct'

Vue.use(VueRouter);

const routes = [ 
    { path: '/', name: 'home', component: Home },
    { path: '/about', component: About },
    { path: '/list', name: 'products', component: Products },
    { path: '/product/:product_id', name: 'edit', component: Product },
    { path: '/add', component: AddProduct },
];

const router = new VueRouter(
    {mode: "history",
    routes});

export default router;