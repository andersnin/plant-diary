import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <main>
        <button className="back-btn" onClick={this.back}>
          Back
        </button>

        <button className="continue-btn" onClick={this.continue}>
            Confirm & Continue
          </button>
      </main>
    );
  }
}

export default Confirm;
