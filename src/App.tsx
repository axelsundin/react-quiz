

import AppHeader from "./header";
import Layout from "./components/layout";

import AppFooter from "./components/footer";

import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./styles.css";



import ErrorBoundary from "./components/errorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
      <AppHeader />
      </ErrorBoundary>
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
