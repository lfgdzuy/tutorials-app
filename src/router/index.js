import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/tutorials/Index.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Index,
    children: [
      {
        path: "tutorials",
        name: "tutorials",
        component: Index,
      },
    ],
  },
  {
    path: "/tutorials/new",
    name: "new-tutorial",
    component: () =>
      import(/* webpackChunkName: "new" */ "../views/tutorials/New.vue"),
  },
  {
    path: "/tutorials/:id/edit",
    name: "edit-tutorial",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/tutorials/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
