import React from "react";

class StickyNote extends React.Component {
  constructor(props) {
    super(props);
    console.log("iprops", props);

    this.state = this.props.attributes;


  }







  renderDisplayMode() {

    return (
      <div className="sticky" style={this.state.style}>
        <br /><br />
        completed <input type="checkbox" name="completed" onChange={this.state.toggleChecked(this.state.noteid)} checked={this.state.completed}></input><br />
        <h3>{this.state.noteid}</h3>

        <p>{this.state.note}</p>
        <span>
          <button onClick={this.state.toggleEditMode(this.state.noteid)}>edit</button>
        </span>
      </div>
    );
  }



  renderEditMode() {
    return (
      <div className="sticky" style={this.state.style}>
        <textarea
          defaultValue={this.state.note}
          onChange={this.state.handleNoteInput(this.state.noteid)}
        ></textarea>
        <span>
          <button onClick={this.state.toggleEditMode(this.state.noteid)}>save</button>
        </span>
      </div>
    );
  }

  render() {
    console.log("Rendering sticky" + this.state.noteid);
    return this.state.editing
      ? this.renderEditMode()
      : this.renderDisplayMode();
  }
}

export default StickyNote;
