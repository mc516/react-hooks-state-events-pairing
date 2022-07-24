import react from "react";

function Comments( {comment, user} ) {
    
    return (

        <div>
            <div><strong><p>{user}</p></strong></div>
            <div>{comment}</div>
        </div>
    )
}

export default Comments