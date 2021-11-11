<template>
  <a class="none" :href="`/team/${id}`">
    <li
      class="team-poster"
      :style="`background: url('${banner}'); background-size: cover; background-position-x: center;`"
    >
      <div class="vasyjaiplusdideedenomdeclasse">
        <div class="team-poster-logo">
          <img :src="logo" />
        </div>
        <div class="team-poster-text">
          <div class="team-poster-title">
            <h2>{{ name }}</h2>
          </div>
          <div class="team-poster-social">
            <div class="team-social-icon-discord"></div>
          </div>

          <div class="team-poster-desc">
            <span>{{ memberCount }} Membres - {{ rcState }}</span>
          </div>
        </div>
      </div>
    </li>
  </a>
</template>

<script>
export default {
  name: "TeamCase",
  data() {
    return {
      name: "Nugget",
      logo: "https://cdn.discordapp.com/attachments/580436332069781532/725347821401800775/mdtfinder_beta.png",
      id: "nugget",
      banner:
        "https://cdn.discordapp.com/attachments/351304056901206016/741031943298088980/MDT_FINDER_wallpaper2.PNG",
      memberCount: 4,
      rcState: "Ouvert",
    };
  },
};
</script>