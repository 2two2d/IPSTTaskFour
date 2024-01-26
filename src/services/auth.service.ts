import axios from "axios";
import {TAuthPayload ,TToken} from "../types/TAuth.ts";

class AuthService {
    private URL: string = 'http://5.35.93.223:7000/auth'

    async register(data: TAuthPayload) {
        return axios.post<TToken>(`${this.URL}/register`, data)
    }

    async login(data: TAuthPayload) {
        return axios.post<TToken>(`${this.URL}/login`, data)
    }

}

export default new AuthService()