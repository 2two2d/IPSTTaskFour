import axios from "axios";
import {TAuthPayload ,TToken} from "../types/TAuth.ts";

class AuthService {
    private URL: string = 'http://5.35.93.223:7000/auth'
    private token: string = ''

    async register(data: TAuthPayload) {
        return axios.post<TToken>(`${this.URL}/register`, data).then(({data}) => {
            this.setToken(data.token)
        })
    }

    async login(data: TAuthPayload) {
        return axios.post<TToken>(`${this.URL}/login`, data).then(({data})=>{
            this.setToken(data.token)
        })
    }

    private setToken = (token: string) => {
        this.token = token
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
    }

    logout = () => {
        this.token = ''
    }

    getToken = () => {
        return this.token
    }

    getConfig = () => {
        return {token: this.token}
    }

}

export default new AuthService()