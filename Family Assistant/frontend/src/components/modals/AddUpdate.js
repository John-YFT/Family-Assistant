import React, { useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { createUpdate } from '../../http/deviceApi'; 

const AddUpdate = ({ show, onHide }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const addUpdate = () => {
      // Проверка на заполнение всех полей
      if (!title || !date || !description) {
        setErrorMessage('Все поля обязательны к заполнению!');
        return;
      }
  
      // Создание нового обновления
      createUpdate({ title, date, description }).then(data => {
        // Очистка значений полей после добавления
        setTitle('');
        setDate('');
        setDescription('');
        onHide();
      }).catch(error => {
        console.error('Error adding update:', error);
      });
    };
  
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новое обновление
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Заголовок</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите заголовок"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Дата</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите дату"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Введите описание"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
          {/* Показ сообщения об ошибке, если не все поля заполнены */}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={addUpdate}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
  };

export default AddUpdate;