import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../auth'
import {Redirect} from 'react-router-dom'
import ImageUpload from './ImageUpload'

const Beauty = () => {
    const [pic, setPic] = useState([])
    const [redirectLogout, setRedirectLogout] = useState(false)
    const allImage = async () => {
        try {
            const {data} = await axios.get('/api/gallery', auth.getToken())
            setPic(data[0].gallery)    
        } catch(err) {
              
        }
    }
    const handleLogout = e => {
        e.preventDefault()
        auth.signout()
        setRedirectLogout(true)
    }

    const handleDeleteOne = async e => {
        try {
            await axios.delete(`/api/gallery/${e.target.value}`)  
            allImage()     
        } catch(err) {

        }
    }
    useEffect(() => {allImage()}, [])

    if(redirectLogout) return <Redirect to="/secret"/>

    return (
        <div className="gallery-container">
            <ImageUpload fetchAgain={allImage}/>
            <button onClick={handleLogout}> Logout</button>          
            {pic.map(({_id, picture}) => (
                <div key={_id}>
                    <img 
                        className="gallery-image"
                        src={picture} 
                        alt="nature" 
                    />
                    <button
                        className="remove-button"
                        onClick={handleDeleteOne}
                        value={_id}
                    >x</button>
                </div>
            ))}
        </div>
    )
}

export default Beauty