import React, { Component } from "react";

class Decrement extends Component {
constructor(minus) {
    super(minus);
    this.state = {
      value: 10,
    };
  }

  decrementMe = () => {
    if( this.state.value === 0)
      return alert("Cannot be less than zero!")
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.decrementMe}>Decrement</button>
        <h2>{ this.state.value }</h2> 
      </div>
    );
  }
}

/*
class Decrement extends Component {
  constructor(dec) {//creates construtor
    super(dec);//
    this.state = { numbers: dec.starta, 
        number: 10 };//takes in a number
  }

  decrement = (decs) => {
    if (decs.number === 0) {
        //state.number = 10//reset number to 10
      return alert("Cannot be less than zero!");
    }
    //setState changes the value
    this.setState({ numbers: decs.numbers - 1 });
  };

  render() {
    return (
      <div>
        {this.state.numbers}{" "} 
        <button onClick={() => this.decrement(this.state)}>
          decrement
        </button>
      </div>
    );
  }
}
//proptypes
Decrement.propTypes = {
  starta: PropTypes.number.isRequired,
};
*/

export default Decrement;