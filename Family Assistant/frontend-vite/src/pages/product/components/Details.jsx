import React from "react";
const Details = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-primary
      border-b-[1px]
      px-[150px]
      pt-[88px]
      pb-[122px]
      rounded-bl-[7.5vw] 
      rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke text-[48px] mb-[87px]">
        Плюсы нашего приложения, от которых сложно отказаться
      </h2>

      <div className="flex flex-row items-start justify-between gap-[118px]">
        <div className="flex flex-col border-[1px] border-stroke rounded-[20px] w-[460px]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[99px]
            rounded-t-[20px]"
          >
            <p className="font-tenor text-center text-[35px]">
              Задачи
            </p>
          </div>
          <div className="flex flex-col h-[499px]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                От кого
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Кому
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Статус задачи
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Категория
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Сложность
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-stroke rounded-[20px] w-[460px]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[99px]
            rounded-t-[20px]"
          >
            <p className="font-tenor text-center text-[35px]">
              Мероприятия
            </p>
          </div>
          <div className="flex flex-col h-[499px]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                От кого
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Кому
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Статус
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Дата и время
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Комментарий
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-stroke rounded-[20px] w-[460px]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[99px]
            rounded-t-[20px]"
          >
            <p className="font-tenor text-center text-[35px]">
              Пожелания
            </p>
          </div>
          <div className="flex flex-col h-[499px]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Описание
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[35px]">
                Праздник
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[35px]">
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
