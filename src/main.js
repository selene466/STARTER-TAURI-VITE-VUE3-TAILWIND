import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";
import { createPinia } from "pinia";
import App from "./App.vue";

routes.push({
  path: "/:catchAll(.*)",
  redirect: "/404",
  name: "404",
});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
