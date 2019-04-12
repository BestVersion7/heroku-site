import React, {useState} from 'react'
import axios from 'axios'
import {auth} from '../utilities/auth'
import CredentialFail from './credentialFail'

const ReviewPost = ({fetchComment}) => {
    const [addComment, setAddComment] = useState('hello')
    const [credentialFail, setCredentialFail] = useState(false)

    const handleChange = e => {
        setAddComment(e.target.value)
    } 

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/api/usercomment', {
                username: auth.getPayloadUsername(),
                picture_url_thumbnail: auth.getPayloadProfilePic(),
                comment: addComment
            })
            fetchComment()
        } catch(err) {
            setCredentialFail(true)
        }    
    }

    return (
        <div>
            {credentialFail && <CredentialFail />}
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