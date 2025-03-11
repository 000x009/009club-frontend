import axios from "axios";

import { appSettings } from "@/app/const/settings.js";

export class EventAPI {
  static baseEndpoint = "/event/";

  static async list(limit, offset) {
    return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}`, {
      params: {
        limit: limit,
        offset: offset,
      },
    });
  }

  static async get(id) {
    return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}${id}`);
  }
}
