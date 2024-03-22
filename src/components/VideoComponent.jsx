import { useEffect, useState } from "react";

const VideoComponent = () => {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVideos(data);
      });
  }, []);

  // console.log(currentVideos);
  return (
    <div>
      {video.map((video) => (
        <video
          width="750"
          height="500"
          controls
          key={video.id}
          poster={video.thumbnailUrl}
          autoPlay
          muted
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};
export default VideoComponent;
