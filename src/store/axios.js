import axios from "axios";

const Axios = axios.create({
  baseURL: "https://landdepotcapital.ca/landdepotcms/api",
});

export default Axios;
