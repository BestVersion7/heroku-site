import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../auth'
import {Redirect} from 'react-router-dom'
import FilmsUpload from './filmsUpload'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import FilmsLayout from './filmsLayout'

export const FilmContext = React.createContext()

const Film =  () => {
    const [hiddenData, setHiddenData] = useState([])
    const [loading, setLoading] = useState(false)
    const [redirectPage, setRedirectPage] = useState(false)

    const handleShowData = async () => {
      try {
        const {data} = await axios.get('/api/movie', auth.getToken())
        setHiddenData(data)
        setLoading(true)
      } catch (err) {
        setRedirectPage(true)
      }       
    }

    useEffect(() => {handleShowData()}, [])

    const handleSignout = () => {
      localStorage.removeItem("jwt_token")
      setRedirectPage(true)
    }

    if(redirectPage) return <Redirect to = '/' />
    if (!loading) return(<div>Loading...</div>)
    return (
        <div>       
          User: {auth.getPayloadUsername()}
            <button 
              onClick = {handleSignout}
            >Signout </button>
          <h2> Hidden Content </h2>
          <FilmsUpload handleShowData={handleShowData}/>
          
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