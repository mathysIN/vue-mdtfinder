<template>
    <header>
      <div id="hamburger" class="navbar">
        <div class="navbar-inner">
          <a href="/">
            <div class="logoPC">
              <img
                src="https://res.cloudinary.com/frozed/image/upload/v1622712760/mdtfinder/branding/mdtfinder_logo.png"
                id="logo" />MDTFINDER
            </div>
          </a>
          <ul class="menu-ul">
            <a href="/home">
              <li class="menu-ripple">Accueil</li>
            </a>
            <a href="/rechercher">
              <li class="menu-ripple">Recherche</li>
            </a>
            <a href="/teams">
              <li class="menu-ripple">Teams</li>
            </a>
            <a href="/tournaments">
              <li class="menu-ripple">Tournois</li>
            </a>
            <a href="/news">
              <li class="menu-ripple">News</li>
            </a>
          </ul>
          <div class="navLeftSection">
            <a href="https://discordapp.com/oauth2/authorize?client_id=477852199825965058&permissions=314432&scope=bot"
              target="_blank"><button type="button" class="navBouton inviteBouton">
                Inviter
              </button></a>
            ${login}
          </div>
        </div>
        <button id="hamburger-button">&#9776;</button>
        <div id="hamburger-sidebar">
          <div id="hamburger-sidebar-header"></div>
          <div id="hamburger-sidebar-body"></div>
        </div>
        <div id="hamburger-overlay"></div>
      </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>
