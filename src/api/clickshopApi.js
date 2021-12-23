import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9320"
});

export default api;