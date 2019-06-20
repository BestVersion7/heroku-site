// will split this code in multiple components

import React, { useContext, useState, useEffect } from "react";
import { DrinkIDContext } from "./drinkParams";
import { UserContext } from "../../App";
import axios from "axios";
import { auth } from "../../utilities/auth";
import { Button, CircularProgress, Avatar } from "@material-ui/core";
import { formatDate } from "../../utilities/formatDate";

const NoComments = () => {
    return <h2>No Comments Yet. Be the first to post!</h2>;
};

const DrinkComments = () => {
    // destructure the array
    const [drink] = useContext(DrinkIDContext);
    const { userData, signedIn, setSignedIn } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // this is to rerender componentwillupdate
    const [subscription, setSubscription] = useState(false);
    const [noComment, setNoComment] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddComment = async e => {
        e.preventDefault();
        try {
            await axios.post(
                `/api/drinks/comments/${drink._id}`,
                // put the state in the nested subdocument to map
                {
                    username: userData.username,
                    picture_url_thumbnail: userData.picture_url_thumbnail,
                    comment: newComment
                },
                auth.getToken()
            );
            setNoComment(false);
            setNewComment("");
            // this triggers the rerender useeffect
            setSubscription(!subscription);
        } catch (err) {
            setSignedIn(!signedIn);
        }
    };

    const getComments = async () => {
        try {
            const { data } = await axios.get(
                `/api/drinks/comments/${drink._id}`
            );
            if (data.comments.length === 0) {
                return setNoComment(true);
            }
            const allComments = data.comments;
            setComments(allComments);
        } catch (err) {
            setIsLoading(true);
        }
    };

    if (isLoading) return <CircularProgress />;

    useEffect(() => {
        getComments();
    }, [subscription]);

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
