import axios from 'axios'
import { Component } from 'react'



const BASE_URL = "https://appminhascontas.herokuapp.com/"
// const BASE_URL = "http://127.0.0.1:8000/"

export class AuthService extends Component{
    static getToken(email, password) {
        return axios.post(`${BASE_URL}api/token/`, {"email":email, "password": password})
    }

    static getRefresh(refresh) {
        return axios.post(`${BASE_URL}api/token/refresh/`, {"refresh":refresh})
    }

    static tokenIsValid(token) {
        return axios.post(`${BASE_URL}api/token_is_valid/`, {"access": token})
    }

}


export const isAuthenticated = () => localStorage.getItem('token') !== null;
