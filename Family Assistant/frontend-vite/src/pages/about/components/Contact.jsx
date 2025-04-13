import React, { useState, useEffect, useContext } from "react";
import { aboutUs2 } from "../../../assets/img";
import CustomSelect from "./CustomSelect";
import CustomTextArea from "./CustomTextArea";
import { createFeedback } from "../../../http/feedbackApi";
import { Context } from "../../../main";
import { useNavigate } from "react-router-dom";

const options = [
  "Пожелание",
  "Ошибка",
  "Вопрос",
  "Предложение",
  "Другое"
];

const Contact = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");
  const [description, setDescription] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState({
    type: '',
    description: '',
  });

  // Очистка ошибок валидации при изменении полей
  useEffect(() => {
    if (selectedType) {
      setValidationError(prev => ({ ...prev, type: '' }));
    }
  }, [selectedType]);

  useEffect(() => {
    if (description) {
      setValidationError(prev => ({ ...prev, description: '' }));
    }
  }, [description]);

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setValidationError(prev => ({ ...prev, type: '' }));
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
    setValidationError(prev => ({ ...prev, description: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Проверка авторизации
    if (!user.isAuth) {
      setError('Для отправки отзыва необходимо авторизоваться');
      return;
    }

    // Валидация
    const newValidationError = {};
    let hasErrors = false;

    if (!selectedType) {
      newValidationError.type = 'Выберите тип обращения';
      hasErrors = true;
    }
    if (!description) {
      newValidationError.description = 'Введите описание';
      hasErrors = true;
    }

    if (hasErrors) {
      setValidationError(newValidationError);
      return;
    }

    try {
      const response = await createFeedback({
        role: selectedType,
        message: description,
        userId: user.user.id
      });

      setIsSuccess(true);
      setError(null);
      setValidationError({ type: '', description: '' });
      
      setTimeout(() => {
        setSelectedType("");
        setDescription("");
        setIsSuccess(false);
      }, 3000);
      
    } catch (err) {
      console.error('Ошибка:', err);
      // Проверяем, есть ли сообщение об ошибке от сервера
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Произошла ошибка при отправке обратной связи');
      }
      setIsSuccess(false);
    }
  };

  return (
    <div
      className="w-full bg-primary
      px-[4vw] md:px-[6vw] xl:px-[9.9vw]
      pt-[8vw] md:pt-[7vw] xl:pt-[6.25vw]
      pb-[12vw] md:pb-[11vw] xl:pb-[10.4vw]
      rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw]
      rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke 
      text-[5vw] md:text-[3.5vw] xl:text-[2.5vw]
      mb-[5vw] md:mb-[4vw] xl:mb-[3.8vw]">Свяжитесь с нами</h2>
      
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 
        px-[3vw] md:px-[2vw] xl:px-[1.04vw] 
        py-[2vw] md:py-[1.2vw] xl:py-[0.78vw] 
        rounded relative 
        mb-[3vw] md:mb-[2vw] xl:mb-[1.04vw]
        text-[3vw] md:text-[2vw] xl:text-[1vw]">
          Ваш отзыв успешно отправлен!
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 
        px-[3vw] md:px-[2vw] xl:px-[1.04vw] 
        py-[2vw] md:py-[1.2vw] xl:py-[0.78vw] 
        rounded relative 
        mb-[3vw] md:mb-[2vw] xl:mb-[1.04vw]
        text-[3vw] md:text-[2vw] xl:text-[1vw]">
          {error}
          {!user.isAuth && (
            <div className="mt-[1.5vw] md:mt-[1vw] xl:mt-[0.52vw]">
              <button
                onClick={() => navigate('/login')}
                className="text-blue-600 underline hover:text-blue-800
                text-[3vw] md:text-[2vw] xl:text-[1vw]"
              >
                Войти в аккаунт
              </button>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-between bg-stroke
          p-[3vw] md:p-[2vw] xl:p-[1.72vw]
          gap-[3vw] md:gap-[2vw] xl:gap-[1.72vw]
          rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1vw]"
        >
          <img
            src={aboutUs2}
            alt=""
            className="
            h-auto md:h-[35vw] xl:h-[27vw]
            w-[80vw] md:w-[25vw] xl:w-[19.4vw]
            rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[1vw]
            object-contain md:object-cover"
          />
          <div className="flex flex-col items-start justify-start w-full h-full">
            <p className="font-tenor text-black 
              text-[4vw] md:text-[2.5vw] xl:text-[1.56vw]
              mt-[1vw] md:mt-[0.5vw] xl:mt-[0.26vw]">
              Тип обращения
            </p>

            <CustomSelect 
              options={options}
              placeholder="Выберите тип обращения"
              value={selectedType}
              onChange={handleTypeChange}
            />
            {validationError.type && (
              <p className="text-red-500 
              text-[3vw] md:text-[1.5vw] xl:text-[0.73vw] 
              mt-[1vw] md:mt-[0.5vw] xl:mt-[0.26vw]">
                {validationError.type}
              </p>
            )}

            <p className="font-tenor text-black 
              text-[4vw] md:text-[2.5vw] xl:text-[1.56vw]
              mt-[6vw] md:mt-[4vw] xl:mt-[3.4vw]">
              Описание
            </p>

            <CustomTextArea
              placeholder="Напишите свой вопрос/пожелание/проблему"
              value={description}
              onChange={handleDescriptionChange}
            />
            {validationError.description && (
              <p className="text-red-500 
              text-[3vw] md:text-[1.5vw] xl:text-[0.73vw] 
              mt-[1vw] md:mt-[0.5vw] xl:mt-[0.26vw]">
                {validationError.description}
              </p>
            )}

            <div className="w-full flex flex-row items-center justify-end">
              <button 
                type="submit"
                className="text-stroke bg-primary 
                rounded-[1.5vw] md:rounded-[1vw] xl:rounded-[0.62vw]
                font-tenor 
                text-[4vw] md:text-[2.5vw] xl:text-[1.56vw]
                mt-[4vw] md:mt-[2.5vw] xl:mt-[1.77vw]
                py-[3vw] md:py-[2vw] xl:py-[1.15vw]
                px-[8vw] md:px-[6vw] xl:px-[4.8vw]
                w-full md:w-auto"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
