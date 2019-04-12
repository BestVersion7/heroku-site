import React, {useContext} from 'react'
import {UserContext} from './Review'
import {formatDate} from '../utilities/formatDate'

const ReviewLayout = () => {
    const {
        username, 
        comment, 
        date, 
        picture_url_thumbnail
    } = useContext(UserContext)
    
    return (
            <div>
                <div className="user-comment-container">
                    <div>
                        <img src={picture_url_thumbnail} alt="port" /><br />
                    </div>
                    <div>
                        <i>{formatDate(date)}</i> <br />
                        <b>{username}</b> <br />
                        {comment}
                    </div>
                </div> 
                <hr />
            </div>
        )
}

export default ReviewLayout

