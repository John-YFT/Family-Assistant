import React, { useState } from "react";
import { aboutUs2 } from "../../../assets/img";
import CustomSelect from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";

const options = [
  "Пожелание",
  "Ошибка",
  "Вопрос",
  "Предложение",
  "Другое"
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      className="w-full bg-primary
    px-[9.9vw]
    pt-[6.25vw]
    pb-[10.4vw]
    rounded-bl-[7.5vw] 
    rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke 
      text-[2.5vw]
      mb-[3.8vw]">Свяжитесь с нами</h2>
      <div
        className="flex flex-row items-start justify-between bg-stroke
      p-[1.72vw]
      gap-[1.72vw]
      rounded-[1vw]"
      >
        <img
          src={aboutUs2}
          alt=""
          className="
        h-[27vw]
        w-[19.4vw]
        rounded-[1vw]
        object-fit-contain"
        />
        <div className="flex flex-col items-start justify-start w-full h-full">
          <p
            className="font-tenor text-black 
          text-[1.56vw]
          mt-[0.26vw]"
          >
            Тип обращения
          </p>

          <CustomSelect 
            options={options}
            placeholder="Выберите тип обращения"
            onChange={setSelectedType}
          />

          <p
            className="font-tenor text-black 
          text-[1.56vw]
          mt-[3.4vw]"
          >
            Описание
          </p>

          <CustomTextArea
            placeholder="Напишите свой вопрос/пожелание/проблему"
            value={description}
            onChange={setDescription}
          />
          <div className="w-full flex flex-row items-center justify-end">
            <button className="text-stroke bg-primary rounded-[0.62vw]
            font-tenor text-[1.56vw]
            mt-[1.77vw]
            py-[1.15vw]
            px-[4.8vw]"
            >Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
