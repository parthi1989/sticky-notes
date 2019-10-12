import React from "react";
import ReactDOM from "react-dom";
//import StickyNote from "./StickyNote";
import "./styles/index.css";
import StopWatch from "./StopWatch";
import StickyBoard from "./StickyBoard";


//console.log(Array.apply(null, {length: this.props.count}));

//ReactDOM.render(<StickyNote />, document.getElementById("root"));
//ReactDOM.render(<StopWatch />, document.getElementById("root"));
ReactDOM.render(<StickyBoard count="5"/>, document.getElementById("root"));
