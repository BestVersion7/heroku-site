// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import {auth} from '../../utilities/auth'
// import {Redirect} from 'react-router-dom'
// import ImageUpload from './imageUpload'

// const Beauty = () => {
    // const [pic, setPic] = useState([])
    // const [redirectLogout, setRedirectLogout] = useState(false)
    // const fetchImages = async () => {
    //     try {
    //         const {data} = await axios.get('/api/gallery', auth.getToken())
    //         setPic(data[0].gallery)    
    //     } catch(err) {
              
    //     }
    // }
//     const handleLogout = e => {
//         e.preventDefault()
//         auth.signout()
//         setRedirectLogout(true)
//     }

//     const handleDeleteOne = async e => {
//         try {
//             await axios.delete(`/api/gallery/${e.target.value}`)  
//             fetchImages()     
//         } catch(err) {

//         }
//     }
//     useEffect(() => {fetchImages()}, [])

//     if(redirectLogout) return <Redirect to="/secret"/>

//     return (
//         <div>
//             Needs work
//             <ImageUpload fetchImages={fetchImages}/>
//             <button 
//                 className="btn-logout"
//                 onClick={handleLogout}
//             > Logout</button> 
            // <div className="gallery-container">
            //     {pic.map(({_id, picture}) => (
            //         <div className="gallery-container-grid" key={_id}>
            //             <img 
            //                 className="gallery-image"
            //                 src={picture} 
            //                 alt="nature" 
            //             />
            //             <button
            //                 className="btn-remove-absolute"
            //                 onClick={handleDeleteOne}
            //                 value={_id}
            //             >x</button>
            //         </div>
            //     ))}
            // </div>
//         </div>
//     )
// }

// export default Beauty

import React, {useState, useEffect} from 'react'
import ImageUpload from './imageUpload'
import axios from 'axios'
import {auth} from '../../utilities/auth'
const Beauty = () => {
    const [pic, setPic] = useState([])
    const fetchImages = async () => {
        try {
            const {data} = await axios.get('/api/gallery', auth.getToken())
            setPic(data[0].gallery)    
        } catch(err) {
              
        }
    }

    useEffect(() => {fetchImages()}, []) 

    return (
        <div>
            <ImageUpload fetchImages={fetchImages}/>
            <div className="gallery-container">
                {pic.map(({_id, picture}) => (
                    <div className="gallery-container-grid" key={_id}>
                        <a href={picture}>{picture}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Beauty