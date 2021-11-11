<template>
  <div>
    <div
      id="website-banner"
      style="
        background: url('${website-banner}');
        background-position: center;
        width: 100%;
        height: 250px;
        position: absolute;
        top: 0;
        z-index: -10;
        opacity: 0.5;
        filter: blur(4px);
      "
    ></div>
    <div class="list-title">
      <h2>Futurs Tournois De Test</h2>
    </div>
    <div class="tournament-show-list"><TournamentBanner :hidden="false" /></div>
    <div class="list-title">
      <h2>Autres Futurs Tournois (Info cachees)</h2>
    </div>
    <div class="tournament-show-list"><TournamentBanner :hidden="true" /></div>
  </div>
</template>

<script>
import TournamentBanner from "@/components/TournamentBanner";

export default {
  components: { TournamentBanner },
  name: "Tournaments",
};
</script>