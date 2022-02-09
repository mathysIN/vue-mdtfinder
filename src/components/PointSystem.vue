<template>
  <!-- Euh ouais je pense qu'on peut mieux faire ici mais je sais pas comment ? Faut que je je me renseigne mais j'ai pas le temps là -->
  <div v-if="!reward" class="point-list">
    <ul
      v-for="(pointSystem, i) in tournament.pointSystem"
      :key="i"
      :class="getDirection(i)"
    >
      <li class="point-elimination">
        <p>{{ pointSystem.name }}</p>
        <span>{{ pointSystem.points }}</span>
      </li>
    </ul>
  </div>
  <div v-else-if="reward" class="point-list">
    <ul
      v-for="(reward, i) in tournament.reward"
      :key="i"
      :class="getDirection(i)"
    >
      <li class="point-elimination">
        <p>{{ reward.name }}</p>
        <span>{{ reward.points }}</span>
      </li>
    </ul>
  </div> 
</template>

<script>
export default {
  name: "PointSystem",
  props: ["tournament", "reward"],
  mounted() {
  },
  methods: {
    getDirection(i) {
      var direction;
      if (i % 2 != 0) direction = "ul-left";
      else direction = "ul-right";
      return direction;
    },
  },
};
</script>