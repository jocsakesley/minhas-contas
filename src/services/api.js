import axios from 'axios'


const api = axios.create({
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