import './views.css'
import  { useRef } from 'react';
import slides from './slide.js'

const Views = () => {
  const trackRef = useRef(null);

  const handleOnDown = e => {
    const track = trackRef.current;
    track.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    const track = trackRef.current;
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = e => {
    const track = trackRef.current;
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage =
      (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        -100
      );

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 3200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 3200, fill: "forwards" }
      );
    }
  };

  return (
    <section id="views">
    <div className="container">
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="-50"
        ref={trackRef}
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={handleOnDown}
        onTouchEnd={handleOnUp}
        onTouchMove={handleOnMove}
      >
        <img
          className="image"
          src={slides[0]}
          draggable="false"
          alt=""
        />
        <img
          className="image"
          src={slides[1]}
          draggable="false"
          alt=""
        />
         <img
          className="image"
          src={slides[2]}
          draggable="false"
          alt=""
        />
         <img
          className="image"
          src={slides[3]}
          draggable="false"
          alt=""
        />
         <img
          className="image"
          src={slides[4]}
          draggable="false"
          alt=""
        />
        <img
          className="image"
          src={slides[5]}
          draggable="false"
          alt=""
        />
        <img
          className="image"
          src={slides[6]}
          draggable="false"
          alt=""
        />
         <img
          className="image"
          src={slides[7]}
          draggable="false"
          alt=""
        />
      </div>
    </div>
    </section>
  );
};

export default Views;
