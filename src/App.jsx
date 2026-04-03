import React from 'react';
import { SessionProvider } from './context/SessionContext';
import AddSessionForm from './components/AddSessionForm';
import SessionList from './components/SessionList';
import './App.css';

export default function App() {
  return (
    <SessionProvider>
      <div className="container">
        <h1>Study Session Planner</h1>
        <AddSessionForm />
        <SessionList />
      </div>
    </SessionProvider>
  );
}
