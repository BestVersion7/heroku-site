import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default () => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [fames, setFames] = useState([])

    const fetchfames = async () => {
        const {data} = await axios.get('/api/fame')
        setFames(data)
    }

    const handleAddfame = e => {
        e.preventDefault()
        axios.post('/api/fame', {title, rating})
        .catch(err => prompt(err))
        fetchfames()
    }

    const handleDelete = async e => {
        e.preventDefault()
        const data = await axios.delete(`/api/fame/${e.target.value}`)
        fetchfames()
    }

    useEffect(() => {fetchfames()}, [])

    return (
        <div>
            <form onSubmit = {handleAddfame}>
                <input onChange={e => setTitle(e.target.value)} />
                <input onChange={e => setRating(e.target.value)} />
                <button>Submit</button>
            </form>

            {fames.map(({id, title, rating}) => (
                <div key={id}> 
                    {title} {rating} 
                    <button 
                        value = {id}
                        onClick={handleDelete}
                    >X</button>
                </div>
            ))}
        </div>
    )
}