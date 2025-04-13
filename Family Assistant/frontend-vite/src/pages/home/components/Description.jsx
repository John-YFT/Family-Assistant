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
        className="w-full flex flex-row items-center justify-center bg-stroke
        rounded-bl-[7.5vw] 
        rounded-br-[7.5vw] 
      h-[59vw]
      gap-[5.7vw]"
      >
        <img
          src={phone_colling}
          alt="phone with colling by happy family"
          className="object-cover
      w-[33.75vw]"
        />
        <div className="flex flex-col items-start justify-start">
          <h2
            className="font-normal
          text-[2.5vw]
          mb-[2.7vw] 
          text-primary"
          >
            Family Assistant
          </h2>
          <p
            className="text-black font-ysabeau
          text-[1.8vw]
          max-w-[45.6vw]"
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
            rounded-[0.6vw]
            py-[1.4vw]
            px-[2vw]
            text-[1.56vw]
            mt-[2.76vw]">
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
