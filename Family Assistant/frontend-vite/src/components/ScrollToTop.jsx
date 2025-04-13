import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку только после прокрутки
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Плавная прокрутка вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed 
            bottom-6 right-6 md:bottom-[3vw] md:right-[3vw] xl:bottom-[2.08vw] xl:right-[2.08vw] 
            bg-primary hover:bg-primary/90 
            text-white 
            w-14 h-14 md:w-[6vw] md:h-[6vw] xl:w-[4.17vw] xl:h-[4.17vw] 
            rounded-full 
            flex items-center justify-center 
            transition-all duration-300 
            z-50 
            border-2 md:border-[0.3vw] xl:border-[0.2vw] border-stroke 
            shadow-xl
            hover:scale-110 active:scale-95"
          aria-label="Прокрутить вверх"
        >
          <svg
            className="w-8 h-8 md:w-[3.5vw] md:h-[3.5vw] xl:w-[2.5vw] xl:h-[2.5vw]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 