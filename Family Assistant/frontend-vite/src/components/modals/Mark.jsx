import React, { useState } from "react";

const Mark = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    // Здесь можно добавить логику отправки оценки
    console.log("Отправлена оценка:", rating);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[1.04vw] w-[51.15vw] flex flex-col items-center">
        <div className="w-full flex justify-start items-center bg-primary rounded-b-[2.34vw] py-[2.92vw]">
          <h1 className="font-tenor text-white text-[2.5vw] ml-[3.65vw]">
            Оцените приложение
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <p
            className="font-tenor text-primary text-[2.08vw] mt-[3.59vw] mb-[3.65vw] flex flex-col justify-center
          items-center"
          >
            Как вам приложение?
            <br />
            Выберите оценку:
          </p>

          <div className="flex gap-[1.56vw]">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                className="w-[4.17vw] h-[4.17vw] transition-transform hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill={star <= (hoveredRating || rating) ? "#F0B9E7" : "none"}
                  stroke="#781C69"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="w-full h-full"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>

          <div className="w-[51.15vw] h-[0.05vw] bg-primary mb-[1.3vw] mt-[2.71vw]"></div>

          <div className="flex w-full justify-end mr-[1.77vw] mb-[1.41vw]">
            <button
              onClick={handleSubmit}
              className="font-tenor text-stroke text-[1.56vw] bg-primary 
            px-[3.39vw] py-[1.3vw] rounded-[1.04vw] hover:opacity-90 transition-opacity"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mark;
