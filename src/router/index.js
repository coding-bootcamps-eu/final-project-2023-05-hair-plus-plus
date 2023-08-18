import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormCustomerView from "../views/FormCustomerView.vue";
import SearchCustomerView from "../views/SearchCustomerView.vue";
import CardCustomerView from "@/views/CardCustomerView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/customerform",
    name: "customerform",
    component: FormCustomerView,
  },
  {
    path: "/customerssearch",
    name: "customerssearch",
    component: SearchCustomerView,
  },
  {
    path: "/customer/:id",
    name: "customer",
    component: CardCustomerView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
