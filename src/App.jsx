import Footer from "components/layout/footer/Footer";
import Navbar from "components/layout/navbar/Navbar";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import ProjectPage from "pages/ProjectPage/ProjectPage";
import ProjectsPage from "pages/ProjectsPage/ProjectsPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App mt-8">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
