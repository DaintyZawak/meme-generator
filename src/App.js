import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  // function add() {
  //   setCount(prevCount => prevCount + 1)
  // }

  // function minus() {
  //   setCount(prevCount => prevCount - 1)
  // }

  
 
  return (
    <>
      {/* <div className="counter">
            <button onClick={minus} className="counter--minus">–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={add} className="counter--plus">+</button>
        </div> */}

      <div className="container">
      <Header />
      <Main /> 
      </div>
    </>
  );
}

export default App;
