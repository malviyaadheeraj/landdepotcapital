import axios from "axios";

const Axios = axios.create({
  baseURL: "http://capital.landdepotcapital.ca/landdepotcms/api",
});

export default Axios;
