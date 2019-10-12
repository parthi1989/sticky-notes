import React from "react";

class StopWatch extends React.Component {
  //Triggered on Creation/Mount
  constructor(props) {          
    super(props)
    this.state ={count:10};
    console.log("inside constructor");
  }

  timer = () =>{
    var counter= this.state.count-1;  
    this.setState({count: counter});
  }

  //triggered on creation and update
  static getDerivedStateFromProps() {
    console.log("inside getDerivedState");
    return{};
  }


  //Triggered on update and based on return boolean proceeds further
  shouldComponentUpdate() {
    console.log("inside shouldComponentUpdate");

    console.log(this.state.count);
    //return true;
    return this.state.count > 0 ? true: false;

  }



  
  //Mount/Update
  render() {
    console.log("inside render");

    return (<div>Countdown starts {this.state.count}   <button onClick={this.timer}>Decrease</button></div>);
    
  }

  
  //Mount
  componentDidMount() {
    console.log("inside Componentdidmount");
    
  }


  //update
  componentDidUpdate() {
    console.log("inside componentDidUpdate");
    setTimeout(()=>{this.timer()},1000);
  }

  
  componentWillUnmount() {
    console.log("inside componentwillunmount ");
  }

}

export default StopWatch;
