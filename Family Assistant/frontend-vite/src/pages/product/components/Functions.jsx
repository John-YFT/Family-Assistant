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
      px-[8.07vw]
      pt-[5.83vw]
      pb-[6.87vw]
      rounded-bl-[7.5vw] 
      rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-primary text-[2.5vw]">
        Функции приложения
      </h2>

      <div className="flex flex-row items-start justify-between mt-[4.37vw] gap-[5.21vw]">
        <div className="flex flex-col border-[1px] border-primary rounded-[1.04vw] w-[22.66vw]">
          <div className="w-full bg-primary text-stroke flex items-center justify-center
            border-[1px] border-primary
            h-[5.16vw]
            rounded-t-[0.89vw]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]"
          >
            <p className="font-tenor text-center text-[1.2vw]">
              Задачи-мероприятия-пожелания
            </p>
          </div>
          <div className="flex flex-col h-[25.68vw]">
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[1.56vw]">Создание</p>
              <img src={creating} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[1.56vw]">Редактирование</p>
              <img src={edit} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-ysabeau text-black text-[1.56vw]">Удаление</p>
              <img src={deleteIcon} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-primary rounded-[1.04vw] w-[22.66vw]">
          <div className="w-full bg-primary text-stroke flex items-center justify-center
            border-[1px] border-primary
            h-[5.16vw]
            rounded-t-[0.89vw]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]"
          >
            <p className="font-tenor text-center text-[1.2vw]">
              Личный кабинет
            </p>
          </div>
          <div className="flex flex-col h-[25.68vw]">
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[1.56vw] text-center">
                Создание своего аккаунта
                <br />и выбор роли
              </p>
              <img src={account} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[1.56vw] text-center">
                Управление личными данными
              </p>
              <img src={data} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-ysabeau text-black text-[1.56vw] text-center">
                Добавление пользователей в семью
              </p>
              <img src={family} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-primary rounded-[1.04vw] w-[22.66vw]">
          <div className="w-full bg-primary text-stroke flex items-center justify-center
            border-[1px] border-primary
            h-[5.16vw]
            rounded-t-[0.89vw]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]"
          >
            <p className="font-tenor text-center text-[1.2vw]">
              Семейный ассистент
            </p>
          </div>
          <div className="flex flex-col h-[25.68vw]">
            <div className="flex-1 flex flex-col items-center justify-center border-b-[1px] border-primary">
              <p className="font-ysabeau text-black text-[1.56vw] text-center">
                Подскажет в выборе члена
                <br />
                семьи на определенную
                <br />
                задачу
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-ysabeau text-black text-[1.56vw] text-center">
                Адаптируется
                <br />
                под каждого <br />
                из вас
              </p>
              <img src={ai} alt="" className="w-[1.93vw] mt-[0.52vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
