import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../auth'
import {Redirect} from 'react-router-dom'

const Film =  () => {
    const [hiddenData, setHiddenData] = useState([])
    const [loading, setLoading] = useState(false)
    const [redirectPage, setRedirectPage] = useState(false)

    const handleShowData = async () => {
      try {
        const {data} = await axios.get('/api/food')
        setHiddenData(data)
        setLoading(true)
      } catch (err) {
        setLoading(false)
      }       
    }

    useEffect(() => {handleShowData()}, [])

    if (!loading) return(<div>Loading...</div>)
    
    const handleSignout = () => {
      localStorage.removeItem("jwt_token")
      setRedirectPage(true)
    }

    if(redirectPage) return <Redirect to = '/' />

    return (
        <div>
            Your username is {auth.getPayloadUsername()}
            <h2> Hidden Content </h2>
            <div style={{'height': '20em'}}>
              {hiddenData.map(({_id, food}) => (
                <div key={_id}> 
                  {food}
                </div>
              ))}
              <button 
                onClick = {handleSignout}
              >Signout </button>
            </div>
        </div>
    )
}

export default Film