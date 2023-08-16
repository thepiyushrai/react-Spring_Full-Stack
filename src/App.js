import logo from './logo.svg';
import './App.css';
import TodoRowItem from './comoponents/TodoRowItem';
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
    <table className='table tbale-hover'>
        <thead>
            <tr>
            <th scope="col">SrNo</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned To</th>
            </tr>
        </thead>
        <tbody>

      {pr}    
<TodoRowItem
rowNumber ={todos[0].rowNumber} rowDescription={todos[0].rowDescription} rowAssigned = {todos[0].rowAssigned}
/>
<TodoRowItem
rowNumber ={todos[1].rowNumber} rowDescription={todos[1].rowDescription} rowAssigned = {todos[1].rowAssigned}
/>
<TodoRowItem
rowNumber ={todos[3].rowNumber} rowDescription={todos[3].rowDescription} rowAssigned = {todos[3].rowAssigned}
/>
        </tbody>
    </table>
    </div>
</body>
</div>
    </div>
  );
}

export default App;
