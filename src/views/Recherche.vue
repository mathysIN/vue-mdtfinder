<template>
  <div>
    <div class="warning-message bg-gray-700 bg-opacity-60 rounded-r-xl text-white border-l-4 border-solid border-red-600 p-4" >
      <p>Les recherches de MDT ont été désactivées pour le moment.</p>
      <p>Pour trouver un MDT facilement, venez participer au nouveau <a href="/tournament/elo_rosters_ranked">système de Ranked</a></p>
    </div>
    <!--
    <div class="team-poster-list">
      <div class="list-big-choices">
        <ul class="big-choice">
          <li class="mdt-choice">
            <div class="vasyjaiplusdideedenomdeclasse">
              <div class="team-poster-text">
                <div class="team-poster-title">
                  <h2>Soon - Recherche MDT</h2>
                </div>
              </div>
            </div>
          </li>
          <li class="ranked-choice">
            <div class="vasyjaiplusdideedenomdeclasse">
              <div class="team-poster-text">
                <div class="team-poster-title">
                  <h2>Soon - Recherche Ranked</h2>
                </div>
              </div>
            </div>
          </li>
          <li class="team-choice">
            <div class="vasyjaiplusdideedenomdeclasse">
              <div class="team-poster-text">
                <div class="team-poster-title">
                  <h2>Soon - Recherche Team</h2>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <section class="mdt-search">
      <div class="mdt-search-container">
        <p class="mdt-search-title">Recherches de MDT récentes</p>
        <MDTCase :limit="1"/>
      </div>
      <div class="mdt-search-container">
        <p class="mdt-search-title">Joueur recherche team</p>
        <MDTCase :limit="1"/>
      </div>
      <div class="mdt-search-container">
        <p class="mdt-search-title">Recherches MDT automatiques</p>
        <MDTCase :limit="1"/>
      </div>
    </section>-->
  </div>
</template>

<script>
//import MDTCase from "@/components/MDTCase";

export default {
  name: "Recherche",
  //components: {MDTCase},
};
</script>