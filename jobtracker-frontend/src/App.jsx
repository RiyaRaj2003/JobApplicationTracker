import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';
import AmbientIcon from './components/AmbientIcon';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <section className="dashboard">
            <h2 className="dashboard-title">Job Application Dashboard</h2>
            <p>Main dashboard content goes here...</p>

            <Card>
              <button onClick={() => setCount(count + 1)}>
                count is {count}
              </button>
              <p>Edit <code>App.jsx</code> and save to test HMR</p>
            </Card>

            <Card status="applied">
              <p>✨ This card has an "Applied" status border!</p>
            </Card>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
