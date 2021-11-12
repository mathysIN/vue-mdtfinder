<template>
  <div>
    <div class="list-title">
      <h2>Teams ouvertes</h2>
      <div class="create-team">
        <a href="/team-creation">
          <div class="discord-block">
            <button
              class="
                mdl-button mdl-js-button
                mdl-button--raised
                mdl-js-ripple-effect
              "
            >
              Crée ta team
            </button>
          </div>
        </a>
      </div>
    </div>
    <div class="team-poster-list">
      <ul>
          <TeamCase :teams="teams"/>
      </ul>
    </div>
  </div>
</template>

<script>
import TeamCase from "@/components/TeamCase";

export default {
  name: "Teams",
  props: ["contentData"],
  data() {
    return {
      teams: this.contentData.teamsData
    }
  },
  components: { TeamCase },
};
</script>