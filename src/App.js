import './App.css';
import { createContext, useState } from 'react';
import Card from "./components/Card";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider className="switch" value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
          <Card/>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className="icono" checkedIcon={(<i class="fa">&#xf186;</i>)} uncheckedIcon={(<i class="fa">&#xf185;</i>)} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App; 

