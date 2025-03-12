import axios from 'axios'

import { appSettings } from '../../../app/const/settings'

export class UserTicketAPI {
    static baseEndpoint = '/user-tickets/'

    static async list(limit, offset, userId) {
        return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}`, {
            params: {
                limit: limit,
                offset: offset,
                user_id: userId,
            }
        })
    }

    static async get(id) {
        return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}${id}`)
    }
}
