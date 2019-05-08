import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { auth } from '../../utilities/auth'
import FilmsUpload from './filmsUpload'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import FilmsLayout from './filmsLayout'

export const FilmContext = React.createContext()

const Film = () => {
  const [hiddenData, setHiddenData] = useState([])

  // componentwillupdate
  const [subscription, setSubscription] = useState(false)

  const handleShowData = async () => {
    try {
      const { data } = await axios.get('/api/movie', auth.getToken())
      setHiddenData(data)
    } catch {

    }
  }

  useEffect(() => { handleShowData() }, [subscription])

  return (
    <div className="page-container">
      <FilmContext.Provider value={{ subscription, setSubscription, hiddenData }}>
        <p> Images stored on Cloudinary </p>
        <FilmsUpload />
        <TransitionGroup className="gallery-container">
              {hiddenData.map((item, index) => ( 
                <CSSTransition 
                  key={index}
                  classNames="fade"
                  timeout={300}
                >
              
                  <FilmsLayout value={item}/>        
                </CSSTransition>          
              ))}
          </TransitionGroup>         
      </FilmContext.Provider>
    </div>
  )
}

export default Film
