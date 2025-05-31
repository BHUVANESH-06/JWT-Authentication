import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Home } from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
