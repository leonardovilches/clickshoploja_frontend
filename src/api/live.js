import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9320/live",
});

export default api;

export const getLives = (page) => {
    return api.get("/page/?page=" + page);
}

export const getLive = (id) => {
    return api.get(`/${id}`);
}

export const createLive = (live) => {
    return api.post("/", live);
}

export const updateLive = (live) => {
    return api.put(`/${live.id}`, live);
}

export const deleteLive = (id) => {
    return api.delete(`/${id}`);
}