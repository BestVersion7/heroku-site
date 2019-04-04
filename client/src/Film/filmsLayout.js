import React, {useContext} from 'react'
import axios from 'axios'
import {FilmContext} from './films'
import {auth} from '../auth'

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
        <div> 
            <img 
                className="gallery-image" 
                src={picture} 
                alt="nature" 
            />
            <button               
                onClick={handleDeleteImage}
                value = {_id}
            > Delete</button>
        </div>
    ) 
}