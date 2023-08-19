import logo from './logo.svg';
import './App.css';
import TodoRowItem from './comoponents/TodoRowItem';
import TodoTable from './comoponents/TodoTable';
import React, {useState} from 'react';
/**
 * @author Piyush Rai
 * @date 11.08.2023

 */
function App() {
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'class work ', rowAssigned: 'User no One'},
    {rowNumber: 2, rowDescription: ' planting', rowAssigned: 'User no Two'},
    {rowNumber: 3, rowDescription: ' Maths', rowAssigned: 'User no One'},
    {rowNumber: 4, rowDescription: 'Hindi study', rowAssigned: 'User no One'}
  ]
  )
  return (
   <div className='mt-5 container'>
      <div className="card">
      <body>
      <div className="card-header"><h2>Your TODO </h2></div>
<div className='card-body'>
   <TodoTable todos = {todos}></TodoTable>
    </div>
</body>
</div>
    </div>
  );
}

export default App;
