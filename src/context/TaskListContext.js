import React, {useEffect, useState, createContext} from 'react';
import {v4 as uuidv4} from "uuid"

export const TaskListContext = createContext()

const TaskListContextProvider = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem("tasks")) || []
    const [tasks, setTasks] = useState(initialState)
    const [editItem, setEditItem] = useState(null)
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
     
    const addTask = (title) => {    
        setTasks([
            ...tasks,
            {title, id: uuidv4()}
        ])
    }
    const removeTask = (id) => {
            setTasks(tasks.filter(task => task.id !== id))
    }
    const clearList = () => {
        setTasks([])
    }
    const findTask =(id) => {
        const item = tasks.find((task) => task.id === id)
        setEditItem(item)
        console.log(item);
    }
    const editTask = (title, id) => {
        const newTask = tasks.map((task) => task.id === id ? {title, id} : task)
        setTasks(newTask)
        setEditItem(null)
    }

    const value = {
        tasks,
        editItem,
        addTask,
        removeTask,
        clearList,
        findTask,
        editTask,
    }
    return (
        <TaskListContext.Provider value={value}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;

