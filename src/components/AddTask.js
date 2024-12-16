import { useState } from "react"

const AddTask = ({ onAdd }) => {
    
    // Component level states (not app level state)
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    // Submit Function
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){ //INput Validation
            alert('Please Add Task')
            return
        }

        onAdd({ text, day, reminder }) //Call Function

        //Clear Form
        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type='text'
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)} //onChange (here, when user starts typing)
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className="btn btn-block" />

        </form>
    )
}

export default AddTask
