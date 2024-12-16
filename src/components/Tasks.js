import Task from './Task' // importing the Task component

const Tasks = ({ tasks, onDelete, onToggle}) => {
    return (
      <>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/> //Using the Task component (Passing down through props again)
        ))}
      </>
    )
  }
  

export default Tasks
