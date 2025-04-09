import React, { useEffect, useState } from 'react';
import { fetchAboutUs } from '../../http/deviceApi';

const AboutUs = () => {
    const [aboutes, setAboutUs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          await fetchAboutUs(setAboutUs);
        };
    
        fetchData();
      }, []);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="sponsor-list">
      <h1 className="text-center mb-4">Обратная связь с пользователями</h1>
      <h3 className="text-center mb-4">Обязательно исправить и изучить каждый вопрос!</h3>
      <ul className="list-group">
        {aboutes.map((about) => (
          <li key={about.id} style={{ marginBottom: '10px' }} className="list-group-item">
            <strong style={{fontSize: "26px"}}>{about.user.fullName}</strong>
            <p>Тип проблемы: {about.role}</p>
            <p>Описание: {about.text}</p>
            <p style={{marginTop: '20px'}}>Email: <a href={`mailto:${about.user.email}`}>{about.user.email}</a></p>
            <p>Телефон: <a href={`tel:${about.user.phone}`}>{about.user.phone}</a></p>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default AboutUs;