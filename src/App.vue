<template>
  <body>
    <Header />
    <Banner />
    <router-view />
    <Footer :commit="commit" />
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Banner,
  },
  data() {
    return {
      commit: "#xxxxxx",
    };
  },
};
</script>
