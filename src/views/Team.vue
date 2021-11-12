<template>
  <div>
    <div
      id="website-banner"
      :style="`
        background-image: url('${team.banner}');
        background-size: 100%;
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
    <div class="tournament-area"><TeamModule :team="team"/></div>
  </div>
</template>

<script>
import TeamModule from "@/components/TeamModule";

export default {
  name: "Team",
  data() {
    return {
      team: this.findById(this.contentData.teamsData, this.page),
    };
  },
  props: ["contentData", "findById", "filterUrl", "page"],
  components: { TeamModule },
};
</script>