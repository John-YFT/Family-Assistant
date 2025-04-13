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
      <div className="bg-white rounded-[20px] w-[982px] flex flex-col items-center">
        <div className="w-full flex justify-start items-center bg-primary rounded-b-[45px] py-[56px]">
          <h1 className="font-tenor text-white text-[48px] ml-[70px]">
            Оцените приложение
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <p
            className="font-tenor text-primary text-[40px] mt-[69px] mb-[70px] flex flex-col justify-center
          items-center"
          >
            Как вам приложение?
            <br />
            Выберите оценку:
          </p>

          <div className="flex gap-[30px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                className="w-[80px] h-[80px] transition-transform hover:scale-110"
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

          <div className="w-[982px] h-[1px] bg-primary mb-[25px] mt-[52px]"></div>

          <div className="flex w-full justify-end mr-[34px] mb-[27px]">
            <button
              onClick={handleSubmit}
              className="font-tenor text-stroke text-[30px] bg-primary 
            px-[65px] py-[25px] rounded-[20px] hover:opacity-90 transition-opacity"
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
