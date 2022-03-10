import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <main>
        <button className="back-btn" onClick={this.back}>
          Back
        </button>

        <button className="continue-btn" onClick={this.continue}>
          Continue
        </button>
      </main>
    );
  }
}

export default FormPersonalDetails;
