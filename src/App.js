import './App.css';
import {useState} from 'react'

// function App() {
//   const[Task,setTask]=useState([])
//   const[newTask,setNewtask]=useState("");
//   const handelChange=(e)=>{
// setNewtask(e.target.value)

//   }
//   const addTask=()=>{
//     const task={
//       id:Task.length ===0?1: Task[Task.length -1 ].id +1,
//       taskName:newTask
//     }
// const newList=[...Task,task];
// setTask(newList)
//   }
//   const deleteTask=(id)=>{
// const nreTodolist=Task.filter((e)=>e.id!==id)
// setTask(nreTodolist)
//   }
//   return (
//     <div className="App">
// <div className='addTask'>
//   <input onChange={handelChange}/>
// <button onClick={addTask}> Add Task</button>
// </div>
// <div className='list'>

// {Task.map((e)=>{
//   return(
//    <div>
// <h1> {e.taskName}</h1>
// <button onClick={()=>deleteTask(e.id)} >Delete </button>
//    </div> 
//   )
// })}
// </div>


// </div>
//   );
// }

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    //   const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    //Removes all spaces from text except for single spaces between words
    const task = {
      id: Date.now(), // Unique ID for each task
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask(""); // Clear the input field
  };

  // Mark task as completed
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">

      {/*   const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); */}
      <h1>To-Do List</h1>
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="taskList">
        {tasks.length === 0 && <p>No tasks added yet!</p>}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

