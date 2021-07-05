import Vue from "vue";
import VueRouter from "vue-router";
import ProductTable from "@/pages/ProductTable";
import ProductEditor from "@/pages/ProductEditor";
Vue.use(VueRouter);

const routes = [ 
           {path:"/", component: ProductTable},
           {path:"/create", component: ProductEditor}
    ];

const router = new VueRouter(
    {mode: "history",
    routes});

export default router;