import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ModalsWindow = ({ showModal, handleClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [validationError, setValidationError] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^(\+7|8)[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e, fieldName) => {
        const { value } = e.target;

        if (fieldName === 'phone') {
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

        if (fieldName === 'email') {
            if (!validateEmail(value)) {
                setValidationError((prevErrors) => ({
                    ...prevErrors,
                    email: 'Некорректный адрес электронной почты',
                }));
            } else {
                setValidationError((prevErrors) => ({
                    ...prevErrors,
                    email: '',
                }));
            }
        }

        setFormData((prevFormData) => ({ ...prevFormData, [fieldName]: value }));
    };

    const handleSubmit = async () => {
        let hasErrors = false;
        const newValidationError = {};
    
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newValidationError[key] = 'Это поле обязательно для заполнения';
                hasErrors = true;
            }
        });
    
        if (!validatePhoneNumber(formData.phone)) {
            newValidationError.phone = 'Некорректный номер телефона';
            hasErrors = true;
        }
    
        if (!validateEmail(formData.email)) {
            newValidationError.email = 'Некорректный адрес электронной почты';
            hasErrors = true;
        }
    
        setValidationError(newValidationError);
    
        if (hasErrors) {
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/sponsor/add-sponsor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData }),
            });
    
            if (response.ok) {
                console.log('Feedback submitted successfully');
                setIsSuccess(true);
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                    });
                    setIsSuccess(false);
                }, 3000);
            } else {
                const data = await response.json();
                console.error('Ошибка при отправке!!!', data.error);
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };
    
  
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{fontSize: '28px'}}>Заполните данную форму</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className='align-center text-center' style={{fontSize: '18px'}}>И мы с вами свяжемся в ближайшее время!</p>
                <Form>
                <Form.Group controlId="formName" className='mb-3'>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите ваше имя..."
                        value={formData.name}
                        onChange={(e) => handleChange(e, 'name')}
                        isInvalid={!!validationError.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationError.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formEmail" className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите ваш email..."
                        value={formData.email}
                        onChange={(e) => handleChange(e, 'email')}
                        isInvalid={!!validationError.email}
                    />
                    {validationError.email && (
                        <div className="invalid-feedback">{validationError.email}</div>
                    )}
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите ваш номер телефона..."
                        value={formData.phone}
                        onChange={(e) => handleChange(e, 'phone')}
                        isInvalid={!!validationError.phone}
                    />
                    {validationError.phone && (
                        <div className="invalid-feedback">{validationError.phone}</div>
                    )}
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleSubmit} className="mx-auto" style={{width: '70%', background:'#FF6347'}}>
                    Отправить заявку
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
            </Modal.Footer>
            {isSuccess && (
                <div className="alert alert-success" role="alert">
                    Заявка успешно отправлена! Скоро мы с вами свяжемся!
                </div>
            )}
        </Modal>
    );
};

export default ModalsWindow;