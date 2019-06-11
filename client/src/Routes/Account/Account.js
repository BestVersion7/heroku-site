import React, {useState, useEffect} from 'react'
import {auth} from '../../utilities/auth'
import axios from 'axios'

export default () => {
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)

    const ShowUserProfilePic = async () => {
        try {
            const {data} = await axios.get(`api/user/${auth.getPayloadUsername()}`)
            setImage(data.picture_url_thumbnail)              
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {ShowUserProfilePic()}, [])

    const handleChangePicture = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('picture', file)       
        try {
            await axios.put(`/api/user/${auth.getPayloadId()}`, formData)
            window.location.reload()
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
            User: {auth.getPayloadUsername()}
        </div>
    )
}