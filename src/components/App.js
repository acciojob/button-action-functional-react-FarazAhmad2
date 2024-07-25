import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div id="main">
      <button onClick={handleClick} id="click">
        Click me!
      </button>
      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy.
        </p>
      )}
    </div>
  );
}

export default App;
