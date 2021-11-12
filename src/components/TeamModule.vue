<template>
  <div>
    <div class="team-top">
      <div class="team-logo">
        <img :src="team.logo" style="width: 150px; height: 150px;"/>
      </div>
      <div class="team-text">
        <div class="team-title">
          <h3>{{ team.name }}</h3>
        </div>
        <div class="team-info-bar">
          <p>{{ team.memberCount }} Membres - {{ team.rcState }}</p>
          <span class="team-social">
            <div class="icon-discord"></div>
          </span>
        </div>
      </div>
    </div>

    ${panel}
    <div class="team-informations">
      <div class="text-separator">
        <span>Description</span>
      </div>
      <div class="team-description">
        <p>{{ team.description }}</p>
      </div>
      <div class="text-separator">
        <span>Membres</span>
      </div>
      <div class="team-member">${memberList}</div>
      <div class="text-separator">
        <span>MDT et Tournois (Soon)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "TeamModule",
    props: ["team"]
};
</script>