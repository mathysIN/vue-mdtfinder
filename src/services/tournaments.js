import axios from "axios";

const url = "/api/tournaments/";

class TournamentService {
    static get(id) {
        return new Promise((resolve, reject) => {
            axios.get(url + (id || "")).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }

    static getLeaderboard(id) {
        return new Promise((resolve, reject) => {
            axios.get(url + (id || "") + "/leaderboard").then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

export default TournamentService;