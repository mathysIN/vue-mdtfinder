<template>
  <header class="p-0">
    <div>
      <div>
        <div
          class="
            container
            px-10
            py-2
            mx-auto
            md:flex md:items-center
            bg-opacity-0
          "
        >
          <div class="flex items-center">
            <a href="/">
              <div class="logoPC font-bold">
                <img
                  src="https://res.cloudinary.com/frozed/image/upload/v1622712760/mdtfinder/branding/mdtfinder_logo.png"
                  id="logo"
                  class="px-4"
                />MDTFINDER
              </div>
            </a>
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  humburger-icon
                  text-white
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                  md:text-2xl absolute
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="
              showMenu ? 'flex div-bouncing bg-[#26262b] text-white' : 'hidden'
            "
            class="
              menu-ul
              flex-col
              mt-8
              space-y-4
              md:flex md:space-y-0 md:flex-row md:items-center md:mt-0
            "
          >
            <a href="/home"><li class="menu-ripple">Accueil</li></a
            ><a href="/tournaments"><li class="menu-ripple">Tournois</li></a
            ><a href="/news"><li class="menu-ripple">News</li></a
            ><a href="/teams"><li class="menu-ripple">Teams</li></a
            ><a href="/rechercher"><li class="menu-ripple">Recherche</li></a>
          </ul>
          <div class="navLeftSection">
          <a
            :href="BOT_INVITATION_LINK"
            target="_blank"
            ><button type="button" class="navBouton inviteBouton">
              Inviter
            </button></a
          >
          <LoginButton :user="user" :logged="logged"/>
        </div>
        </div>
      </div>
    </div>
    <!--<div id="hamburger" class="navbar">
      <div class="navbar-inner">
        <a href="/">
          <div class="logoPC">
            <img
              src="https://res.cloudinary.com/frozed/image/upload/v1622712760/mdtfinder/branding/mdtfinder_logo.png"
              id="logo"
            />MDTFINDER
          </div>
        </a>
        <ul class="menu-ul">
          <a href="/home">
            <li class="menu-ripple">Accueil</li>
          </a>
          <a href="/tournaments">
            <li class="menu-ripple">Tournois</li>
          </a>
          <a href="/news">
            <li class="menu-ripple">News</li>
          </a>
          <a href="/teams">
            <li class="menu-ripple">Teams</li>
          </a>
          <a href="/rechercher">
            <li class="menu-ripple">Recherche</li>
          </a>
        </ul>
        <div class="navLeftSection">
          <a
            href="https://discordapp.com/oauth2/authorize?client_id=477852199825965058&permissions=314432&scope=bot"
            target="_blank"
            ><button type="button" class="navBouton inviteBouton">
              Inviter
            </button></a
          >
          <LoginButton :user="user" :logged="logged"/>
        </div>
      </div>
      <button id="hamburger-button">&#9776;</button>
      <div id="hamburger-sidebar">
        <div id="hamburger-sidebar-header"></div>
        <div id="hamburger-sidebar-body"></div>
      </div>
      <div id="hamburger-overlay"></div>
    </div>-->
  </header>
</template>

<script>
import LoginButton from "@/components/LoginButton";

export default {
  name: "Header",
  components: {
    LoginButton,
  },
  data() {
    return {
      showMenu: false,
      BOT_INVITATION_LINK:
        "https://discord.com/api/oauth2/authorize?client_id=477852199825965058&permissions=313408&scope=bot%20applications.commands",
    };
  },
  props: ["user", "logged"],
};
</script>

<style scoped>
.humburger-icon {
  top: 12px;
  right: 35px;
}
</style>