<template>
  <body>
    <Header :user="user" />
    <Banner />
    <div class="sm:w-4/5 w-full ml-auto mr-auto">
      <router-view
        :contentData="contentData"
        :filterUrl="filterUrl"
        :findById="findById"
        :page="page"
      />
    </div>
    <Footer :commit="commit" />
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import tournamentsData from "@/data/tournaments.json";
import teamsData from "@/data/teams.json";
import matchs from "@/services/matchs.js";
// import Config from "@/config/Data.json"

export default {
  name: "App",
  props: ["M"],
  components: {
    Header,
    Footer,
    Banner,
  },
  async created() {},
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
  mounted() {},
  data() {
    let pathname = window.location.pathname;
    return {
      commit: "#xxxxxx",
      logged: false,
      pathname: pathname,
      page: pathname.substring(pathname.lastIndexOf("/") + 1),
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
      api: {
        matchs: matchs,
      },
    };
  },
};
</script>
