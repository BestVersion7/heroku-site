import React, {  useState, useEffect } from "react";
import axios from 'axios';
import screenshot from '../assets/2502axioslayout.PNG';

export default () => {
  const [data, setData] = useState([])

  const [showCode, setShowCode] = useState(false);
  const [buttonText, setButtonText] = useState('Click to Open Code');

  //look into proxy link
  const apicall = () => {
    axios.get('/api/food').then(res => setData(res.data))
  };

  const handleShowCode = () => {
    setShowCode(!showCode)
    buttonText==='Click to Open Code' ?
    setButtonText('Click to Hide Code'):
    setButtonText('Click to Open Code')
}

  useEffect(() => {
    apicall();
  }, []);

  return (
    <div>
      <button className="code-button" onClick={handleShowCode}>{buttonText}</button>
      <div> {showCode ? <img className="code-image" src={screenshot} alt="code" />:<div></div>} 
      </div>
      <table style={{'textAlign':'center'}}>
        <thead>
          <tr>
            <th>Unique ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
           
        <tbody>
        {data.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.food}</td>
              <td>{item.price}</td>
            </tr>
        ))} 
        </tbody>
      </table>
    </div>
  );
};
