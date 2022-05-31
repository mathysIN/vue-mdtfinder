<template>
    <div  v-if="!error && user != null" class="user-profil-card">
        <div class="user-profil-card-header flex mr-auto ml-auto pt-4 space-x-10 items-center">
            <div class="user-profil-card-header-image">
                <img :src="`https://minotar.net/helm/${user.link.minecraft}/80.png`" class="rounded-full h-32 w-32"/>
            </div>
            <div class="user-profil-card-header-info font-bold text-4xl italic py-2 px-8 h-14 align-middle">
                <h2 class="align-middle">{{ user.link.minecraft }}</h2>
            </div>
        </div>
        <div class="user-tournaments-details pt-10" v-if="user">
            <UserTournamentsStatsVue :user="user"/>
        </div>
    </div>
</template>

<script>
import users from "@/services/users"; 
import UserTournamentsStatsVue from "../components/UserTournamentsStats.vue";

export default {
    name: "User",
    data() {
        return {
            user: null,
            ready: false
        };
    },
    components: {
        UserTournamentsStatsVue
    },
    async beforeMount() {
        try {
            this.user = await users.get(this.page);
        } catch (error) {
            window.location.href = "/";
        }
    },
    props: ["contentData", "findById", "filterUrl", "page"],
}
</script>

<style>
.user-profil-card-header-info {
    background-color : #3e3e3e;
}
</style>