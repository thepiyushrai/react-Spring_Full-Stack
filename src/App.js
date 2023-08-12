import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
      <body>
    <h2>TODO List</h2>
    <table>
        <thead>
            <tr>
            <th scope="col">SrNo</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned To</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Finish project report</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Prepare presentation</td>
                <td>Jane Smith</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Review code changes</td>
                <td>Michael Johnson</td>
            </tr>
        </tbody>
    </table>
</body>
    </div>
  );
}

export default App;
