import React, {Fragment, useState, useRef, useEffect} from "react";
import {ToDoList} from './components/ToDoList';
import {v4 as uuidv4} from 'uuid';

const KEY = "toDoApp.toDos";

export function App(){
    
    const [toDos, setToDos] = useState([{ id: 1, task: 'Tarea 1', completed: false}])
    
    const toDoTaskRef = useRef();

    useEffect(() => {
        const storedToDos = JSON.parse(localStorage.getItem(KEY));
        if (storedToDos) {
            setToDos(storedToDos);
        }
        localStorage.setItem(KEY, JSON.stringify(toDos));
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(toDos));
    }, [toDos]);

    const toggleToDo = (id) => {
        const newToDos = [... toDos];
        const toDo = newToDos.find((toDo) => toDo.id === id);
        toDo.completed = !toDo.completed;
        setToDos(newToDos);
    };    
  
    const handleToDoAdd = () =>{
        const task = toDoTaskRef.current.value;
        if(task === '') return;

        setToDos((prevToDos) => {
            return [...prevToDos, {id: uuidv4(), task, completed:false}]
        });
 
        toDoTaskRef.current.value=null;
    }
    
    const handleClearAll = () => {
        const newToDos = toDos.filter((toDo) => !toDo.completed)
        setToDos(newToDos)
    }

    return (
        <Fragment>
            <ToDoList toDos= {toDos} toggleToDo={toggleToDo}/>
            <input ref={toDoTaskRef} type="text" placeholder="Nueva Tarea"/>            
            <button onClick={handleToDoAdd}></button>            
            <button onClick={handleClearAll}></button>
            <div>Te quedan {toDos.filter((toDo) => !toDo.completed).length} tareas por terminar</div>
        </Fragment>
    );
}