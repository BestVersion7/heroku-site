import React, {useContext} from 'react'
import axios from 'axios'
import {FilmContext} from './Films'
import {auth} from '../../utilities/auth'

export default ({handleShowData}) => {
    const {_id, picture} = useContext(FilmContext)

    const handleDeleteImage = async e => {
        try {
          await axios.delete(`api/movie/${e.target.value}`, auth.getToken())
          handleShowData()
        } catch(err) {
          alert(err)
        }      
    }
    return (
        <div className="gallery-image-container"> 
            <img 
                src={picture} 
                alt="nature" 
            />
            <button
                onClick={handleDeleteImage}
                value = {_id}
            > X</button>
        </div>
    ) 
}