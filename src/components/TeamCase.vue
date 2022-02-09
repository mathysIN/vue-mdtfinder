<template>
  <div class="team-list">
    <a
      v-for="(team, i) in teams"
      :key="i"
      class="none"
      :href="`/team/${team.id}`"
    >
      <li
        class="team-poster"
        :style="`background: url('${team.banner}'); background-size: cover; background-position-x: center;`"
      >
        <div class="vasyjaiplusdideedenomdeclasse">
          <div class="team-poster-logo">
            <img :src="team.logo" />
          </div>
          <div class="team-poster-text">
            <div class="team-poster-title">
              <h2>{{ team.name }}</h2>
            </div>
            <div class="team-poster-social">
              <div class="team-social-icon-discord"></div>
            </div>

            <div class="team-poster-desc">
              <span>{{ team.memberCount }} Membres - {{ team.rcState }}</span>
            </div>
          </div>
        </div>
      </li>
    </a>
  </div>
</template>

<script>
export default {
  name: "TeamCase",
  props: ["teams"],
  mounted() {
  },
};
</script>