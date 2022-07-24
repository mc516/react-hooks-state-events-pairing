import react, { useState } from "react";

function VoteButtons( {upvote, downvote, toggleComments}) {
    const [countUpVote, setCountUpVote] = useState(upvote)
    const [countDownVote, setCountDownVote] = useState(downvote)

    function handleUpVote() {
        setCountUpVote((countUpVote) => countUpVote +1);
    }

    function handleDownVote() {
        setCountDownVote((countDownVote) => countDownVote -1);
    }

    return (
        <div>
            <div>
                <button onClick={handleUpVote}>{countUpVote}👍</button>
                <button onClick={handleDownVote}>{countDownVote}👎</button>
            </div>
            
            <div>
                <p><button onClick={toggleComments}>Hide Comments</button></p>
            </div>
            

        </div>
     
    )
}

export default VoteButtons