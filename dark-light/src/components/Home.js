import React, { useState, useEffect, useRef } from 'react';
import './home.css';


function Home() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);


  return (
    <div className={`App ${theme}`}>
      <nav className={`navbar ${theme === 'dark' ? 'dark' : 'light'}`}>
        <button className={`toggle-button ${theme}`} onClick={toggleTheme}>
          <span className={`toggle-icon ${theme === 'dark' ? 'moon' : 'sun'}`}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </button>
      </nav>

    </div>
  );
}

export default Home;



