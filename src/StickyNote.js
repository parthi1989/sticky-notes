import React from "react";

class StickyNote extends React.Component {
  constructor(props) {
    super(props);
console.log(props.id);

let margin = this.createrandomxy();
console.log(margin);

    this.state = {
      editing: false,
      noteid: props.index,
      note: "sample note " + props.index,
      completed: false,
      style:{
        top: margin.y+"px", 
      left: margin.x+"px ",
      }
    };
  }

  createrandomxy = () =>{
    let x = Math.ceil(Math.random()*(window.innerWidth-200));
    let y = Math.ceil(Math.random()*(window.innerHeight-200));
    return{x:x,y:y};
  }

  toggleEditMode = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
      
    }));
  };

  toggleChecked = () => {

     this.setState(prevState => ({
      completed: !prevState.completed
    }));

  }

  renderDisplayMode() {
    return (
      <div className="sticky" style={this.state.style}>
        <br/><br/>
        completed <input type="checkbox"  name="completed" onChange={this.toggleChecked} checked={this.state.completed}></input><br/>
        <h3>{this.state.noteid}</h3>
        
        <p>{this.state.note}</p>
        <span>
          <button onClick={this.toggleEditMode}>edit</button>
        </span>
      </div>
    );
  }

  handleNoteInput = e => {
    this.setState({
      note: e.target.value
    });
  };

  renderEditMode() {
    return (
      <div className="sticky" style={this.state.style}>
        <textarea
          defaultValue={this.state.note}
          onChange={this.handleNoteInput}
        ></textarea>
        <span>
          <button onClick={this.toggleEditMode}>save</button>
        </span>
      </div>
    );
  }

  render() {
    return this.state.editing
      ? this.renderEditMode()
      : this.renderDisplayMode();
  }
}

export default StickyNote;
