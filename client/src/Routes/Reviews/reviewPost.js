import React, {useState, useContext} from 'react'
import axios from 'axios'
import CredentialFail from './credentialFail'
import {UserContext} from '../../App'

const ReviewPost = ({fetchComment}) => {
    const {userData} = useContext(UserContext)
    const {
        username,
        picture_url_thumbnail
    } = userData

    const [addComment, setAddComment] = useState('')
    const [credentialFail, setCredentialFail] = useState(false)

    const handleChange = e => {
        setAddComment(e.target.value)
    } 

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/api/usercomment', {
                username,
                picture_url_thumbnail,
                comment: addComment
            })
            setAddComment('')
            fetchComment()
        } catch(err) {
            setCredentialFail(true)
        }    
    }

    return (
        <div>
            {credentialFail && <CredentialFail />}
            Signin to Post
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Add your Review here"
                    onChange={handleChange}
                />
                <br />
                <button
                    className="btn-regular"
                >Post Comment</button>
            </form>
        </div>
    )
}

export default ReviewPost