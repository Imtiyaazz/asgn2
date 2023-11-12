import React from "react";
import { Html } from "./components/Html";
import { Css } from "./components/Css";
import { JavaScript } from "./components/JavaScript";
import { Reactjs } from "./components/Reactjs.jsx";
import "./components/common.css"
function App() {
  return (
   <div className="main">
    <Html/>
    <Css/>
    <JavaScript/>
    <Reactjs/>
   </div>
  );
}

export default App;
