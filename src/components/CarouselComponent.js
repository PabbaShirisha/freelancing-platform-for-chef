// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://www.capecrystalbrands.com/cdn/shop/articles/the-latest-modernist-cooking-techniques-496899.jpg?v=1699238453" alt="Image 1" />
        <a href="#" className="button">Register</a>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M=" alt="Image 2" />
        <a href="#" className="button">Register</a>
      </div>
      <div>
        <img src="https://www.foodiv.com/wp-content/uploads/2023/06/online-ordering-business.jpg" alt="Image 3" />
        <a href="#" className="button">Register</a>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
