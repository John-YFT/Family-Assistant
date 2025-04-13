import React from "react";
import { main0 } from "../../../assets/img";
import { Link } from "react-router-dom";

const InfoBlock = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center relative bg-stroke
    h-[80vw] md:h-[50vw] xl:h-[39vw]">
      <div
        className="absolute inset-0 bg-no-repeat [background-size:210%] md:[background-size:130%] xl:bg-cover"
        style={{
          backgroundImage: `url(${main0})`,
          backgroundPosition: "bottom",
        }}
      />
      <div
        className="z-10 
        flex flex-col items-center justify-center
        w-full px-6 md:w-[60vw] xl:w-[50vw] 
        h-auto md:h-[12vw] xl:h-[10vw]"
      >
        <h2
          className="text-black font-normal font-tenor
          max-w-full md:max-w-[35vw] xl:max-w-[31.4vw]
          text-[6vw] md:text-[3.5vw] xl:text-[2.5vw]
          text-center md:text-left"
        >
          Мобильное приложение, которое изменит вашу семейную жизнь
        </h2>

        <div
          className="flex flex-col md:flex-row items-center justify-center 
          gap-4 md:gap-[2.6vw]
          mt-6 md:mt-[2vw] xl:mt-[1.8vw]
          w-full md:w-auto"
        >
          <Link
            to="/product"
            className="text-primary
              border-solid border-[1px] border-primary
              rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.62vw]
              py-4 md:py-[0.8vw] xl:py-[0.62vw]
              px-6 md:px-[2.8vw] xl:px-[2.3vw]
              font-tenor font-normal
              text-[4vw] md:text-[1.5vw] xl:text-[1vw]
              transition-colors duration-300 ease-in-out
              hover:text-gray-300
              w-full md:w-auto
              text-center"
          >
            О приложении
          </Link>
          <Link
            to="/about"
            className="text-primary
              border-solid border-[1px] border-primary
              rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.62vw]
              py-4 md:py-[0.8vw] xl:py-[0.62vw]
              px-6 md:px-[2.8vw] xl:px-[2.3vw]
              font-tenor font-normal
              text-[4vw] md:text-[1.5vw] xl:text-[1vw]
              transition-colors duration-300 ease-in-out
              hover:text-gray-300
              w-full md:w-auto
              text-center"
          >
            Про команду
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
