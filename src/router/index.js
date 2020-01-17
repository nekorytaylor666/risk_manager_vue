import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/schedule",
    name: "schedule",
    component: () => import("../views/Schedule.vue")
  },
  {
    path: "/newproject",
    name: "newproject",
    component: () => import("../views/NewProject.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
