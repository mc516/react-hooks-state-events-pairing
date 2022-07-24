import video from "../data/video.js";
import Video from "./Video"
import VoteButtons from "./VoteButtons.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
      <Video url={video.embedUrl} title={video.title} views={video.views} date={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes} comments={video.comments}/>
      

    </div>
  
  );
}

export default App;
