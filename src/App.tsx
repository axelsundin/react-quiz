import React from 'react';

import AppHeader from './header';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppFooter from './components/footer';



function App() {
  return (
    <div>
      <AppHeader />
      <Layout />
      <AppFooter />
    </div>
  );
}

export default App;
