import react, { useState } from "react";
import VoteButtons from "./VoteButtons";
import Comments from "./Comments";
import CommentList from "./CommentList"

function Video( {
    url,
    title,
    views,
    date,
    upvotes,
    downvotes,
    comments,
}) 

{
  const [showComments, setShowComments] = useState(false)

  function handleToggleComments() {
    setShowComments((showComments) => !showComments)
  }

    return (
        <div className="App">
          <iframe
            width="919"
            height="525"
            src={url}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
          <h1>{title}</h1>

          <div><p>{views} + views | Uplaoded {date}</p></div>

          <VoteButtons upvote={upvotes} downvote={downvotes} toggleComments={handleToggleComments} showComment={showComments}/>

          <div>
            { showComments ? <CommentList comments={comments}/> : null }
          </div>



        </div>
        
      );
}

export default Video