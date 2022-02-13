import Footer from "components/layout/footer/Footer";
import Navbar from "components/layout/navbar/Navbar";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import PasswordResetPage from "pages/PasswordResetPage/PasswordResetPage";
import ProjectPage from "pages/ProjectPage/ProjectPage";
import ProjectsPage from "pages/ProjectsPage/ProjectsPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import NotFound from "pages/Errors/NotFound";
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
          
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
