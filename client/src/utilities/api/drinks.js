import axios from 'axios'

export const popularDrinks = async () => {
    const {data} = await axios.get('/api/drinks/popular')
    return data
}

export const allDrinks = async () => {
    try {
        const {data} = await axios.get('/api/drinks')
        return data
    } catch(err) {
        console.log(err)
        return false
    }
}

export const drinkById = async params => {
    // match.params.id
    const {data} = await axios.get(`/api/drinks?_id=${params}`)
    return data
    // inside here are nested comments too
}

// will make this socket.io in the future
export const drinkCommentsById = async params => {
    const {data} = await axios.get(`/api/drinks/comments/${params}`)
    return data
}

export const drinkCommentsByGroup = async params => {
    const {data} = await axios.get(`/api/drinks?group=${params}`)
    return data
}