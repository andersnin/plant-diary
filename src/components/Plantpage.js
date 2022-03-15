import React, { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getPlantsByUserId } from "../services/apiServices";
import { useAuth0 } from "@auth0/auth0-react";

const Plantpage = (props) => {
  console.log(props.plantList);

  const plantList = props.plantList;

  let renderedPlants = plantList.map((plant) => {
    return (
      <Link
        key={plant.id}
        to={`/plant/${plant.id}`}
        state={{ plant }}
        className="masonry-brick plant-card"
      >
        <div className="plant-img">
          <img src={plant.img_url} alt={plant.name} />
        </div>
        <div className="plant-info">
          <h1>{plant.plant_name}</h1>
          <h2>{plant.common_name}</h2>
          <p>{plant.location}</p>
        </div>
      </Link>
    );
  });

  return (
    <main>
      <header>
        <h1>My plants</h1>
      </header>
      {Object.keys(renderedPlants).length === 0 ? (
        <article>
          <div className="masonry">
            <Link to="/add-plant" className="masonry-brick add-plant">
              <div className="icon">
                <BsPlusCircle />
                <p>Add New</p>
              </div>
            </Link>
          </div>
        </article>
      ) : (
        <article>
          <div className="masonry">
            <Link to="/add-plant" className="masonry-brick add-plant">
              <div className="icon">
                <BsPlusCircle />
                <p>Add New</p>
              </div>
            </Link>
            {renderedPlants}
          </div>
        </article>
      )}
    </main>
  );
};

export default Plantpage;
