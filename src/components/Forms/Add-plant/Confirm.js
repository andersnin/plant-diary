import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@mui/material/";
import GetUserInfo from "../../../services/GetUserInfo";


export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    console.log(this.props.values);
    // const userInfo = GetUserInfo();
    // console.log(userInfo);

    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <main className="add-plant-form">
        <header className="plant-form-header">
          <h1>Plant Details</h1>
        </header>
        <article>
          <List>
            <ListItem>
              <ListItemText
                primary="Plant Name"
                secondary={plantName ? plantName : "—"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Plant Species"
                secondary={commonName ? commonName : "—"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Scientific Name"
                secondary={scientificName ? scientificName : "—"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Plant Location"
                secondary={location ? location : "—"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Image URL"
                secondary={img_url ? img_url : "—"}
              />
            </ListItem>
            {/* <ListItem>
              <ListItemText
                primary="Last Watered"
                secondary={lastWatered ? lastWatered : "—"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last Misted"
                secondary={lastMisted ? lastMisted : "—"}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Last Fertilized"
                secondary={lastFertilized ? lastFertilized : "—"}
              />
            </ListItem> */}
          </List>
          <div className="form-buttons">
            <button className="back-btn" onClick={this.back}>
              Back
            </button>

            <button className="continue-btn" onClick={this.continue}>
              Confirm
            </button>
          </div>
        </article>
      </main>
    );
  }
}

export default Confirm;
