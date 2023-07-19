import axios from "axios";

const instance = axios.create({
    baseURL: '...' //THE API {cloud functin} URL

});

export default instance;