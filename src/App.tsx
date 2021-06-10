import React from 'react';

import AppHeader from './header';
import Layout from './components/layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div>
      <AppHeader />
      <Layout />
    </div>
  );
}

export default App;
