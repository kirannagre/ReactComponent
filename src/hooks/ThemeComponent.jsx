import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

// Theme Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Component Showing Different Content for Each Theme
function Mytheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#111",
        color: theme === "light" ? "#000" : "#fff",
        padding: "24px",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      {/* Different content for each theme */}
      {theme === "light" ? (
        <div>
          <h2> Light Theme</h2>
          <p style={{color:'#000'}}>This is the light mode. Colors are bright and clean.</p>
        </div>
      ) : (
        <div>
          <h2>Dark Theme</h2>
          <p>This is dark mode. Enjoy the night-friendly view.</p>
        </div>
      )}

      <br />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

const ThemeComponent = () => {
  return (
    <ThemeProvider>
      <Mytheme />
    </ThemeProvider>
  );
};

export default ThemeComponent;
