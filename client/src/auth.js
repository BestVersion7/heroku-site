import axios from 'axios'

export const auth = {
    setToken(res) {
        axios.defaults.headers.Authorization = `Bearer ${res.data.token}`
        const token = axios.defaults.headers.Authorization
        localStorage.setItem('jwt_token', token)
    },
    getToken() {
        const token = localStorage.getItem('jwt_token')
        axios.defaults.headers.Authorization = token
    },
    signout() {
        localStorage.removeItem('jwt_token')
    }
}
