import React from "react";

import AppHeader from "./header";
import Layout from "./components/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppFooter from "./components/footer";

import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./styles.css";
import Brightness6OutlinedIcon from "@material-ui/icons/Brightness6Outlined";

import Test from "./components/test";
import ErrorBoundary from "./components/errorBoundary";

function App() {
  return (
    <div>
      <AppHeader />
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
      <ErrorBoundary>
        <AppFooter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
