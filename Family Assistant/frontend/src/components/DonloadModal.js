import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../assets/AnimateText.css'; 

const DonloadModal = ({ showModal, handleClose }) => {
    return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Скачивание приложения</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="bright-glowing-text">
          Спасибо большое за ваш интерес к нашему приложению!
          Ссылка для скачивания очень скоро появится!
          Спасибо за ожидание!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
    );
};

export default DonloadModal;