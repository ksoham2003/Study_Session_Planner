import React from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from '../context/SessionContext';

export default function AddSessionForm() {
  const { addSession } = useSession();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    addSession(data);
    reset();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add New Session</h2>
      <div className="input-group">
        <input {...register('topic', { required: true })} placeholder="Topic Name" />
        <select {...register('subject')}>
          <option>DSA</option>
          <option>Web Dev</option>
          <option>DBMS</option>
          <option>OS</option>
          <option>Other</option>
        </select>
        <input type="number" {...register('duration', { min: 10, required: true })} placeholder="Mins" />
        <select {...register('priority')}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input type="date" {...register('date', { required: true })} />
        <button type="submit">Add Session</button>
      </div>
      {errors.topic && <p className="error">Topic is required</p>}
      {errors.duration && <p className="error">Duration min 10</p>}
    </form>
  );
}
