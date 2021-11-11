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
        <div class="team-list">
          <TeamCase />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import TeamCase from "@/components/TeamCase";

export default {
  name: "Teams",
  components: { TeamCase },
};
</script>