import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {CreatetoDo} from './components/CreatetoDo'
import {Todos} from './components/Todos'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(function () {
    setInterval(function() {
      fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodo(json.allTodos);
    });
    },5000)
  },[])
  
  return (
    <div>
      <CreatetoDo></CreatetoDo>
      <Todos todos = {todo}></Todos>
    </div>
  )
}
export default App
