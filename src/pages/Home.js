import React from "react";
import "./Home.css";
import CarouselComponent from "../components/CarouselComponent"; // Adjust the path if necessary

const Home = () => {
  return (
    <div className="home">      <CarouselComponent />
    

      <h2>Welcome to the Chef Freelance Platform</h2>
      <p>Discover amazing chefs and personalized culinary experiences.</p>
    </div>
  );
};

export default Home;

