import React, { useState } from "react";
import { phone_colling } from "../../../assets/img";
import Thanks from "../../../components/modals/Thanks";

const InfoBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="w-full flex flex-col md:flex-row items-center justify-center bg-stroke
        rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw]
        rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]
        py-12 md:py-8 xl:py-0
        h-auto md:h-[68vw] xl:h-[59vw]
        gap-8 md:gap-[4vw] xl:gap-[5.7vw]"
      >
        <img
          src={phone_colling}
          alt="phone with colling by happy family"
          className="object-cover
          w-[80vw] md:w-[42vw] xl:w-[33.75vw]"
        />
        <div className="flex flex-col items-center md:items-start justify-start px-6 md:px-0">
          <h2
            className="font-normal
            text-[6vw] md:text-[3.5vw] xl:text-[2.5vw]
            mb-6 md:mb-[3vw] xl:mb-[2.7vw]
            text-primary text-center md:text-left"
          >
            Family Assistant
          </h2>
          <p
            className="text-black font-ysabeau
            text-[4vw] md:text-[2.2vw] xl:text-[1.8vw]
            max-w-full md:max-w-[50vw] xl:max-w-[45.6vw]
            text-center md:text-left"
          >
            Данное приложение поможет вам в управлении семейными задачами. Здесь
            вам поможет наш помощник, который подскажет, кто из вашей семьи луче
            всего подходит для выпонения этой задачи. Вы можете назначить
            мероприятие и указать, кто пойдет на данное мероприятие, и сразу де
            сообщить вашим членам семьи о предстоящем.
            <br />
            <br />
            Кроме прочего, вы можете создать wish-list с пожалениями на любой
            праздник.
          </p>
          <button 
            onClick={handleOpenModal}
            className="font-tenor text-white bg-primary
            rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.6vw]
            py-4 md:py-[2vw] xl:py-[1.4vw]
            px-8 md:px-[3vw] xl:px-[2vw]
            text-[4vw] md:text-[2vw] xl:text-[1.56vw]
            mt-8 md:mt-[3.5vw] xl:mt-[2.76vw]
            w-full md:w-auto">
            Скачать (для Android)
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Thanks onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default InfoBlock;
