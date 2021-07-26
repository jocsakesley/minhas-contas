import axios from 'axios'
import { Component } from 'react'



const BASE_URL = "https://appminhascontas.herokuapp.com/"

export class AuthService extends Component{
    static getToken(email, password) {
        return axios.post(`${BASE_URL}api/token/`, {"email":email, "password": password})
    }

}


export const isAuthenticated = () => localStorage.getItem('token') !== null;
