
export default function Table (props) {

 const emp = props.employees.map(employee => {

return (
<tr>
    <td>{employee.name.last}  </td>
    <td>{employee.name.first}  </td>
    <td><img src={employee.picture.thumbnail}></img>  </td>
    <td>{employee.gender}  </td>
    <td>{employee.dob.age}  </td>
    <td>{employee.email}  </td>
    <td>{employee.cell}  </td>
</tr>

)

 })


 return (<table>
     <tr> 
         <th> Last Name </th>
         <th> First Name </th>
         <th> Picture </th>
         <th> Gender </th>
         <th> Age </th>
         <th> Email </th>
         <th> Cell </th>
     </tr>
     
{emp}

 </table>)

}



