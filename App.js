import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [todolist,setTodolist]=useState([])

    let saveTodoList = (event)=> {

      let name = event.target.name.value;

      if(!todolist.includes(name)){
        let finalTodo = [...todolist,name]
        setTodolist(finalTodo)

      }else{
        alert("Todo name is already Exists...")
      }
     
      event.preventDefault();
    }

    let list = todolist.map((value, index)=> {
      return(
         <TodoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
      )
    })


  return (
    <div className="container">
    <div className="App">
     <h2>Todo List</h2>

     <form onSubmit={saveTodoList}>
      <input type="text" name="name" ></input>

      <button>Save</button>
     </form>

     <div className='outerDiv'>
      <ul>
        {list}
     </ul>
     </div>

    </div>
    </div>
  );
}

export default App;


function TodoListItems({value, indexNumber, todolist,setTodolist}) {

  let deleteRow=()=> {
    let finallist=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finallist)
  }
  return(
       <li>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
