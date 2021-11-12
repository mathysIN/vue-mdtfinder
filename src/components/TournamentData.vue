<template>
  <div>
    <div class="tournament-top">
      <div class="tournament-top-up">
        <div class="tournament-poster">
          <img
            :src="tournament.poster"
            :class="strechAnimation"
            @click="activateStrechAnimation()"
          />
        </div>
      </div>
      <div class="tournament-top-down">
        <h2>{{ tournament.name }}</h2>
        <h3>{{ tournament.descriptions.poster }}</h3>
        <button
          class="tournament-info-button"
          :actionapi="`tournament/join/${tournament.id}`"
        >
          S'inscrire au tournois
        </button>
      </div>
    </div>
    <div class="tournament-mid">
      <div class="tournament-point-list">
        <h4 class="tournament-section-title">Ensemble des points</h4>

        <PointSystem :tournament="tournament" />
      </div>
      <div class="tournament-point-list">
        <h4 class="tournament-section-title">Recompenses</h4>
        <PointSystem :tournament="tournament" :reward="true" />
      </div>
    </div>
  </div>
</template>

<script>
import PointSystem from "@/components/PointSystem";

export default {
  name: "TournamentData",
  props: ["tournament"],
  data() {
    return {
      strechAnimation: "",
    };
  },
  components: {
    PointSystem,
  },
  mounted() {
    // console.log(this.tournament);
  },
  methods: {
    activateStrechAnimation() {
      if (this.strechAnimation != "") return;
      this.strechAnimation = "strechAnimation";
      setTimeout(() => (this.strechAnimation = ""), 800);
    },
  },
  async computed() {
    alert("lol");
    this.strechAnimation = await new Promise((resolve) => {
      return setTimeout(() => {
        alert("LOL");
        resolve("");
      }, 1000);
    });
  },
};
</script>