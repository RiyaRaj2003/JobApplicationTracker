// App.jsx – Root component with modal + job tracker logic

import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BackgroundLayer from "./components/BackgroundLayer";
import JobBoard from "./components/JobBoard";
import AddJobModal from "./components/AddJobModal";
import "./styles/global.css";

function AppContent() {
  const [showModal, setShowModal] = useState(false);
  const [applications, setApplications] = useState([]);

  const handleAddJob = (job) => {
    const newJob = { ...job, id: Date.now() };
    setApplications((prev) => [...prev, newJob]);
  };

  return (
    <div className="app">
      <BackgroundLayer />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <section className="dashboard">
            <h2 className="dashboard-title">Job Application Dashboard</h2>
            <JobBoard applications={applications} />
          </section>
        </main>
        <button className="floating-btn" onClick={() => setShowModal(true)}>＋</button>
        {showModal && (
          <AddJobModal onClose={() => setShowModal(false)} onAdd={handleAddJob} />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
