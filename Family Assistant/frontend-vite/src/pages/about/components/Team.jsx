import React from "react";
import { aboutUs0, aboutUs1 } from "../../../assets/img";

const Team = () => {
  return (
    <div
      className="w-full bg-stroke
    py-[5.2vw]
    px-[7.8vw]
    rounded-bl-[7.5vw] 
    rounded-br-[7.5vw] "
    >
      <h2
        className="font-ysabeau text-primary
     text-[2.5vw]"
      >
        О нас
      </h2>
      <div
        className="flex flex-row items-center justify-center
      gap-[1.45vw]
      mb-[5.2vw]"
      >
        <p
          className="font-ysabeau text-black
          text-[1.5vw]
          max-w-[45.6vw]"
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
        w-[37vw]
        rounded-[1vw]
        "
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={aboutUs1}
          alt=""
          className="
        w-[59vw]
        rounded-[1vw]
        "
        />
        <p
          className="font-ysabeau text-black font-semibold flex flex-col items-center justify-center
          text-center
        text-[2vw]
        max-w-[59vw]"
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
