import CategoryList from "@/components/CategoryList.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: CategoryList,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = "Категории в зависимости от выбранного города!";
    next();
});

