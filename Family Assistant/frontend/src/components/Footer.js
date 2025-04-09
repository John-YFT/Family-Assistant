import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/Footer.css';

const Footer = () => {
  const [isHoveredEmail, setHoveredEmail] = useState(false);
  const [isHoveredPhone, setHoveredPhone] = useState(false);
  const [isHoveredAbout, setHoveredAbout] = useState(false);
  const [isHoveredTech, setHoveredTech] = useState(false);
  const phoneNumber = '+7 (951) 155-55-44';
  const email = 'family_assistant@yandex.ru';
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const linkStyle = {
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  const hoverStyle = {
    color: '#00FFFF',
  };
    return (
      <footer className="text-light py-3"  style={{ backgroundColor: '#FAF0E6', bottom: '0', width: '100%' }}>
      <div style={{ flex: '1' }}></div>
      <Container>
        <Row>
          <Col xs={12} md={6} className="d-flex flex-column align-items-start">
            <p className="mt-3" style={{color: 'black', fontWeight: 'bold', fontSize: 26}}>Family Assistant</p>
            <p className="mb-0 gradient-text"  style={{color: '#DA70D6', fontWeight: 'bold', fontSize: 20}}>Вместе делаем жизнь проще</p>
          
          </Col>
          <Col xs={12} md={6}>
            <h3 className='mb-3' style={{ color: 'black' }}>Контакты:</h3>
            <p style={{fontSize: '20px', color: 'black'}}>
              Email:{' '}
              <span
                  onClick={handleEmailClick}
                  style={{ ...linkStyle, ...(isHoveredEmail && hoverStyle), fontSize: '20px' }}
                  onMouseEnter={() => setHoveredEmail(true)}
                  onMouseLeave={() => setHoveredEmail(false)}
              >
                {email}
              </span>
            </p>
            <p style={{fontSize: '20px', color: 'black'}}>
              Телефон:{' '}
              <span
                  onClick={handlePhoneClick}
                  style={{ ...linkStyle, ...(isHoveredPhone && hoverStyle), fontSize: '20px' }}
                  onMouseEnter={() => setHoveredPhone(true)}
                  onMouseLeave={() => setHoveredPhone(false)}
              >
                {phoneNumber}
              </span>
            </p>
            <Link to="/about-app" className="text-light" style={{ textDecoration: 'none' }}>
            <p style={{ ...linkStyle, ...(isHoveredAbout && hoverStyle), fontSize: '20px', color: 'black' }}
               onMouseEnter={() => setHoveredAbout(true)}
               onMouseLeave={() => setHoveredAbout(false)}
              >
                О нас
            </p>
            </Link>
            <Link to="/about-product" className="text-light" style={{ textDecoration: 'none' }}>
            <p style={{ ...linkStyle, ...(isHoveredTech && hoverStyle), fontSize: '20px', color: 'black'}}
               onMouseEnter={() => setHoveredTech(true)}
               onMouseLeave={() => setHoveredTech(false)}
              >
                О продукте
            </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;