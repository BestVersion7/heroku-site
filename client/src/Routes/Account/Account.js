import React, {useState, useEffect} from 'react'
import {auth} from '../../utilities/auth'
import axios from 'axios'

export default () => {
    const [image, setImage] = useState('')
    const [file, setFile] = useState(null)

    const ShowUserProfilePic = async () => {
        try {
            const {data} = await axios.get(`api/user/${auth.getPayloadUsername()}`)
            setImage(data.picture_url_thumbnail)              
        } catch(err) {
            alert(err)
        }
    }

    useEffect(() => {ShowUserProfilePic()}, [])

    const handleChangePicture = async e => {
        e.preventDefault()
        const config = axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        const formData = new FormData()
        formData.append('picture', file)       
        //no need for jwt authentication because it is done in server
        try {
            await axios.put(`/api/user/${auth.getPayloadId()}`, formData, config)
            ShowUserProfilePic()
        } catch(err) {
            alert(err)
        }        
    }

    const handleChange = e => {
        setFile(e.target.files[0])
    }

    return (
        <div className="page-container">
            <p>Change your profile picture here</p>
            <form onSubmit={handleChangePicture}>
                <input type="file" name="picture" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
            <img src={image} alt="profilepic" />
            <p>Username: {auth.getPayloadUsername()}</p>
        </div>
    )
}