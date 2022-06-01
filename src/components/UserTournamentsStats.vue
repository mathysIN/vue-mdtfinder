<template>
  <div class="flex flex-col md:flex-row space-x-0 justify-center md:space-x-5 md:space-y-0 space-y-5">
    <Loading v-if="!ready"/>
    <div v-else
      v-for="(tournament, i) in tournaments"
      :key="i"
      class="user-tournaments-stats-box bg-[#313135] md:w-2/4 w-full px-4 py-4 rounded-3xl flex-col space-y-5 hover:scale-110 transition-all duration-300 ease-in-out">
      <div class="stats-box-top-tournament-info flex space-x-6 items-center content-center">
        <div class="tournament-info-logo align-middle">
          <img class="rounded-full h-24" :src="tournament.brand ? tournament.brand.logo : 'https://res.cloudinary.com/frozed/image/upload/v1638199503/mdtfinder/tournaments/Rosters%20Ranked/Logo.png'" />
        </div>
        <div class="tournament-info-name align-middle">
          <div class="stats-box-top-tournament-info-name  font-bold text-2xl italic align-middle text-white">
            <span> {{ tournament.name }} </span>
          </div>
          <div class="stats-box-top-tournament-info-date text-base font-thin align-middle">
            <span> {{ tournament.descriptions.main }}</span> 
          </div>
          <div v-if="getPlayer(i).isBanned" class="stats-box-top-tournament-info-ban font-bold text-xl italic align-middle text-white">
            <span class="bg-red-800 py-1 px-2">Ban</span>
          </div>
        </div>
        <div class="tournament-info-user-score-rank text-center">
          <div class="stats-box-top-tournament-info-user-score-rank font-bold text-4xl italic align-middle text-white">
            {{ getPlayer(i).score || 0 }}
          </div>
          <div class="stats-box-top-tournament-info-user-score-rank-text text-xl font-bold align-middle text-quietgrey text-center flex items-center space-x-1">
            <img :src="getPlayer(i).rank.icon" class="h-6">
            <span>{{ getPlayer(i).rank.rankName}}</span>  
          </div>
        </div>
      </div>
      <div class="stats-box-bottom-tournaments-user-stats flex flex-col space-y-5">
        <div class="user-stats-first-row flex space-x-24">
          <div class="stats-box-bottom-tournaments-user-stats-item">
            <div class="user-stats-item-title">
              <span>Wins</span>
            </div>
            <div class="user-stats-item-value">
              <span>{{ getPlayer(i).wins || 0 }}</span>
            </div>
          </div>
          <div class="stats-box-bottom-tournaments-user-stats-item">
            <div class="user-stats-item-title">
              <span>Matchs</span>
            </div>
            <div class="user-stats-item-value">
              <span>{{ getPlayer(i).matchs || 0 }}</span>
            </div>
          </div>
          <div class="stats-box-bottom-tournaments-user-stats-item">
            <div class="user-stats-item-title">
              <span>Winrate</span>
            </div>
            <div class="user-stats-item-value">
              <span>{{ (((getPlayer(i).wins/getPlayer(i).matchs) * 100).toFixed(1)) + "%" || 0 }}</span>
            </div>
          </div>
        </div>
        <div class="user-stats-last-row flex space-x-24">
          <div class="stats-box-bottom-tournaments-user-stats-item">  
            <div class="user-stats-item-title">
              <span>Kills</span>            
              <div class="user-stats-item-value">
                <span>{{ getPlayer(i).kills || 0 }}</span>
              </div>
            </div>
          </div>
          <div class="stats-box-bottom-tournaments-user-stats-item">  
            <div class="user-stats-item-title">
              <span>Deaths</span>
            </div>
            <div class="user-stats-item-value">
              <span>{{ getPlayer(i).deaths || 0 }}</span>
            </div>
          </div>
            
          <div class="stats-box-bottom-tournaments-user-stats-item">  
            <div class="user-stats-item-title">
              <span>Ratio</span>
            </div>
            <div class="user-stats-item-value">
              <span>{{ ((getPlayer(i).kills || 0) / (getPlayer(i).deaths || 1)).toFixed(2) || 0 }}</span>
            </div>
          </div>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from "@/services/users"; 
import Loading from "@/components/Loading";
import M from 'materialize-css'

export default {
    name: "UserTournamentsStats",
    components: {
      Loading
    },
    data() {
        return {
            tournaments: null,
            ready: false,
        };
    },
    props: ["user"],
    async beforeCreate() {
    try {
      const t = await users.getTournaments(this.user.id);
      this.tournaments = t;
      this.ready = true;
    } catch (error) {
      this.error = error;
      M.toast({"html": "Impossible de charger les tournois"})
    }
    
  },

  methods: {
      getPlayer(tournamentNum) {
        console.log(this.tournaments)
        return this.tournaments[tournamentNum].player;
      }
    }
}
</script>

<style>
.user-tournaments-stats-box {
  min-width: 360px;
}

.user-tournaments-stats-box {
  background-color: #313135;
}

.stats-box-top-tournament-info-date, .user-stats-item-title {
  color: #cdcdcd;
}

.tournament-info-user-score-rank {
  margin-left: auto!important;
}
</style>