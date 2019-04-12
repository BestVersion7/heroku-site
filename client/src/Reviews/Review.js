import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReviewLayout from './ReviewLayout'
import ReviewPost from './ReviewPost'

export const UserContext = React.createContext()

const Review = () => {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchComment = async e => {
        try {
            const {data} = await axios.get('/api/usercomment')
            setComments(data)
            setLoading(true)
        } catch(err) {
            setLoading(false)
        }      
    }

    useEffect(() => {fetchComment()}, [])

    if(!loading) return <div>Loading...</div>
    return (
        <div>
            <br />
            <ReviewPost fetchComment={fetchComment}/>
            <hr />
            {loading && comments.map(item => (
                <div key={item._id}>
                    <UserContext.Provider value={item}>
                        <ReviewLayout />
                    </UserContext.Provider>
                </div>
            ))}
        </div>
    )
}

export default Review