import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string ,message:string}> = (props) => {
  return (
    <div>
      <div>hey</div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <div>{props.message}</div>
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" message="hello"/>,
  document.getElementById("root")
);