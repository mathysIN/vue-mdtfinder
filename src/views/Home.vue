<template>
  <div>
    <div class="title">
      <h1>MDTFinder</h1>
      <h2>ACCEDEZ A LA VRAIE COMPETITION MINECRAFT</h2>
    </div>
    <!--<section class="mdt-search">
      <div class="mdt-search-container">
        <p class="mdt-search-title">Recherches de MDT récentes</p>
        <MDTCase />
      </div>
      <div class="mdt-search-container">
        <p class="mdt-search-title">Joueur recherche team</p>
        <MDTCase />
      </div>
      <div class="mdt-search-container">
        <p class="mdt-search-title">Recherches MDT automatiques</p>
        <MDTCase />
      </div>
    </section>-->
    <section class="tournament-show">
      <a href="/tournaments"
        ><div class="tournament-show-title">
          <p>Tournois</p>
        </div></a
      >
      <div class="tournament-show-list">
        <TournamentBanner />
        <!--<div class="tournament-box tournament-ended">
            <div class="tournament-box-image">
             <img  src="https://cdn.discordapp.com/attachments/405062599844167682/596818930702483456/20190705_234513.jpg">
            </div>
            <div class="tournament-box-text">
              <img src="https://images-ext-1.discordapp.net/external/bGgFSEbyd9tKi5wSbgHlzDRRiv_SSKUInD6vgwKVz5M/https/res.cloudinary.com/frozed/image/upload/v1558707042/mdtfinder/game/rush.png">
              <div class="tournament-box-text-info">
                <h3>[TERMINE] Coupe de Funcraft</h3>
                <span>Petit Cashprize en récompense !</span>
              </div>
            </div>
          </div>-->
      </div>
      <div id="bot-presentation">
        <h3>Fonctionnalités MDTFinder</h3>
        <PresentationSlide :title="FIRST_SLIDE_TITLE" :description="FIRST_SLIDE_TEXT" :image="FIRST_SLIDE_IMAGE_URL"/>
        <PresentationSlide :title="SECOND_SLIDE_TITLE" :description="SECOND_SLIDE_TEXT" :image="SECOND_SLIDE_IMAGE_URL"/>
        <PresentationSlide :title="THIRD_SLIDE_TITLE" :description="THIRD_SLIDE_TEXT" :image="THIRD_SLIDE_IMAGE_URL"/>
        <!--<div class="image-and-text div-bounce">
          <div class="image-and-text-image">
            <img
              src="https://cdn.glitch.com/12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%2FRecherche.png?v=1572108214459"
            />
          </div>
          <div class="image-and-text-text">
            <h4>Recherchez des Match de Team facilement</h4>
            <p>Communiquez facilement à tous les autres utilisateurs du bot</p>
          </div>
        </div>-->
      </div>
      <div class="join-mdt-finder">
        <h3>Prèt à rejoindre la compétition ?</h3>
        <a class="none" href="/tournaments">
          <li
            style="
              background-color: #fbab7e;
              background-image: linear-gradient(
                62deg,
                #fbab7e 0%,
                #f7ce68 100%
              );
            "
          >
            <p>Voir les tournois</p>
          </li></a
        >
        <a class="none" href="/team-creation"
          ><li style="background: linear-gradient(-120deg, #cd72da, #ff8989)">
            <p>Créer ta team</p>
          </li></a
        >
        <a class="none" target="_blank" href="https://discord.gg/uFwCXEm"
          ><li style="background: linear-gradient(-120deg, #7289da, #aebefd)">
            <p>Serveur Discord</p>
          </li></a
        >
      </div>
    </section>
  </div>
</template>

<script>
//import MDTCase from "../components/MDTCase.vue";
import PresentationSlide from "../components/PresentationSlide.vue"
import TournamentBanner from "../components/TournamentBanner.vue";


export default {
  name: "Home",
  components: {
    //MDTCase,
    TournamentBanner,
    PresentationSlide
  },
  data() {
    return {
      FIRST_SLIDE_TITLE: "Trackez vos stats en direct",
      FIRST_SLIDE_TEXT: "Suivez statistiques, classements et tournois sur Discord directement",
      FIRST_SLIDE_IMAGE_URL: "https://cdn.glitch.com/12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%2FStatistiques.png?v=1572108211945",
      SECOND_SLIDE_TITLE: "Profils et teams personnalisables",
      SECOND_SLIDE_TEXT: "Grâce aux MDTFinder, créez puis personnalisez à volonté votre page de profil/team",
      SECOND_SLIDE_IMAGE_URL: "https://res.cloudinary.com/frozed/image/upload/v1597061639/mdtfinder/presentation/team.png",
      THIRD_SLIDE_TITLE: "Des tournois compétitifs et funs",
      THIRD_SLIDE_TEXT: "Regardez ou prennez part aux tournois organisés par le staff MDTFinder et la communauté",
      THIRD_SLIDE_IMAGE_URL: "https://res.cloudinary.com/frozed/image/upload/v1597060922/mdtfinder/presentation/tournois.png",
    }
  }
};
</script>