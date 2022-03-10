import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export class FormPlantDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <main className="add-plant-form">
        <header className="plant-form-header">
          <h1>Plant Details</h1>
        </header>
        <article>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              placeholder="What is Your Plants Name?"
              label="Plant Name"
              onChange={handleChange("plantName")}
              defaultValue={values.plantName}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="What is Your Plants Species?"
              label="Plant Species"
              onChange={handleChange("commonName")}
              defaultValue={values.commonName}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="What is Your Plants Scientific Name?"
              label="Scientific Name"
              onChange={handleChange("scientificName")}
              defaultValue={values.scientificName}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Where Do You Keep Your Plant?"
              label="Location"
              onChange={handleChange("location")}
              defaultValue={values.location}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Add Plant Image Url"
              label="Image URL"
              onChange={handleChange("img_url")}
              defaultValue={values.img_url}
              margin="normal"
              fullWidth
            />
          </Box>

          <button className="continue-btn" onClick={this.continue}>
            Continue
          </button>
        </article>
      </main>
    );
  }
}

export default FormPlantDetails;
