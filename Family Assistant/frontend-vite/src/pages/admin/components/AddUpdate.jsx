import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { $host } from '../../../http';

const AddUpdate = ({ show, onHide }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const addUpdate = async () => {
        try {
            if (!title || !date || !description) {
                setErrorMessage('Пожалуйста, заполните все поля')
                return
            }
            
            await $host.post('api/update', {
                title,
                date,
                description
            })
            
            setTitle('')
            setDate('')
            setDescription('')
            setErrorMessage('')
            onHide()
        } catch (e) {
            console.error('Ошибка при добавлении обновления:', e)
            setErrorMessage('Произошла ошибка при добавлении обновления')
        }
    }

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