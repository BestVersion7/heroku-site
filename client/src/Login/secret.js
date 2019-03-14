import React, {useState} from 'react'
import axios from 'axios'
import {CSSTransition} from 'react-transition-group'

export default () => {
    const [hiddenData, setHiddenData] = useState('')
    const [buttonText, setButtonText] = useState('Click to Reveal Message')
    const [toggleData, setToggleData] = useState(false)

    const handleShowData = async () => {
      buttonText === 'Click to Reveal Message' ?
      setButtonText('Click to Hide Message'): 
      setButtonText('Click to Reveal Message')
      
      try {
        const config =  localStorage.getItem("jwt_token")
        axios.defaults.headers.Authorization = config
        const {data} = await axios.get('/user/all', config)
        setHiddenData(data)
        setToggleData(!toggleData)
      } catch (err) {
        setHiddenData('401 Unauthorized Access - Please Login to Continue')
        setToggleData(!toggleData)
      }       
    }

    return (
        <div>
            <h2> Content </h2>
            <button
                onClick = {handleShowData}
            >{buttonText}</button> <br />

            <div style={{'height': '20em'}}>
              {toggleData ? 
              <CSSTransition
                classNames="message"
                appear={true}
                in={true}
                timeout={500}
              >
                <div>{hiddenData}</div>
              </CSSTransition>
                : <div></div>}
            </div>

        </div>
    )
}