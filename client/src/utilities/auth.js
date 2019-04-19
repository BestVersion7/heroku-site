import axios from 'axios'
import jwt from 'jsonwebtoken'

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
    getPayloadUsername() {
        const token = localStorage.getItem('jwt_token').split(" ")[1]
        const {username} = jwt.decode(token)
        return username
    },
    getPayloadId() {
        const token = localStorage.getItem('jwt_token').split(" ")[1]
        const {_id} = jwt.decode(token)
        return _id
    },
    signout() {
        localStorage.removeItem('jwt_token')
        window.location.reload()
    }
}
