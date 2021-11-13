<template>
  <body>
    <Header :user="user" />
    <Banner />
    <router-view
      :contentData="contentData"
      :filterUrl="filterUrl"
      :findById="findById"
      :page="page"
    />
    <Footer :commit="commit" />
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import tournamentsData from "@/data/tournaments.json";
import teamsData from "@/data/teams.json";
// import Config from "@/config/Data.json"

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Banner,
  },
  created() {
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
  methods: {
    filterUrl(url) {
      console.log(url.replace(/\//g, ""));
      return url.replace(/\//g, "");
    },
    findById(tournaments, name) {
      tournaments.forEach((t) => {
        console.log(t.id == name, t.id, name);
      });
      return tournaments.find((t) => t.id == name);
    },
  },
  data() {
    let pathname = window.location.pathname;
    return {
      commit: "#xxxxxx",
      logged: false,
      pathname: pathname,
      page: pathname.substring(pathname.lastIndexOf('/') + 1),
      user: {
        avatarURL:
          "https://cdn.discordapp.com/avatars/219380115602145280/f4442c191c2f24f655b9663866d8d483.webp",
        team: "nugget",
        id: "redlegamin",
      },
      contentData: {
        tournamentsData: tournamentsData,
        teamsData: teamsData,
      },
    };
  },
};
</script>
