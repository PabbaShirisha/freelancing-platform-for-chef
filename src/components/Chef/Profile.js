import React from "react";
import "./Chef.css";

const ChefProfile = ({ chef }) => {
  return (
    <div className="chef-profile">
      <img src={chef.photo} alt={chef.name} />
      <h3>{chef.name}</h3>
      <p>{chef.specialties}</p>
      <p>{chef.experience} years of experience</p>
      <p>{chef.pricePerMeal} per meal</p>
      <p>{chef.rating} stars</p>
      <button>Contact Chef</button>
    </div>
  );
};

export default ChefProfile;
