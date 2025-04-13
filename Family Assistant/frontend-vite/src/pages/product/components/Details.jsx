import React from "react";
const Details = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-primary
      border-b-[1px]
      px-[8vw] md:px-[8.85vw]
      pt-[8vw] md:pt-[5.83vw]
      pb-[6vw] md:pb-[4.64vw]
      rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw] 
      rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke text-[5vw] md:text-[3.5vw] xl:text-[2.5vw] mb-[4vw] md:mb-[2.5vw]">
        Подробности о функциях
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between gap-[6vw] md:gap-[3vw] w-full">
        <div className="flex flex-col border-[1px] border-stroke rounded-[3vw] md:rounded-[1.5vw] xl:rounded-[1vw] w-full md:w-[30vw] xl:w-[23.96vw]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[12vw] md:h-[8vw] xl:h-[5.16vw]
            rounded-t-[3vw] md:rounded-t-[1.5vw] xl:rounded-t-[1vw]"
          >
            <p className="font-tenor text-center text-[4vw] md:text-[2.5vw] xl:text-[1.82vw]">
              Задачи
            </p>
          </div>
          <div className="flex flex-col h-[60vw] md:h-[40vw] xl:h-[26vw]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                От кого
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Кому
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Статус задачи
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Категория
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Сложность
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-stroke rounded-[3vw] md:rounded-[1.5vw] xl:rounded-[1vw] w-full md:w-[30vw] xl:w-[23.96vw]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[12vw] md:h-[8vw] xl:h-[5.16vw]
            rounded-t-[3vw] md:rounded-t-[1.5vw] xl:rounded-t-[1vw]"
          >
            <p className="font-tenor text-center text-[4vw] md:text-[2.5vw] xl:text-[1.82vw]">
              Мероприятия
            </p>
          </div>
          <div className="flex flex-col h-[60vw] md:h-[40vw] xl:h-[26vw]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                От кого
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Кому
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Статус
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Дата и время
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Комментарий
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-[1px] border-stroke rounded-[3vw] md:rounded-[1.5vw] xl:rounded-[1vw] w-full md:w-[30vw] xl:w-[23.96vw]">
          <div className="w-full bg-stroke text-primary flex items-center justify-center
            border-b-[1px] border-stroke 
            h-[12vw] md:h-[8vw] xl:h-[5.16vw]
            rounded-t-[3vw] md:rounded-t-[1.5vw] xl:rounded-t-[1vw]"
          >
            <p className="font-tenor text-center text-[4vw] md:text-[2.5vw] xl:text-[1.82vw]">
              Пожелания
            </p>
          </div>
          <div className="flex flex-col h-[60vw] md:h-[40vw] xl:h-[26vw]">
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Название
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Описание
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center border-b-[1px] border-stroke">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
                Праздник
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="font-tenor text-stroke text-center text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">
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
