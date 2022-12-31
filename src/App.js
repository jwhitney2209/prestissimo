import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Students from "./pages/Students";
import AddPerson from "./pages/AddPerson";
import Parents from "./pages/Parents";
import Dashboard from "./pages/Dashboard";
import AddEnsemble from "./pages/AddEnsemble";
import Ensembles from "./pages/Ensembles";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Dashboard /> : <Home />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/students" element={user ? <Students /> : <Navigate to="/login" />} />
            <Route path="/parents" element={user ? <Parents /> : <Navigate to="/login" /> } />
            <Route path="/addperson" element={user ? <AddPerson /> : <Navigate to="/login" />} />
            <Route path="/addensemble" element={user ? <AddEnsemble/> : <Navigate to="/login" />} />
            <Route path="/ensembles" element={user ? <Ensembles/> : <Navigate to="/login" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
