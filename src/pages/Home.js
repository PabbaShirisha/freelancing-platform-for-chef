import React from "react";
import "./Home.css";
import CarouselComponent from "../components/CarouselComponent";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Chef Freelance Platform</h2>
      <p>Discover amazing chefs and personalized culinary experiences.</p>
      <CarouselComponent />
      <ContactForm />
    </div>
  );
};

export default Home;


