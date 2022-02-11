<template>
  <div>
    <div id="website-banner"></div>
    <div class="tournament-area">
      <!--${tournamentInformationModule} ${MatchDataModule}-->
      <MatchData v-if="match" :match="match" />
    </div>
  </div>
</template>

<script>
import MatchData from "@/components/MatchData";
import matchs from "@/services/matchs";
import M from 'materialize-css'

export default {
  name: "Match",
  data() {
    return {
      match: null,
      ready: false,
    };
  },
  async beforeMount() {
    try {
      this.match = await matchs.get(this.page);
    } catch (error) {
      M.toast({html: "Impossible de charger le match"})
    }
  },
  props: ["contentData", "findById", "filterUrl", "page"],
  components: { MatchData },
};
</script>