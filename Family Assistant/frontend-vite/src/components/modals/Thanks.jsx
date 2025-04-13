import React from "react";

const Thanks = ({ onClose }) => {
  return (
    <div
      className="flex flex-col items-center justify-start bg-white 
      rounded-[20px]
    w-[982px] 

    pt-[43px]
    pb-[27px]"
    >
      <p className="font-tenor text-black text-[48px] pb-[26px]">
        Скачивание приложения
      </p>

      <div className="w-full  h-[1px] bg-primary mb-[75px]"></div>

      <p className="font-tenor text-primary
       text-[48px] pb-[26px] ml-[80px] mr-[34px]">
        Спасибо большое за ваш интерес к нашему приложению!
        <br />
        <br />
        Ссылка для скачивания очень скоро появится!
        <br />
        <br />
        Спасибо за ожидание!
      </p>
      <div className="w-full  h-[1px] bg-primary mb-[40px]"></div>
      <div className="w-full flex justify-end">
        <button
          onClick={onClose}
          className="font-tenor text-stroke text-[30px] bg-primary
          ml-[80px] mr-[34px]
          px-[80px]
          py-[25px]
          rounded-[20px]
          hover:opacity-90
          transition-opacity"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Thanks;
