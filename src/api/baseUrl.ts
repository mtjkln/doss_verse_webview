import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://socialproto.coode.fun/test-api/",
});

export default baseUrl;
