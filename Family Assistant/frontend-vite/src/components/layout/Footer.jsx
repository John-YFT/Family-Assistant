import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const bgColor = isAboutPage ? "bg-stroke" : "bg-primary";
  const textColor = isAboutPage ? "text-primary" : "text-secondary";
  const borderColor = isAboutPage ? "border-primary" : "border-stroke";
  const hoverColor = isAboutPage ? "hover:text-[#781C69]/70" : "hover:text-white/70";

  return (
    <footer
      className={`${bgColor} ${textColor} w-full
    flex justify-between items-start
    px-[7.5vw]
    pt-[5.9vw]
    pb-[5.6vw]`}
    >
      <div className="flex flex-col items-start justify-start">
        <p
          className="font-tenor uppercase
        text-[2vw]"
        >
          FAMILYASSISTANT
        </p>
        <p
          className="font-tenor
        text-[1.4vw]
        mt-[1.1vw]"
        >
          Вместе делаем жизнь проще
        </p>
      </div>

      <div className="flex flex-col items-start justify-start">
        <p
          className="font-tenor uppercase
        text-[2vw]"
        >
          Контакты:
        </p>
        <div
          className="font-tenor
        mt-[2.7vw]
        text-[1.4vw]
        flex flex-col gap-[1vw]"
        >
          <div>
            Email: {" "}
            <a 
              href="mailto:family_assistant@yandex.ru"
              className={`${hoverColor} transition-colors duration-300 ease-in-out`}
            >
              family_assistant@yandex.ru
            </a>
          </div>
          <div>
            Телефон: {" "}
            <a 
              href="tel:+79511555544"
              className={`${hoverColor} transition-colors duration-300 ease-in-out`}
            >
              +7 (951) 155-55-44
            </a>
          </div>
        </div>

        <Link
          to="/about"
          className={`border-solid ${borderColor} flex justify-center items-center border-[1px] rounded-[0.62vw]
          mt-[2.7vw]
          text-[1.56vw]
          py-[1vw]
          w-[14.6vw]`}
        >
          О нас
        </Link>
        <Link
          to="/product"
          className={`border-solid ${borderColor} flex justify-center items-center border-[1px] rounded-[0.62vw]
          mt-[2.2vw]
          text-[1.56vw]
          py-[1vw]
          w-[14.6vw]`}
        >
          О продукте
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
