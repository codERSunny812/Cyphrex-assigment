import Header from './Component/Header'
import Body from './Component/Body'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light');
  // function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [grouping, setGrouping] = useState("priority");
  const [ordering, setOrdering] = useState("priority");

  const handleGroupingChange = (value) => {
    setGrouping(value);
  };

  const handleOrderingChange = (value) => {
    setOrdering(value);
  };

 
  return (
    
    <>
      <Header
       onToggleTheme={toggleTheme} 
       theme={theme} 
        grouping={grouping}
        ordering={ordering}
        onGroupingChange={handleGroupingChange}
        onOrderingChange={handleOrderingChange}
      
      />

      <Body theme={theme}
        grouping={grouping} 
        ordering={ordering} 
      />
   
    </>
  )
}

export default App
