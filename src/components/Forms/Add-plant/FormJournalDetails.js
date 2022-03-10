import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

export class FormJournalDetails extends Component {
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
      <main className="add-plant-form">
        <header className="plant-form-header">
          <h1>Care Details</h1>
        </header>
        <article>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              type="number"
              placeholder="I Water My Plant Every ..."
              label="Watering Interval"
              defaultValue={values.waterInterval}
              onChange={handleChange("waterInterval")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">days</InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Watered"
              type="date"
              defaultValue={values.lastWatered}
              onChange={handleChange("lastWatered")}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              type="number"
              placeholder="I Mist My Plant Every ..."
              label="Misting Interval"
              defaultValue={values.mistInterval}
              onChange={handleChange("mistInterval")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">days</InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Misted"
              type="date"
              defaultValue={values.lastMisted}
              onChange={handleChange("lastMisted")}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              type="number"
              placeholder="I Fertilize My Plant Every ..."
              label="Fertilizing Interval"
              defaultValue={values.fertilizeInterval}
              onChange={handleChange("fertilizeInterval")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">days</InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Fertilized"
              type="date"
              defaultValue={values.lastFertilized}
              onChange={handleChange("lastFertilized")}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
            />
          </Box>
          <div className="form-buttons">
            <button className="back-btn" onClick={this.back}>
              Back
            </button>

            <button className="continue-btn" onClick={this.continue}>
              Continue
            </button>
          </div>
        </article>
      </main>
    );
  }
}

export default FormJournalDetails;
