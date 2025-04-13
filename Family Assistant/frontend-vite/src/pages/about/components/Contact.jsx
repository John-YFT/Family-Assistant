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
    px-[9.9vw]
    pt-[6.25vw]
    pb-[10.4vw]
    rounded-bl-[7.5vw] 
    rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-stroke 
      text-[2.5vw]
      mb-[3.8vw]">Свяжитесь с нами</h2>
      
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          Ваш отзыв успешно отправлен!
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
          {!user.isAuth && (
            <div className="mt-2">
              <button
                onClick={() => navigate('/login')}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Войти в аккаунт
              </button>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit}>
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
              value={selectedType}
              onChange={handleTypeChange}
            />
            {validationError.type && (
              <p className="text-red-500 text-sm mt-1">{validationError.type}</p>
            )}

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
              onChange={handleDescriptionChange}
            />
            {validationError.description && (
              <p className="text-red-500 text-sm mt-1">{validationError.description}</p>
            )}

            <div className="w-full flex flex-row items-center justify-end">
              <button 
                type="submit"
                className="text-stroke bg-primary rounded-[0.62vw]
                font-tenor text-[1.56vw]
                mt-[1.77vw]
                py-[1.15vw]
                px-[4.8vw]"
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
