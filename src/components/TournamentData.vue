<template>
  <div class="flex grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <div class="tournament-top flex-1">
      <div class="tournament-top-up">
        <div class="tournament-poster">
          <img
            :src="tournament.brand.poster"
            :class="strechAnimation"
            @click="activateStrechAnimation()"
          />
        </div>
      </div>
      <div class="tournament-top-down">
        <h2>{{ tournament.name }}</h2>
        <h3>{{ tournament.descriptions.poster }}</h3>
        <div v-if="tournament.signup && tournament.signup.open != false">
          <a :href="tournament.signup.link"
            ><button
              class="tournament-info-button"
              :actionapi="
                tournament.signup.link || `tournament/join/${tournament.id}`
              "
            >
              S'inscrire au tournois
            </button>
          </a>
        </div>
        <div>
          <p class="text-white text-center uppercase text-2xl font-bold">Matchs récents</p>
          <MiniMatch :tournament="tournament"></MiniMatch>
        </div>
      </div>
    </div>
    <div class="tournament-mid flex  justify-start">
      <div v-if="pointSystem" class="tournament-point-list">
        <h4 class="tournament-section-title">Ensemble des points</h4>
      </div>
      <div v-if="tournament.rewards" class="tournaments-rewards">
        <h4 class="tournament-section-title">Recompenses</h4>
      </div>
      <div class="tournament-leaderboard">
        <Leaderboard :tournament="tournament" />
      </div>
    </div>
  </div>
</template>

<script>
//import PointSystem from "@/components/PointSystem";
import Leaderboard from "@/components/Leaderboard";
import MiniMatch from "@/components/MiniMatch";

//<PointSystem :tournament="tournament" :reward="true" />
//
export default {
  name: "TournamentData",
  props: ["tournament"],
  data() {
    return {
      strechAnimation: "",
    };
  },
  components: {
    Leaderboard, //PointSystem,
    MiniMatch
  },
  mounted() {
    console.log(this.tournament);
  },
  methods: {
    activateStrechAnimation() {
      if (this.strechAnimation != "") return;
      this.strechAnimation = "strechAnimation";
      setTimeout(() => (this.strechAnimation = ""), 800);
    },
  },
};
</script>