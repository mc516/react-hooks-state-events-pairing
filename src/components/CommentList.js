import react from "react";
import Comments from "./Comments";

function CommentList( {comments} ) {
    return (
        <div>
            { comments.map(element => {return <Comments comment={element.comment} user={element.user}/> }) }
        </div>
    )
}

export default CommentList