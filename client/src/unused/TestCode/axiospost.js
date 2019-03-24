import React, {useState} from 'react';
import axios from 'axios';
import screenshot from '../assets/2502axiospost.PNG';

export default () => {
    const [food, setFood] = useState('');
    const [price, setPrice] = useState('');
    const [showCode, setShowCode] = useState(false)
    const [buttonText, setButtonText] = useState('Click to Open Code')

    const handleSubmit = () => {
        const api = '/api/food/'
        axios.post(api, {
        food: food,
        price: parseInt(price)
      })
      .then(res => console.log(res))
      .catch(err => console.log(err)); 
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
           
            <form onSubmit = {handleSubmit}>
                <p>Type in a "Food" and a "Price" and click "Submit" to post a new record to database</p>
                <input placeholder="Food" onChange = {e => setFood(e.target.value)} />
                <input placeholder="Price (Max: 300)" onChange = {e => setPrice(e.target.value)} />
                <button> Submit</button>
            </form>
        </div>
    )
}