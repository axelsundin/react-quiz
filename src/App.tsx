import React from 'react';

import AppHeader from './header';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppFooter from './components/footer';

import { ThemeProvider, useTheme } from './components/ThemeContext';
import "./styles.css";
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined'; 

  
import Test from './components/test';
import ErrorBoundary from './components/errorBoundary';

function App() {
  return (
    <div>
      <AppHeader />
      <ThemeProvider>
        <Page/>
        <Test/>
      <Layout />
      </ThemeProvider>
      <ErrorBoundary>
      <AppFooter />
      </ErrorBoundary>
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
      <Brightness6OutlinedIcon />
      </button>
    </div>
  );
};

export default App;



