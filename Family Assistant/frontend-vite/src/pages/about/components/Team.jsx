import React from "react";
import { aboutUs0, aboutUs1 } from "../../../assets/img";

const Team = () => {
  return (
    <div
      className="w-full bg-stroke
      py-[8vw] md:py-[6vw] xl:py-[5.2vw]
      px-[4vw] md:px-[6vw] xl:px-[7.8vw]
      rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw]
      rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]"
    >
      <h2
        className="font-ysabeau text-primary
        text-[5vw] md:text-[3.5vw] xl:text-[2.5vw]"
      >
        О нас
      </h2>
      <div
        className="flex flex-col md:flex-row items-center justify-center
        gap-[3vw] md:gap-[2vw] xl:gap-[1.45vw]
        mb-[8vw] md:mb-[6vw] xl:mb-[5.2vw]"
      >
        <p
          className="font-ysabeau text-black
          text-[3.5vw] md:text-[2vw] xl:text-[1.5vw]
          max-w-full md:max-w-[50vw] xl:max-w-[45.6vw]
          order-2 md:order-1"
        >
          Мы - команда технологических энтузиастов в областиразработки мобильных
          приложений, объединившиеся содной целью сделать управление семейными
          задачамипроще и приятнее. Наша компания видит своеймиссией создание
          умных решений для повседневныхзадач, которые помогают семьям находить
          балансмежду работой, личной жизнью и совместнымвременем.
          <br />В нашей команде работают профессионалы из самыхразных сфер:
          разработчики программного обеспечения.специалисты по искусственному
          интеллекту, дизайнеры, а также родители и семейные консультанты. Мы
          сами знаем, как важно, чтобы каждый день проходил гармонично, и
          вложили этот опыт в создание приложения.
        </p>
        <img
          src={aboutUs0}
          alt=""
          className="
          w-[90vw] md:w-[45vw] xl:w-[37vw]
          rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1vw]
          order-1 md:order-2"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={aboutUs1}
          alt=""
          className="
          w-[90vw] md:w-[70vw] xl:w-[59vw]
          rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1vw]"
        />
        <p
          className="font-ysabeau text-black font-semibold flex flex-col items-center justify-center
          text-center
          text-[4vw] md:text-[3vw] xl:text-[2vw]
          max-w-[90vw] md:max-w-[70vw] xl:max-w-[59vw]
          mt-[4vw] md:mt-[3vw] xl:mt-[2vw]"
        >
          Мы гордимся тем, что делаем, и каждый день стремимся улучшить наш
          продукт, чтобы он становился еще умнее и удобнее. Мы создаем
          технологии, которые работают на ваше благополучие.
        </p>
      </div>
    </div>
  );
};

export default Team;
