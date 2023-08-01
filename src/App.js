import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return(
   <>

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/userdetail" element={<UserDetail />} />
    </Routes>
  </>
  );
}

export default App;
