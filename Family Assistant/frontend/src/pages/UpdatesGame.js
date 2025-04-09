import React, { useEffect, useState } from 'react';
import { fetchUpdates } from '../http/deviceApi';
import { Button, Card, Col, Container, Modal, Row, Spinner, Table } from 'react-bootstrap';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../assets/UpdatesPage.css';
import Create from '../assets/Создание.png';
import Redact from '../assets/Редактирование.png';
import Delete from '../assets/Удаление.png';
import Account from '../assets/Аккаунт.png';
import Data from '../assets/Данные.png';
import Family from '../assets/Семья.png';
import Ai from '../assets/AI.png';
import Glavn from '../assets/О продукте.png';
import '../assets/AboutProd.css';
import DonloadModal from '../components/DonloadModal';
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; 
import axios from "axios";

const FixedBugs = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [updates, setUpdates] = useState([]);
    const history = useNavigate();
    const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStats, setDownloadStats] = useState([]);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  const handleDownload = async () => {
    setIsDownloading(true);

    setTimeout(async () => {
      setIsDownloading(false);
      setShowRatingModal(true);

      try {
        const today = new Date().toISOString().split("T")[0];

        // Отправляем запрос на сервер для обновления статистики
        await axios.post("http://localhost:5000/api/dowloadCount/incr-download", { date: today });

        // Запрашиваем обновленные данные после скачивания
        const updatedData = await axios.get("http://localhost:5000/api/dowloadCount/get-downloadcount");
        setDownloadStats(updatedData.data);
      } catch (error) {
        console.error("Ошибка при обновлении скачиваний:", error);
      }
    }, 5000);
  };

    const handleClick = () => {
      history("/about-game#feedback");
    };
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const downloadResponse = await axios.get("http://localhost:5000/api/dowloadCount/get-downloadcount");
          setDownloadStats(downloadResponse.data);
  
          const ratingResponse = await axios.get("http://localhost:5000/api/ratings/get-average-rating");
          setAverageRating(ratingResponse.data.average);
        } catch (error) {
          console.error("Ошибка при загрузке данных:", error);
        }
      };
  
      fetchData();
    }, []);

    const submitRating = async () => {
      if (!selectedRating) return;
  
      try {
        await axios.post("http://localhost:5000/api/ratings/submit-rating", { rating: selectedRating });
  
        const ratingResponse = await axios.get("http://localhost:5000/api/ratings/get-average-rating");
        setAverageRating(ratingResponse.data.average);
      } catch (error) {
        console.error("Ошибка при отправке оценки:", error);
      }
  
      setShowRatingModal(false);
    };
  

    useEffect(() => {
        fetchUpdates(setUpdates);
      }, []);
      
    return (
      <>
      <div className="about-section1">
      <div className="container mt-5">
      {/* Заголовок */}
      <h2 className="text-center fw-bold mb-4" style={{fontSize: '46px'}}>Функции приложения</h2>

      {/* Основной блок с функциями */}
      <div className="row">
        {/* Блок "Задачи-мероприятия-пожелания" */}
        <div className="col-md-4">
          <div className="feature-card p-3 shadow-sm rounded text-center">
            <h5 className="fw-bold">Задачи-мероприятия-пожелания</h5>
            <div className="feature-icons mt-3">
              <div>
                <img src={Create} alt="Создание" />
                <p>Создание</p>
              </div>
              <div>
                <img src={Redact} alt="Редактирование" />
                <p>Редактирование</p>
              </div>
              <div>
                <img src={Delete} alt="Удаление" />
                <p>Удаление</p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок "Личный кабинет" */}
        <div className="col-md-4">
          <div className="feature-card p-3 shadow-sm rounded text-center">
            <h5 className="fw-bold">Личный кабинет</h5>
            <div className="feature-icons mt-3">
              <div>
                <img src={Account} alt="Аккаунт" />
                <p>Создание своего аккаунта и выбор роли</p>
              </div>
              <div>
                <img src={Data} alt="Данные" />
                <p>Управление личными данными</p>
              </div>
              <div>
                <img src={Family} alt="Семья" />
                <p>Добавление пользователей в семью</p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок "Семейный ассистент" */}
        <div className="col-md-4">
          <div className="feature-card p-3 shadow-sm rounded text-center">
            <h5 className="fw-bold">Семейный ассистент</h5>
            <div className="feature-icons mt-3">
              <ul className="list-unstyled">
                <li>- Подскажет в выборе члена семьи на определенную задачу</li>
                <li>- Адаптируется под каждого из вас</li>
              </ul>
              <img src={Ai} alt="AI" />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
       {/* Плюсы приложения */}
       <div className="mt-3">
       <h4
         className="text-center fw-bold mb-3"
         style={{ color: '#008080' }}
       >
         Плюсы нашего приложения, от которых сложно отказаться
       </h4>
       <ul className="custom-list mx-auto">
         <li>
           <strong>Удобство и интуитивность</strong> – Наше приложение простое, понятное и легкое для всех возрастов.
         </li>
         <li>
           <strong>Функциональность и гибкость для взрослых пользователей</strong> – Наша команда тщательно продумывала каждую функцию, чтобы вам было удобно.
         </li>
         <li>
           <strong>Простая навигация</strong>
         </li>
         <li>
           <strong>Безопасность и ограниченные функции для детей</strong> – Ваши маленькие домочадцы не смогут сломать ваш график, случайно куда-то нажав.
         </li>
         <li>
           <strong>Адаптивность</strong>
         </li>
         <li>
           <strong>Уведомления и напоминания</strong> – Мы всегда будем держать вас в курсе всего, что происходит в вашей семье.
         </li>
       </ul>
     </div>

     <div className="features-section py-5" style={{ backgroundColor: "#f9f5f1" }}>
      <h4 className="text-center fw-bold mb-4" style={{ color: "#000", fontSize: '30px'}}>
        Подробнее о главном
      </h4>
      <div className="container">
        <div className="row text-center">
          {/* Задачи */}
          <div className="col-md-4">
            <div className="feature-card2 p-3 h-100 shadow-sm">
              <h3 className="fw-bold mb-4">Задачи</h3>
              <ul className="list-unstyled">
                <li>Название</li>
                <li>От кого</li>
                <li>Кому</li>
                <li>Статус задачи</li>
                <li>Категория</li>
                <li>Сложность</li>
              </ul>
            </div>
          </div>
          {/* Мероприятия */}
          <div className="col-md-4">
            <div className="feature-card2 p-3 h-100 shadow-sm">
              <h3 className="fw-bold mb-4">Мероприятия</h3>
              <ul className="list-unstyled">
                <li>Название</li>
                <li>От кого</li>
                <li>Кому</li>
                <li>Статус</li>
                <li>Дата и время</li>
                <li>Комментарий</li>
              </ul>
            </div>
          </div>
          {/* Пожелания */}
          <div className="col-md-4">
            <div className="feature-card2 p-3 h-100 shadow-sm">
              <h3 className="fw-bold mb-4">Пожелания</h3>
              <ul className="list-unstyled">
                <li>Название</li>
                <li>Описание</li>
                <li>Праздник</li>
                <li>Статус</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Требования */}
      <div className="requirements-section mt-5 mb-4 text-center py-4 px-3" style={{ backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
      <h5 className="fw-bold mb-3" style={{ color: "#4a4a4a" }}>Требования к вашему устройству</h5>
      <p style={{ fontSize: "16px", color: "#6c757d" }}>
        Приложение работает только на устройствах с операционной системой Android.
      </p>
      <ul className="list-unstyled text-start d-inline-block" style={{ maxWidth: "400px" }}>
        <li className="mb-2">
          <i className="bi bi-android2" style={{ color: "#008080", marginRight: "8px" }}></i>
          🔹 Операционная система: Android версии 6.0 и выше
        </li>
        <li className="mb-2">
          <i className="bi bi-memory" style={{ color: "#008080", marginRight: "8px" }}></i>
          🔹 Оперативная память (ОЗУ): от 3 ГБ
        </li>
        <li className="mb-2">
          <i className="bi bi-wifi" style={{ color: "#008080", marginRight: "8px" }}></i>
          🔹 Сетевые требования: Поддержка 4G, а также Wi-Fi для стабильной работы
        </li>
        <li>
          <i className="bi bi-hdd" style={{ color: "#008080", marginRight: "8px" }}></i>
          🔹 Встроенная память: от 16 ГБ
        </li>
      </ul>
      <Button
        className="custom-download-btn"
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <>
            <Spinner as="span" animation="border" size="sm" role="status" />
            {"  "}Загрузка...
          </>
        ) : (
          'Скачать приложение "Family Assistant"'
        )}
      </Button>
          {/* Средний рейтинг */}
    <div className="rating-display">
    <h5 className="rating-text">Средняя оценка приложения:</h5>
    <div className="rating-number">{averageRating}</div>
    <div className="rating-stars">
      {"★".repeat(Math.round(averageRating))}{"☆".repeat(5 - Math.round(averageRating))}
    </div>
  </div>
        {/* График скачиваний по дням */}
      <div className="chart-container">
      <h5>Статистика скачиваний по дням</h5>
      <Bar
        data={{
          labels: downloadStats.map((entry) => entry.date.split("T")[0]),
          datasets: [
            {
              label: "Скачивания",
              data: downloadStats.map((entry) => entry.kolvo),
              backgroundColor: "rgba(45, 212, 212, 0.7)",
              borderColor: "#008080",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, stepSize: 1 },
          },
        }}
      />
    </div>

      {/* Модальное окно для оценки */}
      <Modal show={showRatingModal} onHide={() => setShowRatingModal(false)} centered>
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>Оцените приложение</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <p className="text-center">Как вам приложение? Выберите оценку:</p>
          <div className="rating-buttons">
            {[1, 2, 3, 4, 5].map((num) => (
              <Button
                key={num}
                className={`rating-star ${selectedRating === num ? "selected" : ""}`}
                onClick={() => setSelectedRating(num)}
              >
                {num} ★
              </Button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="success" onClick={submitRating} disabled={!selectedRating}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    
            
      <ScrollToTop />
  <Footer />
  </>
    );
};

export default FixedBugs;