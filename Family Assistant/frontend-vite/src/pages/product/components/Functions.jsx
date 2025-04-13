import React from "react";
import {
  creating,
  edit,
  deleteIcon,
  account,
  data,
  family,
  ai,
} from "../../../assets/img";

const Functions = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-stroke
      px-[8vw] md:px-[8.85vw]
      pt-[8vw] md:pt-[5.83vw]
      pb-[6vw] md:pb-[4.64vw]
      rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw] 
      rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-primary text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] mb-[4vw] md:mb-[2.5vw]">
        Функции приложения
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-[6vw] md:gap-[3vw] w-full">
        <div className="flex flex-col border-[1px] border-primary rounded-[3vw] md:rounded-[1.5vw] xl:rounded-[1vw] w-full md:w-[30vw] xl:w-[22.66vw]">
          <div className="w-full bg-primary text-stroke flex items-center justify-center
            border-[1px] border-primary
            h-[12vw] md:h-[8vw] xl:h-[5.16vw]
            rounded-t-[3vw] md:rounded-t-[1.5vw] xl:rounded-t-[1vw]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]"
          >
            <p className="font-tenor text-center text-[4vw] md:text-[2.5vw] xl:text-[1.2vw]">
              Задачи-мероприятия-пожелания
            </p>
          </div>
          <div className="flex flex-col h-[60vw] md:h-[40vw] xl:h-[25.68vw]">
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw]">Создание</p>
              <img src={creating} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw]">Редактирование</p>
              <img src={edit} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw]">Удаление</p>
              <img src={deleteIcon} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-primary rounded-[3vw] md:rounded-[1.5vw] xl:rounded-[1vw] w-full md:w-[30vw] xl:w-[22.66vw]">
          <div className="w-full bg-primary text-stroke flex items-center justify-center
            border-[1px] border-primary
            h-[12vw] md:h-[8vw] xl:h-[5.16vw]
            rounded-t-[3vw] md:rounded-t-[1.5vw] xl:rounded-t-[1vw]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]"
          >
            <p className="font-tenor text-center text-[4vw] md:text-[2.5vw] xl:text-[1.2vw]">
              Личный кабинет
            </p>
          </div>
          <div className="flex flex-col h-[60vw] md:h-[40vw] xl:h-[25.68vw]">
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw] text-center">
                Создание своего аккаунта
                <br />и выбор роли
              </p>
              <img src={account} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw] text-center">
                Управление личными данными
              </p>
              <img src={data} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw] text-center">
                Добавление пользователей в семью
              </p>
              <img src={family} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-primary rounded-[3vw] md:rounded-[1.5vw] xl:rounded-[1vw] w-full md:w-[30vw] xl:w-[22.66vw]">
          <div className="w-full bg-primary text-stroke flex items-center justify-center
            border-[1px] border-primary
            h-[12vw] md:h-[8vw] xl:h-[5.16vw]
            rounded-t-[3vw] md:rounded-t-[1.5vw] xl:rounded-t-[1vw]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]"
          >
            <p className="font-tenor text-center text-[4vw] md:text-[2.5vw] xl:text-[1.2vw]">
              Семейный ассистент
            </p>
          </div>
          <div className="flex flex-col h-[60vw] md:h-[40vw] xl:h-[25.68vw]">
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw] text-center">
                Подскажет в выборе члена
                <br />
                семьи на определенную
                <br />
                задачу
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-ysabeau text-black text-[3.5vw] md:text-[2.5vw] xl:text-[1.56vw] text-center">
                Адаптируется
                <br />
                под каждого <br />
                из вас
              </p>
              <img src={ai} alt="" className="w-[5vw] md:w-[3vw] xl:w-[1.93vw] mt-[2vw] md:mt-[1vw] xl:mt-[0.52vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
