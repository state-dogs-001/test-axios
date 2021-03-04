import Vue from "vue";
import VueRouter from "vue-router";
import Anime from "../views/AnimeAPI.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Anime",
    component: Anime
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
