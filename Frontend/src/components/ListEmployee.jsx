import { useEffect, useState } from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(()=>{
    getEmployees();
  }, [])
  
  const getEmployees = () => {
    listEmployees().then((response)=>{
      setEmployees(response.data);
    }).catch((e) =>{
      console.error(e)
    })
  }
  const addNewEmployee = () => {
    navigator("/add-employee")
  }
  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`)
  }
  const deleteEmployees = (id) => {
    deleteEmployee(id).then((response) => {
      getEmployees();
    }).catch(e => {
      console.error(e)
    })
  }
  return (
    <>
      <h2 style={{textAlign: 'center'}}>List Of Employees</h2>
      <div className='container'>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee ID</th>  
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => 
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={() => deleteEmployees(employee.id)}>Delete</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
    <div id="button">
     <button type="button" className="btn btn-dark mb-2" onClick={addNewEmployee}>Add Employee</button>
    </div>
    </>

  )
}

export default ListEmployee