import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import VehiclesPage from './pages/VehiclesPage';
import ElectronicsPage from './pages/ElectronicsPage';
import RealEstatePage from './pages/RealEstatePage';
import JobsPage from './pages/JobsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}