import React from 'react';
import { useSession } from '../context/SessionContext';

export default function SessionItem({ session }) {
  const { deleteSession } = useSession();

  return (
    <div className={`session-card ${session.priority.toLowerCase()}`}>
      <div className="content">
        <h3>{session.topic}</h3>
        <p>{session.subject} • {session.duration}m • {session.date}</p>
        <p>Priority: <strong>{session.priority}</strong></p>
      </div>
      <button onClick={() => deleteSession(session.id)} className="delete-btn">Delete</button>
    </div>
  );
}
