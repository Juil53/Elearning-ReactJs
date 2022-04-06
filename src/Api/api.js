import axios from "axios";

const api = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
});

api.interceptors.request.use((config) => {
  config.headers = {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
<<<<<<< HEAD
    Authorization: localStorage.getItem("UserClient")
      ? `Bearer ${JSON.parse(localStorage.getItem("UserClient")).accessToken}`
      : localStorage.getItem("AdminClient")
=======
    Authorization: localStorage.getItem("AdminClient")
>>>>>>> 6500c3d9e54296681af00f713f1972c24dc5c2fc
      ? `Bearer ${JSON.parse(localStorage.getItem("AdminClient")).accessToken}`
      : "",
  };
  return config;
});

export default api;
