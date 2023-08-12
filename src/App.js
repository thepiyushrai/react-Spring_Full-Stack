import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className='mt-5 container'>
         <div className="card">
           <div className="card-header">
             Your Todo's
           </div>
           <div className="card-body">
             <TodoTable todos={todos} deleteTodo={deleteTodo}/>
             <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
               {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
             </button>
           {showAddTodoForm &&
             <NewTodoForm addTodo={addTodo}/>
           }
           </div>
         </div>
       </div>
  );
}

export default App;
