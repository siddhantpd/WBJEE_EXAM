import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

const tests = [
  { name: "RRB GROUP D 2025 RANKERS TEST 01 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 02 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 03 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 04 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 05 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 06 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 07 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 08 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 09 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
  { name: "RRB GROUP D 2025 RANKERS TEST 10 (With Video Solution)", questions: "100 Questions", marks: "100 Marks", minutes: "100 Minutes" },
];

function TestList({ onAttempt }) {
  return (
    <div className="page">
      {tests.map((test, idx) => (
        <div className="test-card" key={idx}>
          <div className="test-title">{test.name}</div>
          <div className="test-details">
            <span>{test.questions}</span>
            <span>{test.marks}</span>
            <span>{test.minutes}</span>
          </div>
          <div className="test-actions">
            <button className="attempt-btn" onClick={() => onAttempt(idx)}>
              Attempt
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function AttemptPage({ testIndex }) {
  return (
    <div style={{ padding: 32 }}>
      <h2>Attempting {tests[testIndex].name}</h2>
      <p>Test Details: {tests[testIndex].questions}, {tests[testIndex].marks}, {tests[testIndex].minutes}</p>
      <p>This is where your test-taking interface would go.</p>
    </div>
  );
}

function App() {
  const [attemptIndex, setAttemptIndex] = useState(null);
  const navigate = useNavigate();

  const handleAttempt = (idx) => {
    setAttemptIndex(idx);
    navigate(`/attempt/${idx}`);
  };

  return (
    <HashRoutes>
      <Route path="/" element={<TestList onAttempt={handleAttempt} />} />
      <Route
        path="/attempt/:index"
        element={
          <AttemptPage testIndex={attemptIndex} />
        }
      />
    </HashRoutes>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
