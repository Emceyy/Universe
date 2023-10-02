import  { useState } from "react";
import "./mycarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import data, {data2} from "./data.js"


const MyCarousel = () => {
  
  const [elementStates, setElementStates] = useState(Array(4).fill(false));
  const [elementStates2, setElementStates2] = useState(Array(4).fill(false));

  const handleClick = (index) => {
    
    const updatedStates = [...elementStates];
    
    updatedStates[index] = !updatedStates[index];
    
    setElementStates(updatedStates);
   
  };

  const handleClick2 = (index) => {
    
    const updatedStates = [...elementStates2];
    
    updatedStates[index] = !updatedStates[index];
    
    setElementStates2(updatedStates);
   
  };

 

  return (
    <section id="knowledge">
    <div className="container">
      <Carousel showThumbs={false} showStatus={false}>
        <div className="set">
          {elementStates.map((isExpanded, index) => (
            <div
              key={index}
              className={` ${isExpanded ? "expand" : "item"}`}
              id={`item${index + 1}`}
              onClick={() => handleClick(index)}
            >
              <img className={`carouselimage ${isExpanded ? "expandimg" : ""}`} src={data[index]?.img}  alt={`Image ${index + 2}`} />

              <div className={`text-container ${isExpanded ? "expandtext" : ""}`} >
                {data[index]?.text}
              </div>
            </div>
          ))}
        </div>
        <div className="set">
        {elementStates2.map((isExpanded, index) => (
            <div
              key={index}
              className={` ${isExpanded ? "expand" : "item"}`}
              id={`item${index + 1}`}
              onClick={() => handleClick2(index)}
            >
              <img className={`carouselimage ${isExpanded ? "expandimg" : ""}`} src={data2[index]?.img}  alt={`Image ${index + 2}`} />

              <div className={`text-container ${isExpanded ? "expandtext" : ""}`} >
                {data2[index]?.text}
              </div>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
    </section>
  );
};

export default MyCarousel;
