import TodoRowItem from "./TodoRowItem"
/**
 * @author Piyush Rai
 * @date 22.08.2023

 */
function TodoTable(props){
    return(
        <table className="table table-hover">
             
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

        {props.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber} 
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
        </tbody>
    </table>
                
            </tbody>
        </table>

    )
}
export default TodoTable