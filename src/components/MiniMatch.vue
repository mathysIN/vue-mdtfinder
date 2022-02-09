<template>
  <div class="mini-match-list">
    <Loading class="mr-auto ml-auto" v-if="matchs.length == 0"/>
    <div v-for="(match, i) in matchs.slice(0, (limit || 10))" :key="i" class="mini-match-container mr-auto ml-auto w-3/5 rounded-2xl p-2 pl-6 pr-6 m-3 hover:-rotate-2">
      <a :href="'/match/' + match.id" class="p-0">
        <div class="mini-match-content grid grid-flow-col grid-cols-4">
            <div class="mini-match-image align-middle">
            <img class="rounded-full" :src="avatar || 'https://res.cloudinary.com/frozed/image/upload/v1558707042/mdtfinder/game/rush.png'" />
            </div>
            <div class="mini-match-text align-middle" style="grid-column: 2/4">
            <p>
                <a :href="'/match/' + match.id">{{ match.name || "#" + match.id }}</a>
            </p>
            <span class="text-gray-300">{{ match.timeText || (match.time || "0") +" min" }}  {{ match.players.length ? (" - " + match.players.length + " joueurs") : ""}} </span>
            </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import matchs from "@/services/matchs.js";
import Loading from "@/components/Loading";

export default {
    name: "MiniMatch",
    props: ["tournament","limit"],
    components: {
        Loading
    },
    data() {
        return {
          matchs: [],
        };
    },
    async beforeMount() {
        this.matchs = await matchs.get();
        console.log(this.matchs)
    },
}
</script>

<style scoped>
.mini-match-container {
    transition: 0.1s;
    background-color:#313135
}

.mini-match-container:hover {
    /**Elevate the div */
    transform: translateY(-2px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: 0.1s;
    background: #3d3d3d;

}
</style>