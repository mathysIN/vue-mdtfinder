import axios from "axios";

const url = "/api/users/";

class UserService {
    static get(id) {
        return new Promise((resolve, reject) => {
            axios.get(url + (id || "")).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
    static getTournaments(id) {
        return new Promise((resolve, reject) => {
            axios.get(url + (id || "") + "/tournaments").then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

export default UserService;