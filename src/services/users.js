import axios from "axios";

const url = "/api/users/";

class UserService {
    static getUser(id) {
        if(!id) throw "ID is required";
        return axios.get(url + id);
    }
}

export default UserService;