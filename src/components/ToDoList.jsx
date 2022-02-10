import React from 'react';
import { ToDoItem } from './ToDoItem';

export function ToDoList({toDos, toggleToDo}) {
  return (
    <ul>
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} toDo= {toDo} toggleToDo={toggleToDo}/>
        ))}
    </ul>
  )
}
