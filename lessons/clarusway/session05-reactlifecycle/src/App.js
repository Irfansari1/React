import "./App.css";
import { useState } from "react";
import TestComponent from "./TestComponent";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="App">
      <h1>CLARUSWAY</h1>
      {isVisible ? <TestComponent surname="green" /> : null}

      <button onClick={() => setIsVisible(!isVisible)}>unmount</button>
    </div>
  );
}

export default App;
