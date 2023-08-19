import TodoRowItem from "./TodoRowItem"
function TodoTable(props){
    return(
        <table className="table table-hover">
                <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
            <table className='table tbale-hover'>
        <thead>
            <tr>
            <th scope="col">SrNo</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned To</th>
            </tr>
        </thead>
        <tbody>

        
<TodoRowItem
rowNumber ={props.todos[0].rowNumber} 
rowDescription={props.todos[0].rowDescription} 
rowAssigned = {props.todos[0].rowAssigned}
/>
<TodoRowItem
rowNumber ={props.todos[1].rowNumber} rowDescription={props.todos[1].rowDescription} rowAssigned = {props.todos[1].rowAssigned}
/>
<TodoRowItem
rowNumber ={props.todos[3].rowNumber} rowDescription={props.todos[3].rowDescription} rowAssigned = {props.todos[3].rowAssigned}
/>
        </tbody>
    </table>
                
            </tbody>
        </table>

    )
}
export default TodoTable