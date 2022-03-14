import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getPlantsByUserId } from "../services/apiServices";
import GetUserInfo from "../services/GetUserInfo";

const Plantpage = async () => {

  const plants = [
    {
      id: 1,
      plant_name: "Bob",
      common_name: "Monstera",
      scientific_name: "Monstera delicosa",
      location: "Stue",
      img_url:
        "https://www.ikea.com/no/no/images/products/monstera-potteplante-vindusplante__0653991_pe708220_s5.jpg?f=s",
    },
    {
      id: 3,
      plant_name: "Bob",
      common_name: "Monstera",
      scientific_name: "Monstera delicosa",
      location: "Stue",
      img_url:
        "https://www.ikea.com/no/no/images/products/monstera-potteplante-vindusplante__0653991_pe708220_s5.jpg?f=s",
    },
    {
      id: 2,
      plant_name: "Olof Palme",
      common_name: "Areca Palm",
      scientific_name: "Chrysalidocarpus lutescens",
      location: "Stue",
      img_url:
        "https://www.gardeningknowhow.com/wp-content/uploads/2013/01/areca-palm-400x533.jpg",
    },
    {
      id: 4,
      plant_name: "Olof Palme",
      common_name: "Areca Palm",
      scientific_name: "Chrysalidocarpus lutescens",
      location: "Stue",
      img_url:
        "https://www.gardeningknowhow.com/wp-content/uploads/2013/01/areca-palm-400x533.jpg",
    },
  ];

  // const getPlants = getPlantsByUserId(token);
  // console.log(getPlants);

  const renderedPlant = plants.map((plant) => {
    return (
      <div className="masonry-brick plant-card" key={plant.id}>
        <div className="plant-img">
          <img src={plant.img_url} alt={plant.name} />
        </div>
        <div className="plant-info">
          <h1>{plant.plant_name}</h1>
          <h2>{plant.common_name}</h2>
          {/* <p>{plant.location}</p> */}
        </div>
      </div>
    );
  });

  return (
    <main>
      <header>
        <h1>My plants</h1>
      </header>
      <article>
        <div className="masonry">
          <Link to="/add-plant" className="masonry-brick add-plant">
            <div className="icon">
              <BsPlusCircle />
              <p>Add New</p>
            </div>
          </Link>
          {renderedPlant}
        </div>
      </article>
    </main>
  );
};

export default Plantpage;
