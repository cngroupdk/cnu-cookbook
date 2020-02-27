import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import { Routes } from "./routes";
import { MainLayout } from "./pages/MainLayout";
import "./App.css";

export function App() {
  return (
    <Router>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Router>
  );
}
