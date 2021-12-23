import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9320/clientes",
});

export default api;

export const getClients = () => {
    return api.get("/");
}

export const getClient = (id) => {
    return api.get(`/${id}`);
}

export const createClient = (client) => {
    return api.post("/", client);
}

export const updateClient = (client) => {
    return api.put(`/${client.id}`, client);
}

export const deleteClient = (id) => {
    return api.delete(`/${id}`);
}