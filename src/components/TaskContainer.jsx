import React from 'react';
import Task from './Task';

const TaskContainer = ({ tasks, handleDelete }) => {
  const taskList = tasks.map((item) => (
    <Task key={item.id} item={item} handleDelete={handleDelete} />
  ));

  return <section>{taskList}</section>;
};

export default TaskContainer;
