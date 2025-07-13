// App.jsx - Root component. Wraps everything with <ThemeProvider> and renders UI.

import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BackgroundLayer from "./components/BackgroundLayer"; // ✅ Correct import
import JobBoard from "./components/JobBoard"; // ✅ JobBoard renders JobCard internally
function AppContent() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <BackgroundLayer /> {/* ✅ Background with clouds or stars */}
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <section className="dashboard">
            <h2 className="dashboard-title">Job Application Dashboard</h2>
            {/* ✅ Kanban-style layout with dynamic cards */}
            <JobBoard />
          </section>
        </main>
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
