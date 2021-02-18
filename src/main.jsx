import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

function Header(props) {
  return <h1>{props.name}</h1>;
}

const App = () => {
  return (
    <div>
      <Header name='Chapter Annotator' />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
