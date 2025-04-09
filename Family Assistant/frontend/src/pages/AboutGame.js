import React, { useContext, useEffect, useRef, useState } from 'react';
import '../assets/AboutApplication.css';
import about1 from "../assets//О нас 1.jpg";
import about2 from "../assets//О нас 2.jpg";
import about3 from "../assets//О нас 3.jpg";
import { Context } from '../index';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import '../assets/AboutApp.css';

const AboutApplication = () => {
    const { user } = useContext(Context);
    const [accordionState, setAccordionState] = useState({
        question1: false,
        question2: false,
        question3: false,
      });
    
      const toggleAccordion = (question) => {
        setAccordionState((prevState) => ({
          ...prevState,
          [question]: !prevState[question],
        }));
      };
      const aboutRef = useRef(null);
      const location = useLocation();
    
      useEffect(() => {
        if (location.hash === '#feedback' && aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [location.hash]);

      const [isSuccess, setIsSuccess] = useState(false);
      const [validationError, setValidationError] = useState({
        role: '',
        message: '',
      });
      const [error, setError] = useState(null);

      const [formData, setFormData] = useState({
        role: '',
        message: '',
      });
      
      const validatePhoneNumber = (phone) => {
        const phoneRegex = /^(\+7|8)[0-9]{10}$/;
        return phoneRegex.test(phone);
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === 'phone') {
          if (!validatePhoneNumber(value)) {
            setValidationError((prevErrors) => ({
              ...prevErrors,
              phone: 'Некорректный номер телефона',
            }));
          } else {
            setValidationError((prevErrors) => ({
              ...prevErrors,
              phone: '',
            }));
          }
        }
      
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        let hasErrors = false;
        const newValidationError = {};
    
        Object.keys(formData).forEach((key) => {
          if (!formData[key]) {
            newValidationError[key] = 'Это поле обязательно для заполнения';
            hasErrors = true;
          }
        });
    
        if (hasErrors) {
          setValidationError(newValidationError);
          return;
        }
    
        try {
          const response = await fetch('http://localhost:5000/api/feedback/about', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, userId: user.user.id }),
          });
    
          if (response.ok) {
            console.log('Feedback submitted successfully');
  
            setIsSuccess(true);
            setError(null);

    
            setTimeout(() => {
              setFormData({
                phone: '',
                role: '',
                message: '',
              });
              setIsSuccess(false);
            }, 3000);
          } else {
            const data = await response.json();
            console.error('Ошибка при отправке!!!', data.error);
            setError(data.error); 
          }
        } catch (error) {
          console.error('Ошибка:', error);
          setError('Произошла ошибка при отправке обратной связи');
        }
      };
      


    return (
      <>
      <div>
      <div className="about-section" >
        <div className="container mt-4">
      <h1 className="mb-4">О нас</h1>
      <div className="about-block">
      <div className="about-text">
        <p>
          Мы — команда технологических энтузиастов в области разработки мобильных приложений, 
          объединившиеся с одной целью: сделать управление семейными задачами проще и приятнее. 
          Наша компания видит своей миссией создание умных решений для повседневных задач, которые 
          помогают семьям находить баланс между работой, личной жизнью и совместным временем.
        </p>
        <p>
          В нашей команде работают профессионалы из самых разных сфер: разработчики программного обеспечения, 
          специалисты по искусственному интеллекту, дизайнеры, а также родители и семейные консультанты. 
          Мы сами знаем, как важно, чтобы каждый день проходил гармонично, и вложили этот опыт в создание приложения.
        </p>
      </div>
      <div className="about-image">
        <img 
          src={about1} 
          alt="Teamwork" 
        />
      </div>
    </div>
    
    <div className="centered-block">
      <div className="image-container">
        <img
          src={about2}
          alt="Team at work"
          className="centered-image"
        />
      </div>
      <div className="text-container">
        <p>
          Мы гордимся тем, что делаем, и каждый день стремимся улучшить наш продукт, чтобы он становился ещё умнее и удобнее. Мы создаём технологии, которые работают на ваше благополучие.
        </p>
      </div>
    </div>
    </div>
    </div>
    
      <p style={{textAlign:'center', paddingTop: '40px', color: '#778899', fontSize: '46px', fontWeight: 'bold'}}>Свяжитесь с нами</p>
      <div ref={aboutRef} className="container mt-5 mb-5">
  <div className="row justify-content-center align-items-center bg-light p-4 shadow rounded">
    {/* Левый блок с картинкой */}
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <img
        src={about3}
        alt="Обратная связь"
        className="img-fluid rounded"
        style={{ maxHeight: '600px' }}
      />
    </div>

    {/* Правый блок с формой */}
    <div className="col-md-8">
  <div className="card p-4 border-0 shadow-sm rounded">
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      {/* Тип обращения */}
      <div className="mb-4">
        <label className="form-label fw-bold text-secondary">
          Тип обращения:
          <select
            className={`form-control custom-select ${validationError.role && 'is-invalid'}`}
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ padding: '10px', border: '1px solid #ced4da', borderRadius: '8px', backgroundColor: '#f8f9fa' }}
          >
            <option value="">Выберите тип обращения</option>
            <option value="Пожелание">Пожелание</option>
            <option value="Ошибка">Ошибка</option>
            <option value="Вопрос">Вопрос</option>
            <option value="Предложение">Предложение</option>
            <option value="Другое">Другое</option>
          </select>
          {validationError.role && (
            <div className="invalid-feedback">{validationError.role}</div>
          )}
        </label>
      </div>

      {/* Описание */}
      <div className="mb-4">
        <label className="form-label fw-bold text-secondary">
          Описание:
          <textarea
            className={`form-control custom-textarea ${validationError.message && 'is-invalid'}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Напишите свой вопрос/пожелание/проблему..."
            rows="5"
            style={{
              padding: '12px',
              border: '1px solid #ced4da',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              fontSize: '14px',
            }}
          />
          {validationError.message && (
            <div className="invalid-feedback">{validationError.message}</div>
          )}
        </label>
      </div>

      {/* Кнопка отправки */}
      <button
        type="submit"
        className="btn btn-primary w-100 py-2 fw-bold"
        style={{
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Отправить
      </button>
    </form>
  </div>
</div>
  </div>

  {/* Сообщения об успехе/ошибке */}
  {isSuccess && (
    <div className="alert alert-success mt-3" role="alert">
      Ваш отзыв успешно отправлен!
    </div>
  )}
  {error && (
    <div className="alert alert-danger mt-3" role="alert">
      {error}
    </div>
  )}
</div>
    <ScrollToTop />
    </div>
    <Footer />
    </>
    );
};

export default AboutApplication;