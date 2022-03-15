import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@mui/material/";
import { withAuth0 } from "@auth0/auth0-react";
import { addPlant } from "../../../services/apiServices";

export class Confirm extends Component {
  continue = async (e) => {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();
    const plantDetails = this.props.values;
    e.preventDefault();

    // PROCESS FORM //

    await addPlant(plantDetails, token);

    // THEN REROUTE
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
        // waterInterval,
        // mistInterval,
        // fertilizeInterval,
        // lastWatered,
        // lastMisted,
        // lastFertilized,
      },
    } = this.props;
    return (
      <main className="add-plant-form">
        <header className="plant-form-header">
          <h1>Summary</h1>
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

export default withAuth0(Confirm);
