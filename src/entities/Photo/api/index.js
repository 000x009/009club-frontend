import axios from "axios";

import { appSettings } from "@/app/const/settings.js";

export class PhotoAPI {
  static baseEndpoint = "/photo/";

  static async get(id) {
    return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}${id}`);
  }
}
