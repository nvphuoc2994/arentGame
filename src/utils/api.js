import axios from "axios";

export const API_BASE_URL = "http://localhost:5173";

export const apiAxios = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

const api = {
    get: async (url) => {
        const response = await apiAxios.get(url);
        return response.data;
    },
    post: async (url, data) => {
        const response = await apiAxios.post(url, data);
        return response.data;
    },
    put: (url, data) => apiAxios.put(url, data),
    delete: (url) => apiAxios.delete(url),
};

export default api;

