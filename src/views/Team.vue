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
    <div class="tournament-area">
      <!--${tournamentInformationModule} ${tournamentDataModule}-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
};
</script>