import React from "react";

const StarRating = ({ rating }) => {
  const stars = [0, 1, 2, 3, 4];
  
  return (
    <div className="flex gap-[17px] mt-[20px]">
      {stars.map((_, index) => (
        <svg
          key={index}
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`star-fill-${index}`}>
              <stop offset={`${Math.min(Math.max((rating - index) * 100, 0), 100)}%`} stopColor="#F0B9E7" />
              <stop offset={`${Math.min(Math.max((rating - index) * 100, 0), 100)}%`} stopColor="white" />
            </linearGradient>
          </defs>
          <path
            d="M25 2.5L31.8375 16.3625L47.5 18.5125L36.25 29.4875L38.675 45.075L25 37.7125L11.325 45.075L13.75 29.4875L2.5 18.5125L18.1625 16.3625L25 2.5Z"
            fill={`url(#star-fill-${index})`}
            stroke="#781C69"
            strokeWidth="5"
          />
        </svg>
      ))}
    </div>
  );
};

const Requirements = () => {
  const rating = 2.4; // Текущий рейтинг

  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-stroke
      px-[135px]
      pt-[177px]
      pb-[104px]
      rounded-bl-[7.5vw] 
      rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-primary text-[48px]">
        Требования к вашему устройству
      </h2>
      <p className="font-extralight text-[40px] font-ysabeau mt-[43px] mb-[33px]">
        Приложение работает только на устройствах с операционной системой
        Android
      </p>

      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col justify-start items-start">
          <ul
            className="list-disc font-light font-ysabeau text-black
      pl-[1.04vw] text-[35px] w-[866px]"
          >
            <li className="text-[35px]">
              Операционная система Android версии 6.0 и выше
            </li>
            <li className="text-[35px]">Оперативная память (ОЗУ): от 3 ГБ</li>
            <li className="text-[35px]">
              Сетевые требования: Поддержка 4G, а также Wi-Fi для стабильной
              работы
            </li>
            <li className="text-[35px]">Встроенная память: от 16 ГБ</li>
          </ul>
          <button
            className="text-stroke bg-primary text-[30px] font-tenor rounded-[12px]
          mt-[98px]
          px-[35px]
          py-[22px]"
          >
            Скачать приложение "Family Assistant"
          </button>
        </div>
        <div
          className="flex flex-col justify-center items-center ml-[104px]
        w-[655px]
        h-[349px]
        rounded-[12px]
        border-primary border-[1px]
        "
        >
          <p className="font-tenor text-primary text-[30px] font-normal">
            Средняя оценка приложения:
          </p>
          <p
            className="font-tenor text-primary 
          text-[64px]
          mt-[49px]"
          >
            {rating}
          </p>
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Requirements;
