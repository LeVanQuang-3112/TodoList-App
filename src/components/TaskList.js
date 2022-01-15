import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

export default function TaskList() {
    const {tasks, removeTask, findTask} = useContext(TaskListContext)
    console.log(tasks)
    return (
        <div>
            {
                tasks.length > 0 
                ? (
                    tasks.map((task) => {
                        return (
                            <div key={task.id} className="task__item">
                                <p>{task.title}</p>
                                <div className="task__icon">
                                <i className="far fa-trash-alt icon" onClick={() => removeTask(task.id)}></i>
                                <i className="fas fa-edit icon" onClick={() => findTask(task.id)}></i>
                                </div>
                            </div>
                        )
                    })
                )
                : (<h1>Task list is empty</h1>)
            }
        </div>
    )
}
