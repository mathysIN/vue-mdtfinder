<template>
  <div id="structure" v-if="currentRouteName">
    <a :href="banner.link">
      <div class="banner">
        <img v-bind:src="banner.image.link" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Banner",
  computed: {
    currentRouteName() {
      if ("Home" == this.$route.name) return true;
      return false;
    },
  },
  data() {
    return {
      banner: {
        image: {
          link: "https://res.cloudinary.com/frozed/image/upload/v1597065598/mdtfinder/asset/banner_donation.png",
        },
        link: "https://www.paypal.com/pools/c/8q39gXq6SK",
      },
    };
  },
};
</script>

<style scoped>
.banner img {
  opacity: 0.9;
}
</style>