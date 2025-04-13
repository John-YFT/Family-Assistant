import React from "react";

const Thanks = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white 
      rounded-[3vw] md:rounded-[2vw] xl:rounded-[1.04vw]
      w-[90vw] md:w-[70vw] xl:w-[51.15vw]
      pt-[6vw] md:pt-[4vw] xl:pt-[2.24vw]
      pb-[4vw] md:pb-[3vw] xl:pb-[1.41vw]">
      <p className="font-tenor text-black 
        text-[6vw] md:text-[4vw] xl:text-[2.5vw] 
        pb-[4vw] md:pb-[3vw] xl:pb-[1.35vw]">
        Скачивание приложения
      </p>

      <div className="w-full h-[0.1vw] bg-primary mb-[6vw] md:mb-[4vw] xl:mb-[3.91vw]"></div>

      <p className="font-tenor text-primary
        text-[5vw] md:text-[3.5vw] xl:text-[2.5vw]
        pb-[4vw] md:pb-[3vw] xl:pb-[1.35vw]
        mx-[4vw] md:mx-[3vw] xl:mx-[2vw]
        text-center">
        Спасибо большое за ваш интерес к нашему приложению!
        <br />
        <br />
        Ссылка для скачивания очень скоро появится!
        <br />
        <br />
        Спасибо за ожидание!
      </p>

      <div className="w-full h-[0.1vw] bg-primary mb-[4vw] md:mb-[3vw] xl:mb-[2.08vw]"></div>

      <div className="w-full flex justify-end">
        <button
          onClick={onClose}
          className="font-tenor text-stroke 
            text-[4vw] md:text-[3vw] xl:text-[1.56vw] 
            bg-primary
            mx-[4vw] md:mx-[3vw] xl:mx-[2vw]
            px-[8vw] md:px-[6vw] xl:px-[4.17vw]
            py-[3vw] md:py-[2vw] xl:py-[1.3vw]
            rounded-[3vw] md:rounded-[2vw] xl:rounded-[1.04vw]
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
