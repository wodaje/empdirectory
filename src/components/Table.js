


export default function Table (props) {

 const emp = props.employees.map(employee => {

return (
<tr>
    <td><img src={employee.picture.thumbnail}></img>  </td>
    <td>{employee.name.first}  </td>
    <td>{employee.name.last}  </td>
    <td>{employee.cell}  </td>
</tr>

)

 })


 return (<table>
     <tr> 
         <th> Picture </th>
         <th> First Name </th>
         <th> Last Name </th>
         <th> Phone </th>
     </tr>
     
{emp}

 </table>)

}



