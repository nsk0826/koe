import React from 'react';
import { useState } from "react"
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string, message: string, url: string }> = (props) => {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div>
      <div>hey</div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <div>{props.message}</div>
      <input type='text'></input>
      <div><a href={props.url}>{props.url}</a></div>
      <input
        type="file"
        name="ocr-image"
        onChange={(event) => {
          setSelectedImage(event.target.files[0])
        }}
      />
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" message="hello" url="https://tenki.jp/" />,
  document.getElementById("root")
);