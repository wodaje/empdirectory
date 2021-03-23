


export default function Table (props) {

 const emp = props.employees.map(employee => {

return (
<tr>
    <td><img src={employee.picture.thumbnail}></img>  </td>

</tr>

)

 })


 return (<table>
     <tr> 
         <th> Picture </th>
         <th> Name </th>
     </tr>
     
{emp}

 </table>)

}



