import { createWebHistory, createRouter } from "vue-router";

// page
import Home from "../views/home.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Chatbot from "../views/chatbot.vue";
import ListProduk from "../views/listProduk.vue";
import Keranjang from "../views/Keranjang.vue";
import Checkout from "../views/Checkout.vue";
import DetailProduk from "../views/DetailProduk.vue";
import Profile from "../views/Profile.vue";
import ReBatik from "../views/reBatik.vue";
import BaThrift from "../views/baThrift.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/listProduk",
      name: "listProduk",
      component: ListProduk,
    },
    {
      path: "/reBatik",
      name: "reBatik",
      component: ReBatik,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/chatbot",
      name: "chatbot",
      component: Chatbot,
    },
    {
      path: "/keranjang",
      name: "keranjang",
      component: Keranjang,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/detailProduk",
      name: "detailproduk",
      component: DetailProduk,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/baThrift",
      name: "baTrift",
      component: BaThrift,
    },
  ],
});
export default router;
