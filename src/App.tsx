import React from 'react';

import AppHeader from './header';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppFooter from './components/footer';

import { ThemeProvider, useTheme } from './components/ThemeContext';
import "./styles.css";


function App() {
  return (
    <div>
      <AppHeader />
      <ThemeProvider>
        <Page/>
      <Layout />
      </ThemeProvider>
      <AppFooter />
    </div>
  );
}

const Page = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {/* <h1>{theme}</h1> */}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Switch to light mode" : "switch to dark mode"}
      </button>
    </div>
  );
};

export default App;



