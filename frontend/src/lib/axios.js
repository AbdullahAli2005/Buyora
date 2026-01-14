import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"
        ? "http://localhost:5000/api"
        : "https://buyora-production.up.railway.app/api",
    withCredentials: true,
});

export default axiosInstance;
// src/lib/axios.js (or wherever it is)

// import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000/api",
//     withCredentials: true,  // ←←← THIS LINE FIXES EVERYTHING
// });

// export default axiosInstance;