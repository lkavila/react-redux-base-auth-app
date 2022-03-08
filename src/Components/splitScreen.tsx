import React, { useState, useEffect } from "react";

const Carousel = () => {

  let count = 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredImages = [
    'https://browsecat.net/sites/default/files/4k-sunset-wallpapers-41094-501-4705263.png',
    'https://browsecat.net/sites/default/files/4k-sunset-wallpapers-41094-510-2963162.png',
    'https://browsecat.net/sites/default/files/4k-sunset-wallpapers-41094-530-1323591.png',
    "https://browsecat.net/sites/default/files/4k-sunset-wallpapers-41094-536-3936263.png"];

  const handleOnNextClick = () => {
    if (currentIndex === featuredImages.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };


  const handleOnPrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(featuredImages.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const idkNotWorkingWithClick = () => {
    count = (count + 1) % (featuredImages.length);
    setCurrentIndex(count);
  }

  const startSlider = () => {
    setInterval(() => {
      idkNotWorkingWithClick();
    }, 6000);
  };

  useEffect(() => {
    startSlider();
  }, []);



  return (
    <div className="flex items-center justify-center">
      <div className="w-full relative select-none h-fit">
        <div className="aspect-w-15 aspect-h-14">
          <img src={featuredImages[currentIndex]} alt="" className="rounded-md" />
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>Previous</button>
          <button onClick={handleOnNextClick}>Next</button>
        </div>
      </div>
    </div>
  )
};

const SplitScreen = (props: { first: Boolean, child: React.ReactNode }) => {

  if (props.first) {
    return (
      <div className="grid grid-cols-2 place-items-center">
        <div className="w-full h-screen">
          {props.child}
        </div>
        <div className="w-full h-min">
          <Carousel />
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 place-items-center">
        <div className="w-full h-min">
          <Carousel />
        </div>
        <div className="w-full h-screen">
          {props.child}
        </div>
      </div>
    );
  }
}

export default SplitScreen