import axios from "axios";
import {TAuthPayload ,TToken} from "../types/TAuth.ts";

class AuthService {
    private URL: string = 'http://5.35.93.223:7000/auth'
    private token: string = ''

    async register(data: TAuthPayload) {
        return axios.post<TToken>(`${this.URL}/register`, data).then(({data}) => {
            this.token = data.token
        })
    }

    async login(data: TAuthPayload) {
        return axios.post<TToken>(`${this.URL}/login`, data).then(({data})=>{
            this.token = data.token
        })
    }

    logout = () => {
        this.token = ''
    }

    getToken = () => {
        return this.token
    }

}

export default new AuthService()