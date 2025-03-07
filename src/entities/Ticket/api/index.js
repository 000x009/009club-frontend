import axios from 'axios'

import { appSettings } from '../../../app/const/settings'

export class TicketAPI {
    static baseEndpoint = '/ticket-tiers/'

    static async list(limit, offset, eventId) {
        return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}`, {
            params: {
                limit: limit,
                offset: offset,
                event_id: eventId,
            }
        })
    }

    static async get(id) {
        return axios.get(`${appSettings.BACKEND_URL}${this.baseEndpoint}${id}`)
    }
}
