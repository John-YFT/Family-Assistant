import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { $host } from "../../http";

const Admin = () => {
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);

    const fetchFeedbacks = async () => {
        try {
            const { data } = await $host.get('/api/feedback/get-aboutus');
            setFeedbacks(data);
        } catch (e) {
            console.error('Ошибка при получении обратной связи:', e);
        }
    };

    useEffect(() => {
        if (showFeedback) {
            fetchFeedbacks();
        }
    }, [showFeedback]);

    return (
        <Container style={{ maxWidth: '80vw', margin: '4vw auto' }}>
            {!showFeedback ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button 
                        onClick={() => setShowFeedback(true)}
                        style={{
                            background: '#DAA520',
                            border: 'none',
                            padding: '1vw 2vw',
                            fontSize: '1.2vw',
                            borderRadius: '0.5vw',
                            color: 'white',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => e.target.style.background = '#B8860B'}
                        onMouseOut={(e) => e.target.style.background = '#DAA520'}
                    >
                        Обратная связь
                    </Button>
                </div>
            ) : (
                <div style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1vw',
                    padding: '2vw',
                    boxShadow: '0 0.2vw 1vw rgba(0, 0, 0, 0.1)'
                }}>
                    <h1 style={{ 
                        textAlign: 'center', 
                        marginBottom: '2vw',
                        fontSize: '2.5vw',
                        color: '#4B0082'
                    }}>
                        Обратная связь с пользователями
                    </h1>
                    <h3 style={{ 
                        textAlign: 'center', 
                        marginBottom: '2vw',
                        fontSize: '1.5vw',
                        color: '#800080'
                    }}>
                        Обязательно исправить и изучить каждый вопрос!
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}>
                        {feedbacks.map((feedback) => (
                            <div 
                                key={feedback.id} 
                                style={{
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    borderRadius: '0.8vw',
                                    padding: '1.5vw',
                                    boxShadow: '0 0.2vw 0.5vw rgba(75, 0, 130, 0.1)',
                                    transition: 'all 0.3s ease',
                                    border: '0.1vw solid #E6E6FA'
                                }}
                            >
                                <h4 style={{ 
                                    fontSize: '1.8vw',
                                    marginBottom: '1vw',
                                    color: '#4B0082'
                                }}>
                                    {feedback.user.fullName}
                                </h4>
                                <div style={{ fontSize: '1.2vw' }}>
                                    <p style={{ color: '#800080' }}>Тип проблемы: {feedback.role}</p>
                                    <p style={{ color: '#800080' }}>Описание: {feedback.text}</p>
                                    <div style={{ marginTop: '1vw' }}>
                                        <p>
                                            Email: 
                                            <a 
                                                href={`mailto:${feedback.user.email}`}
                                                style={{
                                                    marginLeft: '0.5vw',
                                                    color: '#DAA520',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                {feedback.user.email}
                                            </a>
                                        </p>
                                        <p>
                                            Телефон: 
                                            <a 
                                                href={`tel:${feedback.user.phone}`}
                                                style={{
                                                    marginLeft: '0.5vw',
                                                    color: '#DAA520',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                {feedback.user.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div style={{ marginTop: '3vw', textAlign: 'center' }}>
                        <Button 
                            onClick={() => setShowFeedback(false)}
                            style={{
                                background: '#DAA520',
                                border: 'none',
                                padding: '0.8vw 2vw',
                                fontSize: '1.2vw',
                                borderRadius: '0.5vw',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#B8860B'}
                            onMouseOut={(e) => e.target.style.background = '#DAA520'}
                        >
                            Назад
                        </Button>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default Admin; 