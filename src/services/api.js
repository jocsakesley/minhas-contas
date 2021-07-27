import axios from 'axios'

// const BASE_URL = "http://127.0.0.1:8000/"
const BASE_URL = "https://appminhascontas.herokuapp.com/"

const api = axios.create({
    // baseURL: "http://127.0.0.1:8000/"
    baseURL: "https://appminhascontas.herokuapp.com/"
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    }, error => {
        if (error.response.status === 401) {
            localStorage.removeItem('token')
        }
    }
);

export class BillsService{
    static getBills() {
        return api.get('bills/')
    }
    static deleteBill(id) {
        return api.delete(`bills/${id}/`)
    }
    static postBills(data) {
        return api.post('bills/', data)
    }
}

export class UserService {
    static postUser(data) {
        return api.post(`${BASE_URL}users/`, data)
    }
}