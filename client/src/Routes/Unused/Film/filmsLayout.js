import React, { useContext } from 'react'
import axios from 'axios'
import { auth } from '../../utilities/auth'
import { IconButton } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import { FilmContext } from './Films'

export default ({ value }) => {
    const { picture, _id } = value
    const { subscription, setSubscription } = useContext(FilmContext)
    const handleDeleteImage = async () => {
        try {
            await axios.delete(`api/movie/${_id}`, auth.getToken())
            setSubscription(!subscription)
        } catch (err) {
            alert(err)
        }
    }
    return (
        <div className="gallery-image-container">
            <img
                src={picture}
                alt="nature"
            />
            <IconButton
                onClick={handleDeleteImage}
            ><Close /></IconButton>
        </div>
    )
}