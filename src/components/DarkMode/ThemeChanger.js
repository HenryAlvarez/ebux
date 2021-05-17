import React, { useState, useEffect } from 'react'
import './switch.scss';

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    console.log(themeState);
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') return document.body.classList.add('dark-mode');
  })

  return (
    <>
      {/* <button onClick={handleChange}>{themeState ? 'Light Mode' : 'Dark Mode'}</button> */}
      <label className="switch">
        <input type="checkbox" value={themeState} onClick={handleChange} />
        <span className="slider round">
          <div className="moon"></div>
          <div className="sun">
          </div>
        </span>
      </label>
    </>
  )
}

export default ThemeChanger;