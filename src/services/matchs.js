import axios from "axios";

const url = "/api/matchs/";

class MatchService {
    static get(id) {
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