import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ImageComponent = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  var [count, setCount] = useState(60);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  useEffect(() => {
    setCurrentPhotos(photos.slice(1, count));
  }, [photos, count]);

  return (
    <div>
      {currentPhotos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
      <br />
      <Button onClick={() => setCount((prev) => prev + 50)} variant="contained">
        Load More
      </Button>
    </div>
  );
};
export default ImageComponent;
