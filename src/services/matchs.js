import axios from "axios";

const url = "http://localhost:5000/api/matchs/";

class MatchService {
    static getMatchs(id) {
        return new Promise((resolve, reject) => {
            axios.get(url + (id || "")).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

export default MatchService;