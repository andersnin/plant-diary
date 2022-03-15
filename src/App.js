import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import "./App.scss";

// Components
import Plant from "./components/Plant";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Journal from "./components/Journal";
import Plantpage from "./components/Plantpage";
import Plantform from "./components/Forms/Add-plant/Plantform";
import { getPlantsByUserId } from "./services/apiServices";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        plantList: []
    }
  }

  async componentDidMount() {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();
    const plantList = await getPlantsByUserId(token);
    this.setState({
        plantList
    })
    console.log(this.state.plantList);
  }

  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plants" element={<Plantpage plantList={this.state.plantList} />} />
          <Route path="journal" element={<Journal />} />
          <Route path="add-plant" element={<Plantform />} />
          <Route path="/plant/:id" element={<Plant />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withAuth0(App);
