const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:2000/",
});

export default instance;
