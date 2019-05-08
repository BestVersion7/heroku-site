import React, {useState, useContext} from 'react';
import axios from 'axios'
import {auth} from '../../utilities/auth'
import {FilmContext} from './Films'

export default () => {
    const {subscription, setSubscription} = useContext(FilmContext)
    const [file, setFile] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', auth.getPayloadUsername())
        formData.append('movie', file)
        
        axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
        try {
            await axios.post('/api/movie', formData, auth.getToken())
            setSubscription(!subscription)
        } catch {

        }
    }

    const handleChangeUpload = e => {
        setFile(e.target.files[0])
    }

    return (
        <div className="page-container">
            <form onSubmit = {handleSubmit}>
                <input 
                    name="movie"
                    type="file" 
                    onChange={handleChangeUpload}
                /><br />
                <span> (only accepts .jpg, .png 5MB maximum) </span>
                <button className="regular-button">Upload Picture</button>
            </form>
        </div>
    )
}