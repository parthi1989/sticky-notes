import React from "react";
import StickyNote from "./StickyNote";

class StickyBoard extends React.Component {
  constructor (props) {
    super(props);
      
    
  }

  

  render() {
    /*
    
    const stickyarray = [];
    for(var i=1;i<=this.props.count;i++) {
    stickyarray.push(i);
    }
    return (  stickyarray.map((sticky) => (
      <StickyNote id={sticky}/>
    )));
    */
    return (Array.apply(null,{length: this.props.count}).map((e,i)=> <StickyNote key={i}  index={i} />));

  }


}

export default StickyBoard;
