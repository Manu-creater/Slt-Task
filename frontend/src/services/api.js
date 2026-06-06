import axios from "axios";

const api = axios.create({
  baseURL: "https://fuzzy-space-trout-jjg7w7vg7p9vh5v5-8002.app.github.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;