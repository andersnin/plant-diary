import React, { Component } from "react";
import FormPlantDetails from "./FormPlantDetails";
import FormJournalDetails from "./FormJournalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Plantpage from "../../Plantpage";

export class Plantform extends Component {
  state = {
    step: 1,
    plantName: "",
    commonName: "",
    scientificName: "",
    location: "",
    img_url: "",
    waterInterval: "",
    mistInterval: "",
    fertilizeInterval: "",
    lastWatered: "",
    lastMisted: "",
    lastFertilized: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      plantName,
      commonName,
      scientificName,
      location,
      img_url,
      waterInterval,
      mistInterval,
      fertilizeInterval,
      lastWatered,
      lastMisted,
      lastFertilized,
    } = this.state;
    const values = {
      plantName,
      commonName,
      scientificName,
      location,
      img_url,
      waterInterval,
      mistInterval,
      fertilizeInterval,
      lastWatered,
      lastMisted,
      lastFertilized,
    };

    switch (step) {
      case 1:
        return (
          <FormPlantDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormJournalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <>
            <Plantpage />
            <Success />
          </>
        );

      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default Plantform;
