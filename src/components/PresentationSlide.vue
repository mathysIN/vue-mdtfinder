<template>
  <Waypoint @change="onWaypoint" :options="{ threshold: [1, 0] }">
    <div
      data-aos="fade-up"
      :class="'image-and-text div-bounce ' + (active ? 'div-bouncing' : '')"
    >
      <div class="image-and-text-text">
        <h4>{{ title }}</h4>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="image-and-text-image">
        <img :src="image" />
      </div>
    </div>
  </Waypoint>
</template>

<script>
import { Waypoint } from "vue-waypoint";
import AOS from "aos";
export default {
  props: ["title", "description", "image"],
  name: "PresentationSlide",
  data() {
    return {
      active: false,
    };
  },
  components: {
    Waypoint,
  },
  methods: {
    onWaypoint(waypointState) {
      if (!waypointState.direction) return;
      if (waypointState.going == "IN") {
        this.active = true;
      }
    },
  },

  created() {
    AOS.init();
  },
};
</script>