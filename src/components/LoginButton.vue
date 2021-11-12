<template>
  <div>
    <a v-if="!logged" href="/login" target="_blank"
      ><button type="button" class="navBouton">Connexion</button></a
    >
    <button v-else class="logged-image" onclick="showOptions()">
      <img :src="user.avatarURL" />
    </button>
    <div class="navbar-options">
      <a :href="`/users/${user.id}`"><li>Moi</li></a
      ><a :href="`/team/${user.team}`"><li>Ma team</li></a
      ><a href="/logout"><li>Deconnexion</li></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginButton",
  props: ["logged", "user"],
};
</script>