/**
 * @author Piyush Rai
 * @date 14.08.2023

 */

function TodoRowItem(props) {
// const rowno = 1;
// const todo = 'Finish Project';
// const assignedto = 'John Doe';
    return (
        <tr>
                        <th scope='row'>{props.rowNumber}</th>
                        <td>{props.rowDescription}</td>
                        <td>{props.rowAssigned}</td>
                    </tr>
    )
}

export default TodoRowItem