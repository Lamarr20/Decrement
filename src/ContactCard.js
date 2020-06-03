import React, { Component } from "react";

class ContactCard extends Component {
  render() {//spits out to browser
    return (//return jsx or some code 
      <div>
        <h1>{this.props.name}</h1>
        <ul>
            <li>name: {this.props.name}</li>
          <li>mobile: {this.props.mobile}</li>
          <li>work: {this.props.work}</li>
          <li>email: {this.props.email}</li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;


//goes in app.js

<ContactCard
name="john"
mobile= "32546787543"
work="23456787654"
email="dsfhgf"
/>