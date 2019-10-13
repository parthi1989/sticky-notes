import React from "react";
import StickyNote from "./StickyNote";

class StickyBoard extends React.Component {
  constructor(props) {
    super(props);

    let statearray = [];
    Array.apply(null, { length: this.props.count }).map((e, i) => statearray.push(this.generatestate(i)));

    this.state = {
      statearray: statearray,

    };

    //this.state.generatestate = this.generatestate.bind(this);
    //this.state.toggleEditMode = this.toggleEditMode.bind(this);




  }

  static getDerivedStateFromProps(props, state) {
    //let statearray = [];
    //Array.apply(null, { length: props.count }).map((e, i) => statearray.push(state.generatestate(i)));
    return {};
  }





  generatestate = (i) => {
    console.log("Inside generatestate", i);
    let margin = this.createrandomxy();
    let noteid = i + 1;
    return {
      editing: false,
      noteid: noteid,
      note: "sample note " + noteid,
      completed: false,
      style: {
        top: margin.y + "px",
        left: margin.x + "px ",
      },
      toggleEditMode: this.toggleEditMode.bind(this),
      handleNoteInput: this.handleNoteInput.bind(this),
      toggleChecked: this.toggleChecked.bind(this)

    };


  }


  toggleChecked = (i) => (e) => {
    this.setState((prevState) => {
      prevState.statearray[i - 1].completed = !prevState.statearray[i - 1].completed;
      return prevState;
    });

  }

  handleNoteInput = (i) => e => {
    const notes = e.target.value;
    this.setState(prevstate => {
      prevstate.statearray[i - 1].note = notes;
    });
  };

  toggleEditMode = (i) => (e) => {


    this.setState(prevstate => { prevstate.statearray[i - 1].editing = !prevstate.statearray[i - 1].editing; console.log(prevstate); return prevstate }

    );
  };

  createrandomxy = () => {
    let x = Math.ceil(Math.random() * (window.innerWidth - 200));
    let y = Math.ceil(Math.random() * (window.innerHeight - 200));
    return { x: x, y: y };
  }



  render() {


    console.log("statearray", this.state.statearray);
    /*
    
    const stickyarray = [];
    for(var i=1;i<=this.props.count;i++) {
    stickyarray.push(i);
    }
    return (  stickyarray.map((sticky) => (
      <StickyNote id={sticky}/>
    )));
    */
    //return (statearray.map((i) => <StickyNote key={i.noteid} index={i} />));



    return (this.state.statearray.map((i) => <StickyNote id={i.noteid} key={i.noteid} attributes={i} />));

  }


}

export default StickyBoard;
