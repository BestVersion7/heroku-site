import React, {useState} from 'react';
import axios from 'axios'

export default ({fetchImages}) => {
    const [file, setFile] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('dze', file)
        
        const config = axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        axios.post('/api/gallery', formData, config)
        .then(() => fetchImages())
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
                <input 
                    name="dze"
                    type="file" 
                    onChange={handleChangeUpload}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}