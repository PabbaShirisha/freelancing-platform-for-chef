import React, { useEffect, useState } from "react";
import ChefProfile from "../Chef/Profile";
import "./Customer.css";

const BrowseChefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    // Fetch chefs from the API
    const fetchChefs = async () => {
      const response = await fetch("/api/chefs");
      const data = await response.json();
      setChefs(data);
    };

    fetchChefs();
  }, []);

  return (
    <div className="browse-chefs">
      {chefs.map((chef) => (
        <ChefProfile key={chef.id} chef={chef} />
      ))}
    </div>
  );
};

export default BrowseChefs;
