import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet,Link, useNavigate } from 'react-router-dom';

const Hrlist = () =>{
    const [anshr, setAnshr] = useState([]);
    const [reloadpagehr, setreloadpagehr] = useState(false);


    const navigate = useNavigate();

    const handlehrdata = async () => {
        await axios.get("http://localhost:8000/hrdata",)
            .then((res)=>{
                setAnshr(res.data);
            })
        }

        useEffect(()=>{
            handlehrdata();
        },[reloadpagehr])

        const handleEdithr = (recid) =>{
            localStorage.setItem("bhavya",recid)
            navigate("/Edithr")
        }

        const handleHomehr = () =>{
            navigate("/")
        }
        
        const handleAddhr = () =>{
            navigate("/hr")
        }
        
        const handleDeletehr = async(recid) =>{
            try {
                console.log("Delete data",recid)
                const req = await axios.get("http://localhost:8000/deletedatahr",
                {params:{recid}})
                setreloadpagehr(!reloadpagehr)
            } catch (error) {
                
            }
        }

    return(
        <div>
            <button type="button" value="Home" onClick={()=>{handleHomehr()}} className="btn btn-dark" style={ {"marginTop": "5rem","marginLeft": "10rem"}}>Home</button>
            <button type="button" value="ADDHR" onClick={()=>{handleAddhr()}} className="btn btn-primary" style={ {"marginTop": "5rem","marginLeft": "1rem"}}>Add HR</button>
            <table className="table table-striped" style={{ "width": "70vw", "marginTop": "2rem", "marginLeft": "10rem" }}>
                <tbody>
                    <tr>
                        <th>Recid</th>
                        <th>EmployeePayroll</th>
                        <th>Social Security</th>
                        <th>Employee Id</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
             {
                anshr.map((result)=>(
                    <tr>
                        <td>{result.recid}</td>
                        <td>{result.employeepayroll}</td>
                        <td>{result.socialsecurity}</td>
                        <td>{result.employeeid}</td>
                        <td>{result.salary}</td>
                        <td>
                            <button type="button" value="Edit" onClick={()=>{handleEdithr(result.recid)}} className="btn btn-primary">Edit</button>&nbsp;
                            <button type="button" value="Delete" onClick={()=>{handleDeletehr(result.recid)}} className="btn btn-warning">Delete</button>
                        </td>
                    </tr>
                ))
             }
            </tbody>
            </table>
        </div>
    );
};

export default Hrlist;