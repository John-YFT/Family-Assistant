import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <button onClick={scrollToTop} style={{
                                            position: 'fixed',
                                            bottom: '20px',
                                            right: '20px',
                                            backgroundColor: '#DAA520',
                                            color: '#fff',
                                            border: 'none',
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontSize: '32px',
                                            display: isVisible ? 'block' : 'none', 
                                        }}>
        <FontAwesomeIcon icon={faLevelUp} />
      </button>
    </div>
  );
};

export default ScrollToTop;