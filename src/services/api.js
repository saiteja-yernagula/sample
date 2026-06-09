import axios from "axios";

const api = axios.create({
 baseURL: "https://backend-kvur.onrender.com/"
});

export default api;
