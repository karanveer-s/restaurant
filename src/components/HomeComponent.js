// import React from 'react';


// const Home= () => (
//       <div style={{display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"column" , backgroundImage:"url("+"https://img.freepik.com/free-photo/white-wall-texture-background-backdrop-composition_1962-1027.jpg?size=626&ext=jpg&ga=GA1.2.1192447133.1603522449"+")" , height:"100vh"}}>
//         <p><h1>HOME</h1></p>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia debitis architecto iusto magnam, nulla quas incidunt optio nobis. </p>
//       </div>
//     );


// export default Home;  

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import image1 from "../1.png";
import image2 from "../2.png";
import image3 from "../3.png";

const items = [
  {
    src: image1,
    caption: "Restaurant Name",
  },
  {
    src: image2,
    altText: "Slide 2",
    caption: "Restaurant Name",
  },
  {
    src: image3,
    altText: "Slide 3",
    caption: "Restaurant Name",
  },
];

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ height: "600px", width: "100%"  }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Home;