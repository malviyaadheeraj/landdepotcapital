import axios from "axios";

const Axios = axios.create({
  baseURL: "http://ldc.eoxysitsolutionllp.com/landdepotcms/api",
});

export default Axios;
