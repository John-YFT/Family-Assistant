import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import bigstar from "../assets/звезда2.png";

const StarRating = ({ rating, onRatingChange }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);
    
  
    const handleRatingChange = () => {
      onRatingChange(selectedRating);
      setShowModal(false);
    };

    const getGradient = () => {
        // Определяем размер градиента на основе рейтинга
        const gradientSize = (rating / 5) * 100;
        return `linear-gradient(90deg, orange ${gradientSize}%, transparent ${gradientSize}%)`;
      };
    return (
        <>
       <div
        style={{
          cursor: "pointer",
          width: 240,
          height: 240,
          fontSize: 30,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => setShowModal(true)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            clipPath: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`,
            background: getGradient(),
          }}
        />
        <img
          src={bigstar}
          alt="Star"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <span
          style={{
            position: "absolute",
            color: "black",
            fontSize: "2em",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {rating}
        </span>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Выберите оценку для данного товара</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                style={{
                  cursor: "pointer",
                  color: index <= selectedRating ? "orange" : "gray",
                  marginRight: 10,
                  fontSize: 100,
                }}
                onClick={() => setSelectedRating(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
        <Button style={{width: "60%"}} variant="primary" onClick={handleRatingChange}>
            Сохранить
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default StarRating;