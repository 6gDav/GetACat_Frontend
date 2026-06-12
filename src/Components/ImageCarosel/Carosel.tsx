import { useState } from "react";

import "./Carosel.css"

function Carosel({ res }: {res: any}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!res || res.length === 0) return null;

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? res.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === res.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="carousel w-full">
        {res.map((item: any, index: number) => {
          const isCurrent = index === currentIndex;

          return (
            <div
              key={index}
              className={`carousel-item relative w-full flex justify-center ${isCurrent ? "block" : "hidden"}`}>
              <img src={item} className="max-h-125 object-contain" style={{ width: "700px" }} alt={`Slide ${index}`} />

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={handlePrev} className="btn btn-circle">❮</button>
                <button onClick={handleNext} className="btn btn-circle">❯</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carosel;