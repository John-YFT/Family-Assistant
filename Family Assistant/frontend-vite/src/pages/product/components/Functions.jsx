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
  px-[155px]
  pt-[112px]
  pb-[132px]
  rounded-bl-[7.5vw] 
  rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-primary text-[48px]">
        Функции приложения
      </h2>

      <div
        className="flex flex-row items-center justify-between
      mt-[84px]
      gap-[100px]"
      >
        <div
          className="flex flex-col items-start justify-start
          border-primary border-[1px]
        w-[435px]  rounded-[20px]"
        >
          <div
            className="w-full flex flex-row items-center justify-center bg-primary border-primary border-[1px]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]
            h-[100px] rounded-[20px]"
          >
            <p className="font-tenor text-stroke text-[23px]">
              Задачи-мероприятия-пожелания
            </p>
          </div>

          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[165px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px]">Создание</p>
            <img src={creating} alt="" className="w-[37px] mt-[10px]" />
          </div>
          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[164px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px]">
              Редактирование
            </p>
            <img src={edit} alt="" className="w-[37px] mt-[10px]" />
          </div>
          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[164px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px]">Удаление</p>
            <img src={deleteIcon} alt="" className="w-[37px] mt-[10px]" />
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-start border-primary border-[1px]
        w-[435px]  rounded-[20px]"
        >
          <div
            className="w-full flex flex-row items-center justify-center bg-primary border-primary border-[1px]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]
            h-[100px] rounded-[20px]"
          >
            <p className="font-tenor text-stroke text-[23px]">Личный кабинет</p>
          </div>

          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[165px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px] text-center">
              Создание своего аккаунта
              <br />и выбор роли
            </p>
            <img src={account} alt="" className="w-[37px] mt-[10px]" />
          </div>
          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[164px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px] text-center">
              Управление личными данными
            </p>
            <img src={data} alt="" className="w-[37px] mt-[10px]" />
          </div>
          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[164px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px] text-center">
              Добавление пользователей в семью
            </p>
            <img src={family} alt="" className="w-[37px] mt-[10px]" />
          </div>
        </div>
        <div
          className="flex flex-col items-start justify-start border-primary border-[1px]
        w-[435px]  rounded-[20px]"
        >
          <div
            className="w-full flex flex-row items-center justify-center bg-primary border-stroke border-[1px]
            shadow-[0_0.21vw_0.21vw_0_rgba(0,0,0,0.25)]
            h-[100px] rounded-[20px]"
          >
            <p className="font-tenor text-stroke text-[23px]">
              Семейный ассистент
            </p>
          </div>

          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[246px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px] text-center">
              Подскажет в выборе члена
              <br />
              семьи на определенную
              <br />
              задачу
            </p>
          </div>
          <div
            className="w-full flex flex-col items-center justify-center border-primary 
            border-b-[1px]
            h-[247px]
            rounded-[20px]"
          >
            <p className="font-ysabeau text-black text-[30px] text-center">
              Адаптируется
              <br />
              под каждого <br />
              из вас
            </p>
            <img src={ai} alt="" className="w-[37px] mt-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
