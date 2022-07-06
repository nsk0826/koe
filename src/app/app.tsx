import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string }> = (props) => {
  return (
    <div>
      <div>hey</div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <div>{props.children.toString}</div>
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);