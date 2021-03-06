import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReviewLayout from './reviewLayout'
import ReviewPost from './reviewPost'

export const ReviewContext = React.createContext()

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
        <div className="page-container">
            <ReviewPost fetchComment={fetchComment}/>
            <hr />
            {loading && comments.map(item => (
                <div key={item._id}>
                    <ReviewContext.Provider value={item}>
                        <ReviewLayout />
                    </ReviewContext.Provider>
                </div>
            ))}
        </div>
    )
}

export default Review