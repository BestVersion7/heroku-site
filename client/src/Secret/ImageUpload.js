import React, {useState} from 'react';
import axios from 'axios'
import Gallery from '../Secret/Gallery'
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
            <form 
                onSubmit = {handleSubmit}
            >
                {/* <input 
                    name="title"
                    type="text"
                />   */}
                <input 
                    name="movie"
                    type="file" 
                    onChange={handleChangeUpload}
                />
                <button>Submit</button>
            </form>
            <h3 style={{ 'color': 'purple' }}>Ongoing Full Stack Site</h3>
            27/03/19: Working on multer and mapping database images
            <Gallery />
        </div>
    )
}