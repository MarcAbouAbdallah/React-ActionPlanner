// Component for each individual task

import { FaTimes } from 'react-icons/fa' //Importing icons from the fa library (icon is a component)

const Task = ({ task, onDelete, onToggle }) => {

    // Conditional className based on reminder (use backticks)
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
         onDoubleClick={() => {onToggle(task.id)}}
         >
            <h3>
                {task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
