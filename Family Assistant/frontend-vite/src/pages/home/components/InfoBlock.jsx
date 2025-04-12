import React from "react";
import { main0 } from "../../../assets/img";
import { Link } from "react-router-dom";

const InfoBlock = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center relative bg-stroke
    h-[39vw] ">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${main0})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      />
      <div
        className="z-10 
      flex flex-col items-center justify-center
      w-[50vw] 
      h-[10vw]"
      >
        <h2
          className="text-black font-normal font-tenor
        max-w-[31.4vw]
        text-[2.5vw]
        "
        >
          Мобильное приложение, которое изменит вашу семейную жизнь
        </h2>

        <div
          className="flex items-center justify-center gap-[2.6vw]
        mt-[1.8vw]"
        >
          <Link
            to="/product"
            className="text-primary
              border-solid border-[1px] rounded-[0.62vw] border-primary
              py-[0.62vw] px-[2.3vw]
              font-tenor font-normal
              text-[1vw]
              transition-colors duration-300 ease-in-out
              hover:text-gray-300"
          >
            О приложении
          </Link>
          <Link
            to="/about"
            className="text-primary
              border-solid border-[1px] rounded-[0.62vw] border-primary
              py-[0.62vw] px-[2.3vw]
              font-tenor font-normal
              text-[1vw]
              transition-colors duration-300 ease-in-out
              hover:text-gray-300"
          >
            Про команду
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
