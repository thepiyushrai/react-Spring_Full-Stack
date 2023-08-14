import logo from './logo.svg';
import './App.css';
import TodoRowItem from './comoponents/TodoRowItem';
function App() {
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
<TodoRowItem/>
            <tr>
                <th scope='row'>2</th>
                <td>Prepare presentation</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <th scope='row'>3</th>
                <td>Review code changes</td>
                <td>Michael Johnson</td>
            </tr>
        </tbody>
    </table>
    </div>
</body>
</div>
    </div>
  );
}

export default App;
