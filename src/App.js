import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

// Root component that contains all other components
function App() {

  // States are stored in the top component (to use them everywhere) and passed to components through props (Can also use other state management tools like Redux, Context API...)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks() // fetchTasks() returns a promise
      setTasks(tasksFromServer) // Update state
    }
    getTasks()
  }, []) //Empty dependency array


  // Fetch all Tasks from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5001/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task from server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Functions to be passed to sub-components

  // Toggle Task reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    // Update reminder in DB
    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task // Toggle reminder for the task with given id only
      )
    )
  }

  // Add Task (called on form submission)
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5001/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) // Convert from JS object to JSON
    })

    const newTask = await res.json()

    setTasks([...tasks, newTask]) // Changing the state by adding new task to existing ones

  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`,
      {
        method: 'DELETE'

      }) // Delete Task from server

    // This is how to manipulate states (immutable) by calling set function
    setTasks(tasks.filter((task) => task.id !== id)) // Change the state using filter()
  }


  // Call all components (Headers, Tasks ...): Can pass states and functions, use conditional logic ...
  return (
    <Router>
      <div className="container">

        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />


        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask} /> // && is a quick way to use a ternary ? :
              }

              {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> //Pass down states and functions (through props)
              ) : (
                'No tasks to show'
              )}

              <Footer />
            </> // Specify the element (one or many components) to render in the given route
          } />

          <Route path='/about' element={<About />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
