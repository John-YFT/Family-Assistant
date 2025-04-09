import React, { useState } from 'react';
import img1 from '../assets/Главная2.jpg'
import '../assets/AboutApplication.css';
import '../assets/Main.css';
import ScrollToTop from '../components/ScrollToTop';
import DonloadModal from '../components/DonloadModal';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const history = useNavigate();
  const handleAboutApp = () => {
    history("/about-app");
  };
  const handleAboutTeam = () => {
    history("/about-product");
  };
      return (
        <div>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Мобильное приложение,<br /> которое изменит вашу<br /> семейную жизнь</h1>
            <div className="hero-buttons">
              <button className="hero-button" onClick={handleAboutApp}>О приложении</button>
              <button className="hero-button" onClick={handleAboutTeam}>Про команду</button>
            </div>
          </div>
        </div>
    <div className="info-block">
    <div className="info-block-image">
    <img src={img1} alt="Family Assistant" />
  </div>
    <div className="info-block-content">
      <h1>Family Assistant</h1>
      <h2>Описание</h2>
      <p>
        Данное приложение поможет вам в управлении семейными задачами. Здесь
        вам поможет наш помощник, который подскажет, кто из вашей семьи лучше
        всего подходит для выполнения этой задачи. Вы можете назначить
        мероприятие и указать, кто пойдет на данное мероприятие, и сразу же
        сообщить вашим членам семьи о предстоящем.
      </p>
      <p>
        Кроме прочего, вы можете создать wish-list с пожеланиями на любой
        праздник.
      </p>
      <p style={{textAlign: 'right', fontWeight:'bold'}}>Для Android</p>
      <button className="download-button"
        onClick={handleShow}>Скачать</button>
        <DonloadModal showModal={showModal} handleClose={handleClose} />
    </div>
  </div>

        <ScrollToTop />
        <Footer />
        </div>
      );
    };



export default Main;