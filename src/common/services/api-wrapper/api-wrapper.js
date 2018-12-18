import axios from "axios";

import { baseUrl } from "../../config";

//HTTP call through axios
const apiWrapper = axios.create({
  baseURL: baseUrl
});

export { apiWrapper };
