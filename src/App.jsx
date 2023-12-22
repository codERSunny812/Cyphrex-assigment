import Header from './Component/Header'
import Body from './Component/Body'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light');

  // function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    
    <>
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <Body theme={theme} />
   
    </>
  )
}

export default App
