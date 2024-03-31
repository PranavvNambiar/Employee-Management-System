import {useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const Employee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(e => {
                console.error(e);
            })
        }
    }, [id])
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
            alert('Please fill out all fields');
            return;
        }
        if (!emailRegex.test(email.trim())) {
            alert('Please enter a valid email address');
            return;
        }
        const employee = {firstName, lastName, email};
        console.log(employee);
        if(id){
            updateEmployee(id, employee).then((response) =>{
                console.log(response.data);
                navigator('/employees')
            }).catch(e => {
                console.error(e);
            })
        }else{
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch(e => {
                console.error(e);
            })
        }
        

        
    }
    const pageTitle = () => {
        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="card mb-3">
                { pageTitle() }
                <div className="card-body" style={{width: "500px"}}>
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>First Name</label>
                            <input className='form-control' type="text" name="firstName" id="firstName" placeholder='Enter Employee First Name' value={firstName} onChange={handleFirstName}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Last Name</label>
                            <input className='form-control' type="text" name="lastName" id="lastName" placeholder='Enter Employee Last Name' value={lastName} onChange={handleLastName}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className='form-label'>Email ID</label>
                            <input className='form-control' type="text" name="email" id="email" placeholder='Enter Employee Email' value={email} onChange={handleEmail}/>
                        </div>
                        <button type="button" className='btn btn-outline-dark' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee