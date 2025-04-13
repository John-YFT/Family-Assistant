import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const bgColor = isAboutPage ? "bg-stroke" : "bg-primary";
  const textColor = isAboutPage ? "text-primary" : "text-secondary";
  const borderColor = isAboutPage ? "border-primary" : "border-stroke";
  const hoverColor = isAboutPage
    ? "hover:text-[#781C69]/70"
    : "hover:text-white/70";

  return (
    <footer
      className={`${bgColor} ${textColor} w-full
        flex flex-col md:flex-row justify-between items-center md:items-start
        px-6 md:px-[5vw] xl:px-[7.5vw]
        py-12 md:py-[4vw] xl:pt-[5.9vw] xl:pb-[5.6vw]
        gap-12 md:gap-8 xl:gap-0
      `}
    >
      <div className="flex flex-col items-center md:items-start justify-start text-center md:text-left">
        <p className="font-tenor uppercase text-[6vw] md:text-[3vw] xl:text-[2vw]">
          FAMILYASSISTANT
        </p>
        <p className="font-tenor text-[4vw] md:text-[2vw] xl:text-[1.4vw] mt-4 md:mt-[1.5vw] xl:mt-[1.1vw]">
          Вместе делаем жизнь проще
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start justify-start text-center md:text-left">
        <p className="font-tenor uppercase text-[6vw] md:text-[3vw] xl:text-[2vw]">
          Контакты:
        </p>
        <div className="font-tenor mt-6 md:mt-[3vw] xl:mt-[2.7vw] text-[4vw] md:text-[2vw] xl:text-[1.4vw] flex flex-col gap-4 md:gap-[1.5vw] xl:gap-[1vw]">
          <div>
            Email:{" "}
            <a
              href="mailto:family_assistant@yandex.ru"
              className={`${hoverColor} transition-colors duration-300 ease-in-out break-all md:break-normal`}
            >
              family_assistant@yandex.ru
            </a>
          </div>
          <div>
            Телефон:{" "}
            <a
              href="tel:+79511555544"
              className={`${hoverColor} transition-colors duration-300 ease-in-out`}
            >
              +7 (951) 155-55-44
            </a>
          </div>
        </div>

        <div className="flex flex-col w-full items-stretch md:items-start gap-4 md:gap-[2vw] xl:gap-[2.2vw] mt-8 md:mt-[3vw] xl:mt-[2.7vw]">
          <Link
            to="/about"
            className={`border-solid ${borderColor} flex justify-center items-center border-[1px] 
              rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.62vw]
              text-[4vw] md:text-[2vw] xl:text-[1.56vw]
              py-4 md:py-[1.5vw] xl:py-[1vw]
              w-full md:w-[20vw] xl:w-[14.6vw]
              transition-colors duration-300 ease-in-out
              ${hoverColor}
            `}
          >
            О нас
          </Link>
          <Link
            to="/product"
            className={`border-solid ${borderColor} flex justify-center items-center border-[1px] 
              rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.62vw]
              text-[4vw] md:text-[2vw] xl:text-[1.56vw]
              py-4 md:py-[1.5vw] xl:py-[1vw]
              w-full md:w-[20vw] xl:w-[14.6vw]
              transition-colors duration-300 ease-in-out
              ${hoverColor}
            `}
          >
            О продукте
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
