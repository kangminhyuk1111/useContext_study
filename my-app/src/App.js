import React from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useState } from 'react';
import Page from './page/Page';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </div>


  );
}

export default App;
