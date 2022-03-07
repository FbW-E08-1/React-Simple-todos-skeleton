import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ inputRef, task, setTask, handleSubmit }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='Please enter a task'
        ref={inputRef}
        value={task.task}
        onChange={(e) => setTask({ id: uuidv4(), task: e.target.value })}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </form>
  );
};

export default Form;
