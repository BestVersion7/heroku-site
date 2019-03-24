import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default () => {
    //get request
    const [title, setTitle] = useState([])
    const fetchTitle = (titles="") => {
        axios.get(`/api/movie/${titles}`)
        .then(res => setTitle(res.data))
    }

    useEffect(() => {fetchTitle()}, [])

    const handleChange = e => {
        fetchTitle(e.target.value)
    }

    //post request
    const [postTitle, setPostTitle] = useState('')
    const [postPrice, setPostPrice] = useState(null)

    const handleAddPost = async () => {
        try {
            axios.post('api/movie', {
                title: postTitle,
                price: postPrice
            })
        } catch(err) {
            console.log(err)
        }
    }

    //delete request
    const [deleteTitle, setDeleteTitle] = useState('')

    const handleDeleteTitle = async () => {
        await axios.delete(`/api/movie/${deleteTitle}`)
    }
    
    return (
        <div>
            {/*Delete request */}
            <form onSubmit={handleDeleteTitle}>
                <input 
                    type="password"
                    onChange={e => setDeleteTitle(e.target.value)} 
                />
                <button> Delete </button>
            </form>

            {/*post request*/}
            <form onSubmit={handleAddPost}>
                <input placeholder='email' onChange={e =>setPostTitle(e.target.value)}/> 
                <input placeholder='password' onChange={e => setPostPrice(e.target.value)}/>
                <button> Submit </button>
            </form>

            {/*get request*/}
            <input onChange={handleChange} />
            <button>Search One (need fixing in typing) </button>
            {title.map((item, index) => (      
                <div key={index}>
                    {item.title} {item.price}
                </div>   
            ))}
        </div>
    )
}