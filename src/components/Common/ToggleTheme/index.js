import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';

export default function ToogleTheame() {
  const [checked, setChecked] = useState(true); // true means dark false means light

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme === null || theme === "dark")
    {
      setThemeBlack();
    }
    else
    {
         setThemeLight();
    }
  }, [])

  function setThemeBlack() {
    document.documentElement.style.setProperty('--black', "#111");
    document.documentElement.style.setProperty('--white', "#f3f3f3");
    document.documentElement.style.setProperty('--darkGrey', "#1b1b1b");
    document.documentElement.style.setProperty('--grey', "#888");
    localStorage.setItem("theme", "dark");
    setChecked(true);
  }

  function setThemeLight() {
    document.documentElement.style.setProperty('--black', "#f3f3f3");
    document.documentElement.style.setProperty('--white', "#111");
    document.documentElement.style.setProperty('--darkGrey', "#cccc");
    document.documentElement.style.setProperty('--grey', "#111");
    localStorage.setItem("theme", "light");
    setChecked(false);
  }


  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setThemeBlack();
    }
    else {
        setThemeLight();
    }
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}


    />
  );
}