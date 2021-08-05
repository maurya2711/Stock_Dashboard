import { createWebHistory, createRouter } from "vue-router";
import MyStock from "./components/MyStock.vue";
import Search from "./components/Search.vue";

const routes = [
  {
    path: "/",
    name: "landingpage",

    component: Search,
  },
  {
    path: "/mystock",
    name: "MyStock",
    component: MyStock,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
