<template>
  <div>
    <div
      id="website-banner"
      :style="`
        background-image: url('${tournament.wallpaper}');
        background-position: center;
        width: 100%;
        height: 250px;
        position: absolute;
        top: 0;
        z-index: 1;
        opacity: 0.5;
        filter: blur(4px);
      `"
    ></div>
    <div class="tournament-area">
      <!--${tournamentInformationModule} ${tournamentDataModule}-->
      <TournamentData :tournament="tournament" />
    </div>
  </div>
</template>

<script>
import TournamentData from "@/components/TournamentData";

export default {
  name: "Tournament",
  data() {
    return {
      tournament: this.findById(
        this.contentData.tournamentsData,
        this.filterUrl(this.page)
      ),
    };
  },
  props: ["contentData", "findById", "filterUrl", "page"],

  created() {
    console.log(this);
    console.log(this.page);
    console.log(this.$route);
  },
  components: { TournamentData },
  /*methods: {
    filterUrl(url) {
      return url.replace(/\//g, "");
    },
    findTournament(tournaments, name) {
      return tournaments.find((t) => t.id == name);
    },
  },*/
};
</script>