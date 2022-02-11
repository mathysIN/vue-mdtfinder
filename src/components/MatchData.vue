<template>
  <div v-if="match && leaders">
    <section class="mdt-stats">
      <div class="mdt-title sm:text-left text-center">
        <h2>Match {{ match.name || "#" + match.id }}</h2>
      </div>
      <div class="mdt-stats-top">
        <div class="mdt-banner">
          <div class="first-team">
            <div :class="'team-win-state ' + leaders[0].matchResult">
              <p>{{ result(leaders[0].matchResult) }}</p>
              <span> Equipe de {{ leaders[0].minecraft }} </span>
            </div>
            <div class="min-space"></div>
            <div class="team-logo">
              <img :src="head(leaders[0].minecraft)" />
            </div>
          </div>
          <div class="space"></div>
          <div class="second-team">
            <div class="team-logo">
              <img :src="head(leaders[1].minecraft)" />
            </div>
            <div class="min-space"></div>
            <div :class="'team-win-state ' + leaders[1].matchResult">
              <p>{{ result(leaders[1].matchResult) }}</p>
              <span> Equipe de {{ leaders[1].minecraft }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mdt-stats-bottom flex-1">
        <div class="mdt-leaderboard">
          <div class="mdt-separator-big">
            <p>Leaderboard</p>
          </div>
          <div class="mdt-content flow-root">
            <div class="first-team-content">
              <div class="mdt-player-case">
                <img :src="head(leaders[0].minecraft)" />
                <div class="space"></div>
                <p>Equipe de {{ leaders[0].minecraft }}</p>
              </div>
            </div>
            <div class="second-team-content">
              <div class="mdt-player-case">
                <p>Equipe de {{ leaders[1].minecraft }}</p>
                <div class="space"></div>
                <img :src="head(leaders[1].minecraft)" />
              </div>
            </div>
          </div>
          <table cellspacing="0" cellpadding="0" border="0">
            <thead>
              <tr class="tr-top mdt-separator">
                <th class="tl">Joueurs</th>
                <th>KD</th>
                <th class="text-right">KD</th>

                <th class="tr">
                  <p>Joueurs</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="mdt-content"
                v-for="(player, i) in teams['red']"
                :key="i"
              >
                <th class="player-flex tl">
                  <div class="mdt-player-case">
                    <img :src="head(player.minecraft)" />
                    <p>{{ player.minecraft }}</p>
                  </div>
                </th>
                <th>
                  <span class="kd"
                    >{{ player.kd.kills }} / {{ player.kd.deaths }}</span
                  >
                </th>

                <th class="text-right">
                  <span class="kd"
                    >{{ teams.blue[i].kd.kills }} /
                    {{ teams.blue[i].kd.deaths }}</span
                  >
                </th>
                <th class="player-flex tr">
                  <div class="mdt-player-case">
                    <p>{{ teams.blue[i].minecraft }}</p>
                    <img :src="head(teams.blue[i].minecraft)" />
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mdt-sumary">
          <div class="mdt-separator-big">
            <p>Resume</p>
          </div>
          <div class="mdt-content flow-root">
            <div class="first-team-content">
              <div class="mdt-player-case">
                <img :src="head(leaders[0].minecraft)" />
                <div class="space"></div>
                <p>Equipe de {{ leaders[0].minecraft }}</p>
              </div>
            </div>
            <div class="second-team-content">
              <div class="mdt-player-case">
                <p>Equipe de {{ leaders[1].minecraft }}</p>
                <div class="space"></div>
                <img :src="head(leaders[1].minecraft)" />
              </div>
            </div>
          </div>
          <div class="mdt-separator">Statistiques</div>
          <table cellspacing="0" cellpadding="0" border="0">
            <thead>
              <tr class="tr-top mdt-separator"></tr>
            </thead>
            <tbody>
              <tr class="mdt-content">
                <th class="tl">
                  <p>{{ totalKill.red }}</p>
                </th>
                <th class="text-center"><span class="kd">Kills</span></th>

                <th class="tr">
                  <p>{{ totalKill.blue }}</p>
                </th>
              </tr>
              <!--<tr class="mdt-content">
                <th class="tl">
                  <p>125</p>
                </th>
                <th><span class="kd">Hit en tf</span></th>

                <th class="tr">
                  <p>1</p>
                </th>
              </tr>-->
            </tbody>
          </table>
          <div v-if="match.mvp" class="mdt-separator">MVP</div>
          <div v-if="match.mvp" class="mdt-content">
            <div class="first-team-content">
              <div class="mdt-player-case">
                <img
                  src="https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/REDLEGAMINBORDEL/m2/055ef15691062677351945f198f145e706f07972"
                />
                <div class="space"></div>
                <p>xBlackouille</p>
                <span>Plus de kills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "MatchData",
  props: ["match"],
  data() {
    return {
      duos: [],
      leaders: [],
      teams: {},
      totalKill: {},
    };
  },
  beforeMount() {
    var i;
    if (this.match.gamemode == "rush") {
      this.match.players.find((p) => {
        if (p.leader == true) this.leaders.push(p);
      });
      for (i in this.match.players) {
        var player = this.match.players[i];
        if (!this.teams[player.team]) this.teams[player.team] = [];
        this.teams[player.team].push(player);

        if (!this.totalKill[player.team]) this.totalKill[player.team] = 0;
        this.totalKill[player.team] =
          this.totalKill[player.team] + player.kd.kills;
      }
    }
    if (this.match.reverted == true) M.toast({ html: "NOTE : Ce match a été revert" });
    if (this.match.status != "ended") M.toast({ html: "NOTE : Ce match est en cours" });
  },
  methods: {
    head(username) {
      return "https://minotar.net/helm/" + username + "/100.png";
    },
    result(result) {
      if (result == "win") return "Victoire";
      if (result == "lose") return "Defaite";
      if (result == "draw") return "Match nul";
      else return "Match nul";
      // Too lazy for a switch statement since copilot auto writed this for me, thx lil'bro ! :D
    },
  },
};
</script>