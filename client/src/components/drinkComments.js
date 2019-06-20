// will split this code in multiple components

import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Button, Avatar } from "@material-ui/core";
import { formatDate } from "../utilities/formatDate";
import axios from "axios";

const NoComments = () => {
    return <h2>No Comments Yet. Be the first to post!</h2>;
};

const DrinkComments = ({ id, comments }) => {
    // destructure the array
    const { userData, signedIn, setSignedIn } = useContext(UserContext);
    const [newComment, setNewComment] = useState("");
    // this is to rerender componentwillupdate
    const [subscription, setSubscription] = useState(false);
    const [noComment, setNoComment] = useState(false);

    const handleAddComment = async e => {
        e.preventDefault();
        try {
            if(!newComment) {
                return
            }
            await axios.post(
                `/api/drinks/comments/${id}`,
                // put the state in the nested subdocument to map
                {
                    username: userData.username,
                    picture_url_thumbnail: userData.picture_url_thumbnail,
                    comment: newComment
                }
            );
            setNoComment(false);
            setNewComment("");
            // this triggers the rerender useeffect
            setSubscription(!subscription);
        } catch (err) {
            setSignedIn(!signedIn);
        }
    };

    return (
        <div>
            {signedIn ? (
                <form onSubmit={handleAddComment}>
                    <textarea
                        placeholder="Write comment here..."
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                    />
                    <br />
                    <Button
                        size="small"
                        type="submit"
                        color="default"
                        variant="contained"
                    >
                        Post Comment
                    </Button>
                </form>
            ) : (
                <div>
                    <textarea
                        disabled
                        placeholder="Please sign in to post comments"
                    />
                </div>
            )}
            {comments.map(
                ({ _id, username, picture_url_thumbnail, date, comment }) => (
                    <div className="user-comment-container" key={_id}>
                        <Avatar
                            variant="outlined"
                            src={picture_url_thumbnail}
                            alt="profile"
                        />
                        <div>
                            <i>{`${formatDate(date)}`}</i> {username}
                            <br /> {comment}
                        </div>
                    </div>
                )
            )}
            {noComment && <NoComments />}
        </div>
    );
};

export default DrinkComments;
