<template>
  <div class="mdt-search-content">
    <div class="mdt-search-case">
      <div class="search-image">
        <img :src="avatar" />
      </div>
      <div class="search-text">
        <p>
          {{ displayName }} | <a :href="'/team/' + team">{{ team }}</a>
        </p>
        <span>{{ message }}</span>
        <div class="search-text-link">
          <div v-if="buttonActive" class="discord-block">
            <a :href="discordLink" target="_blank"
              ><button
                class="
                  mdl-button mdl-js-button
                  mdl-button--raised
                  mdl-js-ripple-effect
                "
              >
                Rejoindre
              </button></a
            >
          </div>
          <div v-else class="discord-block grey-button">
            <a :href="discordLink" target="_blank"
              ><button
                class="
                  mdl-button mdl-js-button
                  mdl-button--raised
                  mdl-js-ripple-effect
                "
              >
                Pas de serveur
              </button></a
            >
          </div>
          <div class="info-block">
            <div class="discord-name" onclick="clickToCopy()">
              {{ discordTag }}
            </div>
            <div class="minecraft-name">{{ mcName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MDTCase",
  data() {
    return {
      mcName: "mathys",
      discordTag: "mathys#0001",
      message: "haha je cherche une mdt mec!",
      displayName: "mathys",
      team: "nugget",
      discordLink: "https://discord.gg/fuck",
      buttonActive: true,
      avatar: "https://cdn.discordapp.com/avatars/219380115602145280/f4442c191c2f24f655b9663866d8d483.webp"
    };
  },
};
</script>