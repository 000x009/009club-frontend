import axios from 'axios'

import { appSettings } from '../../../app/const/settings'

export class PaymentAPI {
    static baseEndpoint = '/payment/'

    static async create(orderId) {
        return axios.post(`${appSettings.BACKEND_URL}${this.baseEndpoint}paypal/create-order/`, {
            order_id: orderId
        })
    }

    static async capture(orderId) {
        return axios.post(`${appSettings.BACKEND_URL}${this.baseEndpoint}paypal/capture-order/`, {
            order_id: orderId
        })
    }
}
