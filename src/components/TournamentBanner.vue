<template>
  <div style="display: flex;">
    
    <Loading v-if="!error && tournamentList.length == 0 "/>
    <div
      v-for="(tournament, i) in tournamentList"
      :key="i"
      class="tournament-box"
    >
      <div>
        <a :href="tournament.id ? './tournament/' + tournament.id : '' ">
          <div class="tournament-box-image">
            <img :src="tournament.brand ? tournament.brand.banner : tournament.banner" />
          </div>
          <div class="tournament-box-text">
            <img :src="tournament.gamemode ? tournament.gamemode.image : tournament.gamemodeImage" />
            <div class="tournament-box-text-info">
              <h3>{{ tournament.name }}</h3>
              <span>{{ tournament.descriptions.banner }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import tournaments from "@/services/tournaments";
import Loading from "@/components/Loading";
import M from 'materialize-css'

export default {
  name: "TournamentBanner",
  components: {
    Loading
  },
  data() {
    return {
      hidden: false,
      tournamentList: [],
      error: null
    };
  },

  async beforeCreate() {
    try {
      const t = await tournaments.get();
      this.tournamentList = t;
    } catch (error) {
      this.error = error;
      M.toast({"html": "Impossible de charger les tournois"})
    }
  },
};
</script>
