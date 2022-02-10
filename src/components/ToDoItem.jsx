import React from "react";

export function ToDoItem({ toDo, toggleToDo }) {
  const { id, task, completed } = toDo;

  const handleToDoClick = () => {
    toggleToDo(id);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleToDoClick} />
      {task}
    </li>
  );
}
