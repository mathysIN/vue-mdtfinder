<template>
  <div>
    <div
      id="website-banner"
      :style="`
        background-image: url('${tournament.brand ? tournament.brand.wallpaper : undefined}');
        background-size: 100%;
        background-position: center;
        width: 100%;
        height: 250px;
        position: absolute;
        top: 0;
        z-index: 1;
        opacity: 0.5;
        filter: blur(4px);
        left: 0;
      `"
    ></div>
    <div class="tournament-area">
      <!--${tournamentInformationModule} ${tournamentDataModule}-->
      <TournamentData v-if="tournament" :tournament="tournament" />
    </div>
  </div>
</template>

<script>
import TournamentData from "@/components/TournamentData";
import tournaments from "@/services/tournaments";
import M from 'materialize-css';

export default {
  name: "Tournament",
  data() {
    return {
      tournament: null,
      ready: false
    };
  },
  async beforeMount() {
    try {
      this.tournament = await tournaments.get(this.page);
    } catch (error) {
      M.toast({html: "Impossible de pouvoir charger le tournoi"})
    }
  },
  props: ["contentData", "findById", "filterUrl", "page"],
  components: { TournamentData }
};
</script>