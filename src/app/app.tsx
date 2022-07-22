import React from 'react';
import { useState } from "react"
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string, message: string, url: string }> = (props) => {
  const [text, setText] = useState(null)
  const [color, setColor] = useState(null)
  //
  const handleTest = () => {
    console.log('test!')
    console.log(text)
    setText(null)
  }

  const handleSetText = (e) =>{
    setText(e.target.value);
  }
  const handleHey = () => {
    alert("hey"+ text)
  }

  const handleColor = (e) => {
    setColor(e.target.value);
  }
  return (
    <div>
      <div>{text}</div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <div>{props.message}</div>
      <input type='text'></input>
      <div><a href={props.url}>{props.url}</a></div>
      <button
        className="test-button"
        onClick={handleHey}
      >
        hey
      </button>
      <input
        type="text"
        name="text-input"
        onChange={handleSetText}
      />
      <button
        className="test-button"
        onClick={handleTest}
      >
        deleteTest
      </button>
    </div>
  );

}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" message="hello" url="https://tenki.jp/" />,
  document.getElementById("root")
);