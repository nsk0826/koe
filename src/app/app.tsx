import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string, message: string, url: string }> = (props) => {
  return (
    <div>
      <div>hey</div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <div>{props.message}</div>
      <input type='text'></input>
      <div><a href={props.url}>{props.url}</a></div>
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" message="hello" url="https://tenki.jp/" />,
  document.getElementById("root")
);