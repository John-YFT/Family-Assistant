import React, { useState, useRef } from "react";
import { $host } from "../../http";

const Mark = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const modalRef = useRef(null);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoveredRating(value);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = async () => {
    if (!rating) return;

    try {
      await $host.post("api/ratings/submit-rating", { rating });
      
      // Обновляем средний рейтинг (это обновит отображение в родительском компоненте)
      const ratingResponse = await $host.get("api/ratings/get-average-rating");
      console.log("Отправлена оценка:", rating);
      onClose();
    } catch (error) {
      console.error("Ошибка при отправке оценки:", error);
    }
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      if (rating > 0) {
        setShowConfirmation(true);
      } else {
        onClose();
      }
    }
  };

  const handleConfirmClose = () => {
    onClose();
  };

  const handleCancelClose = () => {
    setShowConfirmation(false);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div 
        ref={modalRef}
        className="bg-white 
        rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1.04vw] 
        w-[90vw] md:w-[70vw] xl:w-[51.15vw] 
        flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {showConfirmation ? (
          <div className="w-full flex flex-col items-center py-[4vw] md:py-[3vw] xl:py-[2vw]">
            <p className="font-tenor text-primary 
              text-[4vw] md:text-[3vw] xl:text-[2.08vw] 
              mb-[4vw] md:mb-[3vw] xl:mb-[2vw]
              text-center
              px-[4vw] md:px-[3vw] xl:px-[2vw]">
              Вы уверены, что хотите отменить оценку?
            </p>
            <div className="flex gap-[3vw] md:gap-[2vw] xl:gap-[1.56vw]">
              <button
                onClick={handleConfirmClose}
                className="font-tenor text-stroke 
                  text-[3vw] md:text-[2vw] xl:text-[1.56vw] 
                  bg-primary 
                  px-[5vw] md:px-[4vw] xl:px-[3.39vw] 
                  py-[2.5vw] md:py-[1.8vw] xl:py-[1.3vw] 
                  rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1.04vw]
                  hover:opacity-90 transition-opacity"
              >
                Да
              </button>
              <button
                onClick={handleCancelClose}
                className="font-tenor text-primary 
                  text-[3vw] md:text-[2vw] xl:text-[1.56vw] 
                  border border-primary
                  px-[5vw] md:px-[4vw] xl:px-[3.39vw] 
                  py-[2.5vw] md:py-[1.8vw] xl:py-[1.3vw] 
                  rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1.04vw]
                  hover:bg-primary/10 transition-colors"
              >
                Нет
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-start items-center bg-primary 
              rounded-b-[4vw] md:rounded-b-[3vw] xl:rounded-b-[2.34vw] 
              py-[4vw] md:py-[3.5vw] xl:py-[2.92vw]">
              <h1 className="font-tenor text-white 
                text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] 
                ml-[5vw] md:ml-[4vw] xl:ml-[3.65vw]">
                Оцените приложение
              </h1>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-tenor text-primary 
                text-[4vw] md:text-[3vw] xl:text-[2.08vw] 
                mt-[5vw] md:mt-[4vw] xl:mt-[3.59vw] 
                mb-[5vw] md:mb-[4vw] xl:mb-[3.65vw] 
                flex flex-col justify-center items-center
                text-center">
                Как вам приложение?
                <br />
                Выберите оценку:
              </p>

              <div className="flex gap-[3vw] md:gap-[2vw] xl:gap-[1.56vw]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={handleStarLeave}
                    className="w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] xl:w-[4.17vw] xl:h-[4.17vw] 
                      transition-transform hover:scale-110"
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

              <div className="w-full h-[0.1vw] bg-primary 
                mb-[3vw] md:mb-[2vw] xl:mb-[1.3vw] 
                mt-[4vw] md:mt-[3vw] xl:mt-[2.71vw]"></div>

              <div className="flex w-full justify-end 
                mr-[3vw] md:mr-[2vw] xl:mr-[1.77vw] 
                mb-[3vw] md:mb-[2vw] xl:mb-[1.41vw]">
                <button
                  onClick={handleSubmit}
                  disabled={!rating}
                  className="font-tenor text-stroke 
                    text-[3vw] md:text-[2vw] xl:text-[1.56vw] 
                    bg-primary 
                    px-[5vw] md:px-[4vw] xl:px-[3.39vw] 
                    py-[2.5vw] md:py-[1.8vw] xl:py-[1.3vw] 
                    rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1.04vw]
                    hover:opacity-90 transition-opacity
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Отправить
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Mark;
