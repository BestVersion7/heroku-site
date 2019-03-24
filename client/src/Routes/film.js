import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {auth} from '../auth'

const Film =  () => {
    const [hiddenData, setHiddenData] = useState([])
    const [loading, setLoading] = useState(false)

    const handleShowData = async () => {
      try {
        const {data} = await axios.get('/user/all', auth.getToken())
        setHiddenData(data)
        setLoading(true)
      } catch (err) {
        setLoading(false)
      }       
    }

    useEffect(() => {handleShowData()}, [])

    if (!loading) return(<div>Loading...</div>)
    
    return (
        <div>
            <h2> Hidden Content </h2>
            <div style={{'height': '20em'}}>
              {hiddenData.map(({_id, username}) => (
                <div key={_id}> 
                  {username}
                </div>
              ))}
            </div>
        </div>
    )
}

export default Film