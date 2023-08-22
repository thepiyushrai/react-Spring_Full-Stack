import logo from './logo.svg';
import './App.css';
import TodoRowItem from './comoponents/TodoRowItem';
import TodoTable from './comoponents/TodoTable';
import NewTodoForm from './comoponents/NewTodoForm';
import React, {useState} from 'react';
/**
 * @author Piyush Rai
 * @date 11.08.2023

 */
function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Class work ', rowAssigned: 'User no One'},
    {rowNumber: 2, rowDescription: ' Planting', rowAssigned: 'User no Two'},
    {rowNumber: 3, rowDescription: ' Maths', rowAssigned: 'User no three'},
    {rowNumber: 4, rowDescription: 'Hindi study', rowAssigned: 'User no four'}
  ]
  )
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }
  return (
   <div className='mt-5 container'>
      <div className="card">
      <body>
      <div className="card-header"><h2>Your TODO </h2></div>
<div className='card-body'>
   
   <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
        {showAddTodoForm && 
          <NewTodoForm addTodo={addTodo}/>
        }
    </div>
</body>
</div>
    </div>
  );
}

export default App;
