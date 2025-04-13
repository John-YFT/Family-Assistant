import React from "react";

const Pluses = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-primary
      border-b-[1px]
  px-[170px]
  pt-[112px]
  pb-[89px]
  rounded-bl-[7.5vw] 
  rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke text-[48px] mb-[48px]">
        Плюсы нашего приложения, от которых сложно отказаться
      </h2>

      <ul className="list-disc pl-[1.04vw] text-[35px] max-w-[1586px] font-normal font-ysabeau">
        <li className="font-tenor text-stroke ">
          Удобство и интуитивность - наше приложение простое, понятное и легкое
          для всех возрастов
        </li>
        <li className="font-tenor text-stroke ">
          Функциональность и гибкость для взрослых пользователей - наша команда
          тщательно продумывала каждую функцию, чтобы вам было удобно
        </li>
        <li className="font-tenor text-stroke ">Простая навигация</li>
        <li className="font-tenor text-stroke ">
          Безопасность и ограниченные функции для детей - ваши маленькие
          домочадцы не смогут сломать ваш график, случайно куда-то нажав
        </li>
        <li className="font-tenor text-stroke ">Адаптивность</li>
        <li className="font-tenor text-stroke ">
          Уведомления и напоминания - мы всегда будем держать вас в курсе всего,
          что происходит в вашей семье
        </li>
      </ul>
    </div>
  );
};

export default Pluses;
