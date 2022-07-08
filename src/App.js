import { useState } from "react";
import "./styles.css";

import Cropper from "@jsuites/react-cropper";

export default function App() {
  const [url, setUrl] = useState("");

  return (
    <div>
      <h2>React Image Cropper</h2>

      <div class="container">
        <div class="modal">
          <p>Upload your image below</p>
        </div>
      </div>
      <Cropper
        className="box"
        imageUrl={url}
        setImage={setUrl}
        options={{ allowResize: true }}
        style={{
          height: "300px",
          width: "300px",
          border: "2px dotted black",
          margin: "auto"
        }}
      />
      <div className="info">
        <h4>
          After uploading your image,you have the option to crop and adjust the
          image
        </h4>
        <h4>
          Feature in Adjust:You can change the brigtness and contrast of the
          image.
        </h4>
        <h4>Feature in crop:Zoom /Scale the image and rotate the image</h4>
      </div>

      <div className="me">
        This project is developed by Pushkar Waykole.
        <br />
        Github link:
        <a href="https://github.com/PushkarWaykole">PushkarWaykole</a>
      </div>
    </div>
  );
}
