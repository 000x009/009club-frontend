import axios from 'axios'

import { appSettings } from '../../../app/const/settings'

export class OrderAPI {
    static baseEndpoint = '/order/'

    static async create(data) {
        return axios.post(`${appSettings.BACKEND_URL}${this.baseEndpoint}guest/`, data)
    }

    static async get(id) {
        return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}${id}`)
    }
}
