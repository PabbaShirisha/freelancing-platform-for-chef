import React, { useState } from "react";
import "./Chef.css";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    specialties: "",
    experience: "",
    pricePerMeal: "",
    photo: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
      />
      <textarea
        name="specialties"
        placeholder="Specialties"
        value={profile.specialties}
        onChange={handleChange}
      />
      <input
        type="number"
        name="experience"
        placeholder="Years of Experience"
        value={profile.experience}
        onChange={handleChange}
      />
      <input
        type="number"
        name="pricePerMeal"
        placeholder="Price per Meal"
        value={profile.pricePerMeal}
        onChange={handleChange}
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={profile.photo}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={profile.rating}
        onChange={handleChange}
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
