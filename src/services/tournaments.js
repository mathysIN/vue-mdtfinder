import axios from "axios";

const url = "http://localhost:5000/api/tournaments/";

class TournamentService {
    static getTournament(id) {
        return new Promise((resolve, reject) => {
            axios.get(url + (id || "")).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

export default TournamentService;