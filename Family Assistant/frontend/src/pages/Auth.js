import React, { useContext, useState } from 'react';
import { Alert, Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaVenusMars } from 'react-icons/fa';
import '../assets/Auth.css';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate() 
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(null); 
    const [gender, setGender] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const validateFullName = (fullName) => {
        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        return nameRegex.test(fullName);
    };
    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{10,15}$/;
        return phoneRegex.test(phone);
    };


    const click = async () => {
        try{
            let data;
            if (isLogin){
                data = await login(email, password);
            } else {
                if (password !== confirmPassword) {
                    setMessage('Пароли не совпадают');
                    return;
                }
                if (!validateFullName(fullName)) {
                    setMessage('Некорректное имя пользователя');
                    return;
                }
                if (!validatePhone(phone)) {
                    setMessage('Некорректный номер телефона');
                    return;
                }
                if (!gender) {
                    setMessage('Выберите пол');
                    return;
                }
                if (!validateEmail(email)) {
                    setMessage('Некорректный email');
                    return;
                }
                data = await registration(email, password, fullName, phone, gender);
            }
            user.setAuthenticatedUser(data);
            //user.setUser(user)
            user.setIsAuth(true)
            setMessage('Авторизация/Регистрация успешна!');
            history(MAIN_ROUTE)
        }
        catch(e) {
            setMessage(e.response.data.message);
            //alert(e.responce.data.message)
        }
    };


    const renderLoginForm = () => (
        <>
            <Form.Group className="mt-3">
                <Form.Label>
                    <FaEnvelope className="icon" /> Email
                </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Введите ваш email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>
                    <FaLock className="icon" /> Пароль
                </Form.Label>
                <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Введите ваш пароль..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
            </Form.Group>
        </>
    );

    const renderRegistrationForm = () => (
        <>
            <Form.Group className="mt-3">
                <Form.Label>
                    <FaUser className="icon" /> Имя пользователя
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите логин..."
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input-field"
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>
                    <FaPhone className="icon" /> Номер телефона
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите ваш номер телефона..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-field"
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label>
                    <FaVenusMars className="icon" /> Пол
                </Form.Label>
                <div className="d-flex">
                    <Form.Check
                        type="radio"
                        label="Мужской"
                        name="gender"
                        value="Мужской"
                        onChange={(e) => setGender(e.target.value)}
                        className="radio-button"
                    />
                    <Form.Check
                        type="radio"
                        label="Женский"
                        name="gender"
                        value="Женский"
                        onChange={(e) => setGender(e.target.value)}
                        className="radio-button ms-3"
                    />
                </div>
            </Form.Group>
            {renderLoginForm()}
            <Form.Group className="mt-3">
                <Form.Label>
                    <FaLock className="icon" /> Подтверждение пароля
                </Form.Label>
                <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Повторите ваш пароль..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-field"
                />
            </Form.Group>
        </>
    );

    return (
        <Container
            className="d-flex justify-content-center align-items-center auth-container"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5 auth-card">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                {message && (
                    <Alert variant={message.includes('успешна') ? 'success' : 'danger'}>
                        {message}
                    </Alert>
                )}
                <Form className="d-flex flex-column">
                    {isLogin ? renderLoginForm() : renderRegistrationForm()}
                    <Form.Check
                        type="checkbox"
                        label="Показать пароль"
                        className="mt-3"
                        onChange={toggleShowPassword}
                        checked={showPassword}
                    />
                    <Row className="d-flex justify-content-between mt-3">
                        {isLogin ? (
                            <div>
                                Нет аккаунта?{' '}
                                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                        ) : (
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        )}
                        <Button
                            className="mt-3 align-self-end custom-btn"
                            variant="outline-success"
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                        
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;