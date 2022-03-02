<template>

  <div class="leaderboard">
    
    <div class="table-container">
      <table class="roundedCorners overflow-x-scroll max-w-full">
        <tbody v-if="!error">
          <tr class="tr-top">
            <th>Rank</th>
            <th>Player</th>
            <th class="th-right">Points</th>
            <th class="th-right">Matchs</th>
            <th class="th-right">Wins</th>
            <th class="th-right">Kills</th>
            <th class="th-right">Deaths</th>
          </tr>
          <tr v-if="players.length == 0">
            <Loading/>
          </tr>
          <tr v-if="!players.length">
            <th>

            </th>
          </tr>
          <tr v-for="(player, i) in players" :key="i">
            <th>#{{i + 1}}</th>
            <th><a :href="'../users/' + player.id">{{ player.user.link.minecraft || player.user.username || "???" }}</a></th>
            <th class="th-right">{{ player.score || "-" }}</th>
            <th class="th-right">{{player.matchs || "-" }}</th>
            <th class="th-right">{{ player.wins || "-" }}</th>
            <th class="th-right">{{ player.kills || "-" }}</th>
            <th class="th-right">{{ player.deaths || "-" }}</th>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import tournaments from "@/services/tournaments";
import Loading from "@/components/Loading";
import M from 'materialize-css'

export default {
  name: "Leaderboard",
  props: ["tournament"],
  components: {
    Loading
  },
  data() {
    return {
      players: [],
      error: null,
      MESSAGE_ERROR_LOADING: "Error loading leaderboard",
    };
  },
  async beforeMount() {
    try {
      this.players = await tournaments.getLeaderboard(this.tournament.id);
      // TODO: Filter result
      
    } catch (error) {
      this.error = error;
      this.players = null;
      M.toast({html: "Impossible de charger le classement"})
    }
  },
};
</script>

<style scoped>
select {
    max-width: 100%;
}
</style>