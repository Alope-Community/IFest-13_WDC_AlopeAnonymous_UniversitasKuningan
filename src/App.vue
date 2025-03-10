<template>
  <main>
    <Navbar v-if="!isPageWithoutNavAndFooter" />
    <router-view></router-view>
    <Footer v-if="!isPageWithoutNavAndFooter" />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    isPageWithoutNavAndFooter() {
      return (
        this.$route &&
        (this.$route.path === "/login" || this.$route.path === "/register")
      );
    },
  },
};
</script>
