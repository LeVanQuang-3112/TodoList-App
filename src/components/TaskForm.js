import React, {useContext, useState, useEffect} from 'react'
import { TaskListContext } from '../context/TaskListContext'

export default function TaskForm() {
    const {addTask, clearList, editTask, editItem} = useContext(TaskListContext)
    const [title, setTitle] = useState("")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editItem) {
            addTask(title)
            setTitle("")
        }
        else {
            editTask(title, editItem.id)
        }
    }
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if(editItem) {
            setTitle(editItem.title)
            console.log(editItem.title)
        }
        else {
            setTitle("")
        }
    }, [editItem])

    return (
        <div className="form__container">
            <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="form-control input"
      />
      <div className="buttons">
        <button type="submit" className="btn btn-primary ">
          {editItem ? "Update Task" : "Add Task"}
        </button>
        <button className="btn btn-danger" onClick={clearList}>
          Clear List
        </button>
      </div>
    </form>
        </div>
    )
}
