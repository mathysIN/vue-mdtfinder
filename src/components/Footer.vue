<template>
  <div id="site-bottom">
    <div id="real-site-bottom">
      <div id="bottom-social">
        <a href="https://discord.gg/uFwCXEm"
          ><li>
            <img
              src="https://cdn.glitch.com/12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%2F12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%252FSocial_discord%20(1)%20(1).png?1545397544282"
            /></li
        ></a>

        <a href="https://twitter.com/mdtfinder"
          ><li>
            <img
              src="https://cdn.glitch.com/12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%2F12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%252Fsocial-twitter%20(1).png?1545397551425"
            /></li
        ></a>
        <li>
          <a href="https://www.youtube.com/channel/UCtcHZqaC6-dW2JUQui7WnNg"
            ><img
              src="https://cdn.glitch.com/12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%2F58-youtube-512%20(1).png?1545431770105"
          /></a>
        </li>
      </div>
      <div id="bottom-link">
        <ul>
          <p>MDTFinder</p>
          <li>
            La platforme compétitive Minecraft ! Développé par RedLeGamin - Fait
            avec l'aide de MikeFx et xBlackouille ! Merci à toutes les autres
            personnes qui ont aidé dans ce projet !
          </li>
        </ul>
      </div>
      <div id="bottom-important">
        <p>
          2021 FrozedTeam -
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >Mentions légales</a
          >
          - {{ commit }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Footer",
    props: ["commit"]
}
</script>