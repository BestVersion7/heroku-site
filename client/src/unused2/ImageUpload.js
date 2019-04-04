import React, {useState} from 'react';
import axios from 'axios'
import {auth} from '../auth'

export default () => {
    const [file, setFile] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', auth.getPayloadUsername())
        formData.append('movie', file)
        
        const config = axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        axios.post('/api/movie', formData, config)
        .then(() => alert('Success!'))
        .catch(err => alert(err))
    }

    const handleChangeUpload = e => {
        setFile(e.target.files[0])
    }

    return (
        <div className="page-container">
            27/03/19: Multer
            <form 
                onSubmit = {handleSubmit}
            >
                <input 
                    name="movie"
                    type="file" 
                    onChange={handleChangeUpload}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}