import Footer from "components/layout/footer/Footer";
import Navbar from "components/layout/navbar/Navbar";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import PasswordResetPage from "pages/PasswordResetPage/PasswordResetPage";
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

          <Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
          </Route>
          
          <Route path="*" element={<h1 className="mt-96 text-2xl">not found 404</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
