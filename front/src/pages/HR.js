import React, { useState } from 'react';
import axios from 'axios';
import { Outlet,Link, useNavigate } from 'react-router-dom';

const HR = () =>{
    const [employeepayroll, setEmployeepayroll] = useState("");
    const [socialsecurity, setSocialsecurity] = useState("");
    const [employeeid, setEmployeeid] = useState("");
    const [salary, setSalary] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/hr",{
            employeepayroll: employeepayroll,
            socialsecurity: socialsecurity,
            employeeid: employeeid,
            salary: salary
        })
    };    
    
    const handleHome = () =>{
        navigate("/hrdata")
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><label for="employeepayroll">EmployeePayroll</label></td>
                    <td><input type="text" id="employeepayroll" name="employeepayroll" value={employeepayroll} onChange={(e)=>{
                        setEmployeepayroll(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="socialsecurity">Social Security</label></td>
                    <td><input type="text" id="socialsecurity" name="socialsecurity" value={socialsecurity} onChange={(e)=>{
                        setSocialsecurity(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="employeeid">Employeeid</label></td>
                    <td><input type="number" id="employeeid" name="employeeid" value={employeeid} onChange={(e)=>{
                        setEmployeeid(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="salary">Salary</label></td>
                    <td><input type="number" id="salary" name="salary" value={salary} onChange={(e)=>{
                        setSalary(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <br/><br/>
                    <td>
                        <button className="btn btn-dark" type="button" value="Back"  onClick={handleHome}>Back</button>&nbsp;
                        <button className="btn btn-dark" type="submit" value="submit" onClick={handleSubmit}>Submit</button>
                    </td>
                </tr>
            </table>
           </form>
           <Outlet/>
        </div>
    )
}

export default HR;