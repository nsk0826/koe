import React from 'react';
import { useState } from "react"
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string, message: string, url: string }> = (props) => {
  const [text, setText] = useState(null)
  //
  const handleTest = () => {
    console.log('test!')
    setText(null)
  }

  const handleSetText = () => {
    setText("aaaa")
  }

  const handleHey = () => {
    alert("hey")
  }
  return (
    <div>
      <div>hey</div>
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
        別の画像を使用する
      </button>
    </div>
  );

}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" message="hello" url="https://tenki.jp/" />,
  document.getElementById("root")
);