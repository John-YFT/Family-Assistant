import React, { useEffect, useState } from 'react';
import { fetchSponsors } from '../../http/deviceApi';

const Sponsor = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          await fetchSponsors(setSponsors);
        };
    
        fetchData();
      }, []);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="sponsor-list">
      <h1 className="text-center mb-4">Список спонсоров</h1>
      <h3 className="text-center mb-4">Обязательно связаться с каждым - это потенциальные спонсоры!</h3>
      <ul className="list-group">
        {sponsors.map((sponsor) => (
          <li key={sponsor.id} style={{ marginBottom: '10px' }} className="list-group-item">
            <strong style={{fontSize: "26px"}}>{sponsor.name}</strong>
            <p style={{marginTop: '20px'}}>Email: <a href={`mailto:${sponsor.email}`}>{sponsor.email}</a></p>
            <p>Телефон: <a href={`tel:${sponsor.phone}`}>{sponsor.phone}</a></p>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Sponsor;