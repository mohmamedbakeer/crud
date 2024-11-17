import './App.css';
import {useState} from 'react'
function App (){
  const [task,setTask]=useState("");
  const [addTask,setAddTask]=useState([]);
const hangelInput=(e)=>{
setTask(e.target.value)
}
const addTashhandel=()=>{
  if(task.trim() === "")return
  const taskobj={
    id:Date.now(),
    text:task,
  }
  setAddTask([...addTask,taskobj])
  setTask("")
}
const deleteTask = (id) => {
  setAddTask(addTask.filter((task) => task.id !== id));
};
return (
  <div>
    <h1>To Do List</h1>
    <input
      placeholder="Enter a Task"
      value={task} // Bind input to the `task` state
      onChange={hangelInput}
    />
    <button onClick={addTashhandel}>Add</button>

    {addTask.map((e) => {
      return <div key={e.id}>{e.text}
            <button onClick={() => deleteTask(e.id)}>Delete</button>

      </div>;

    })}
  </div>
);
}
export default App;

