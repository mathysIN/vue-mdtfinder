<template>
  <body>
    <Header :user="user" />
    <Banner />
    <router-view />
    <Footer :commit="commit" />
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
// import Config from "@/config/Data.json"

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Banner,
  },
  mounted() {
    const jquery = document.createElement("script");
    jquery.setAttribute(
      "src",
      "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"
    );
    jquery.async = true;
    document.head.appendChild(jquery);

    const waypoints = document.createElement("script");
    waypoints.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
    );
    waypoints.async = true;
    document.head.appendChild(waypoints);

    const main = document.createElement("script");
    main.setAttribute(
      "src",
      "https://cdn.discordapp.com/attachments/388667745685733376/908123423270637599/main.js"
    );
    main.async = true;
    document.head.appendChild(main);
  },
  data() {
    return {
      commit: "#xxxxxx",
      logged: false,
      user: {
        avatarURL:
          "https://cdn.discordapp.com/avatars/219380115602145280/f4442c191c2f24f655b9663866d8d483.webp",
        team: "nugget",
        id: "redlegamin",
      },
    };
  },
};
</script>
