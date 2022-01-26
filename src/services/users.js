import axios from "axios";

const url = "http://localhost:5000/api/users/";

class UserService {
    static getUser(id) {
        if(!id) throw "ID is required";
        return axios.get(url + id);
    }
}

export default UserService;