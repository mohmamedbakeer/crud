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
      return <h1 key={e.id}>{e.text}</h1>;
    })}
  </div>
);
}
export default App;

