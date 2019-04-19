import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../../utilities/auth'
import FilmsUpload from './filmsUpload'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import FilmsLayout from './filmsLayout'

export const FilmContext = React.createContext()

const Film =  () => {
    const [hiddenData, setHiddenData] = useState([])

    const handleShowData = async () => {
      try {
        const {data} = await axios.get('/api/movie', auth.getToken())
        setHiddenData(data)  
      } catch {

      }
    }

    useEffect(() => {handleShowData()}, [])

    return (
        <div className="page-container">  
          {/* User: {auth.getPayloadUsername()} */}
          <h2> Hidden Content </h2>
          <p> Images stored on Cloudinary </p>
          <FilmsUpload handleShowData={handleShowData}/>
          <br />
          <TransitionGroup className="gallery-container">
              {hiddenData.map(({_id, picture}) => (
                <CSSTransition 
                  key={_id}
                  classNames="fade"
                  timeout={300}
                >
                  <FilmContext.Provider  
                    value={{_id, picture}}
                  >
                    <FilmsLayout handleShowData={handleShowData}/>        
                  </FilmContext.Provider>  
                </CSSTransition>          
              ))}
          </TransitionGroup>         
        </div>
    )
}

export default Film
