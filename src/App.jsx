import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import { Routes } from './Routes';
import { AppLayout } from './pages/AppLayout';
import './App.css';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
}

export default App;
