import React from "react";

const Pluses = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-primary
      border-b-[1px]
      px-[8vw] md:px-[8.85vw]
      pt-[8vw] md:pt-[5.83vw]
      pb-[6vw] md:pb-[4.64vw]
      rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw] 
      rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] mb-[4vw] md:mb-[2.5vw]">
        Плюсы нашего приложения, от которых сложно отказаться
      </h2>

      <ul className="list-disc pl-[4vw] md:pl-[1.04vw] text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw] max-w-full md:max-w-[82.6vw] font-normal font-ysabeau">
        <li className="font-tenor text-stroke mb-[3vw] md:mb-[1.5vw]">
          Удобство и интуитивность - наше приложение простое, понятное и легкое
          для всех возрастов
        </li>
        <li className="font-tenor text-stroke mb-[3vw] md:mb-[1.5vw]">
          Функциональность и гибкость для взрослых пользователей - наша команда
          тщательно продумывала каждую функцию, чтобы вам было удобно
        </li>
        <li className="font-tenor text-stroke mb-[3vw] md:mb-[1.5vw]">Простая навигация</li>
        <li className="font-tenor text-stroke mb-[3vw] md:mb-[1.5vw]">
          Безопасность и ограниченные функции для детей - ваши маленькие
          домочадцы не смогут сломать ваш график, случайно куда-то нажав
        </li>
        <li className="font-tenor text-stroke mb-[3vw] md:mb-[1.5vw]">Адаптивность</li>
        <li className="font-tenor text-stroke">
          Уведомления и напоминания - мы всегда будем держать вас в курсе всего,
          что происходит в вашей семье
        </li>
      </ul>
    </div>
  );
};

export default Pluses;
