import React, {useState} from 'react';
import axios from 'axios';
import screenshot from '../assets/2502axiosdelete.PNG';

export default () => {
    const [id, setId] = useState('');
    const [showCode, setShowCode] = useState(false);
    const [buttonText, setButtonText] = useState('Click to Open Code');

    
    const handleSubmit = () => {
        axios.delete(`/api/food/${id}`)
    }

    const handleShowCode = () => {
        setShowCode(!showCode)
        buttonText==='Click to Open Code' ?
        setButtonText('Click to Hide Code'):
        setButtonText('Click to Open Code')
    }

    return (
        <div>
            <button className="code-button" onClick={handleShowCode}>{buttonText}</button>
            <div> {showCode ? <img className="code-image" src={screenshot} alt="code" />:<div></div>} </div>

            <p>Copy ID and paste in box, then click "delete".
            Refresh browser to see change. </p>
            <input 
                onChange = {e => setId(e.target.value)}
            />
            <button onClick = {handleSubmit}>Delete </button> 
        </div>
    )
}