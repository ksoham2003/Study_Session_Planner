import React from 'react';
import { useSession } from '../context/SessionContext';
import SessionItem from './SessionItem';

export default function SessionList() {
  const { sessions } = useSession();
  const total = sessions.reduce((acc, s) => acc + Number(s.duration), 0);

  return (
    <div className="list-section">
      <div className="list-header">
        <h2>Sessions List</h2>
        <span className="total-badge">Total: {total} mins</span>
      </div>
      <div className="grid">
        {sessions.map((s) => (
          <SessionItem key={s.id} session={s} />
        ))}
      </div>
    </div>
  );
}
