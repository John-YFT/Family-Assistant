import React from "react";
const Details = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-primary
      border-b-[1px]
      px-[7.81vw]
      pt-[4.58vw]
      pb-[6.35vw]
      rounded-bl-[7.5vw] 
      rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke text-[2.5vw] mb-[4.53vw]">
        Плюсы нашего приложения, от которых сложно отказаться
      </h2>

      <div className="flex flex-row items-start justify-between gap-[6.15vw]">
        <div className="flex flex-col border-[1px] border-stroke rounded-[1.04vw] w-[23.96vw]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[5.16vw]
            rounded-t-[1.04vw]"
          >
            <p className="font-tenor text-center text-[1.82vw]">
              Задачи
            </p>
          </div>
          <div className="flex flex-col h-[26vw]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                От кого
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Кому
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Статус задачи
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Категория
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Сложность
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-stroke rounded-[1.04vw] w-[23.96vw]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[5.16vw]
            rounded-t-[1.04vw]"
          >
            <p className="font-tenor text-center text-[1.82vw]">
              Мероприятия
            </p>
          </div>
          <div className="flex flex-col h-[26vw]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                От кого
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Кому
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Статус
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Дата и время
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Комментарий
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-stroke rounded-[1.04vw] w-[23.96vw]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[5.16vw]
            rounded-t-[1.04vw]"
          >
            <p className="font-tenor text-center text-[1.82vw]">
              Пожелания
            </p>
          </div>
          <div className="flex flex-col h-[26vw]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Описание
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Праздник
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[1.82vw]">
                Статус
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
