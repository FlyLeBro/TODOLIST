import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const [todos, setToDos] = React.useState([])
  const [todo, setToDo] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }

    setToDos([...todos].concat(newTodo))
    setToDo('')
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setToDos(updatedTodos)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setToDo(e.target.value)} value={todo}/>
        <button className='btn btn-success' type="submit">Ajouter</button>
      </form>
      {todos.map((todo) => <div className='mt-4' key={todo.id}>
        {todo.text}
        <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Supprimer</button>
        </div>)}
    </div>
  );
}

export default App;
