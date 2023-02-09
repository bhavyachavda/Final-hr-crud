import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Outlet, Link, useNavigate} from "react-router-dom";

function Edithr (){
    const [recid, setRecid] = useState('')
    const [employeepayroll, setEmployeepayroll] = useState("");
    const [socialsecurity, setSocialsecurity] = useState("");
    const [employeeid, setEmployeeid] = useState("");
    const [salary, setSalary] = useState("");
   
    

    useEffect(()=>{
        setupdatehrdata();
    },[])

    const navigate = useNavigate();
    const setupdatehrdata = async()=>{
        try {
            const eid = localStorage.getItem("bhavya");
            console.log("fetch id", eid);
            setRecid(eid);
            const req = await axios.get("http://localhost:8000/sethrdata",{params:{eid}})
            console.log(req.data[0].recid);
            setEmployeepayroll(req.data[0].employeepayroll);
            setSocialsecurity(req.data[0].socialsecurity);
            setEmployeeid(req.data[0].employeeid);
            setSalary(req.data[0].salary);
            
        } catch (error) {
            error.status(404);
        }
    }

    const handleUpdatehr = async(e) => {
        try {
            console.log(employeeid);
            e.preventDefault();
            const req = await axios.get("http://localhost:8000/updatehr",
            {params:{recid,employeepayroll,socialsecurity,employeeid,salary}})
            navigate("/hrdata");
        } catch (error) {
            
        }

        
        
    };
    const handleHome = () =>{
        navigate("/hrdata")
    }
    // const handleSubmit = () =>{

    // }
    return(
        <div>
            {/* <nav>
                <ul>
                    <li><Link to="/Employee">Employee</Link></li>
                </ul>
            </nav> */}
            <form>
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
                        <button className="btn btn-dark" type="submit" value="submit"  onClick={handleUpdatehr}>Submit</button>
                    </td>
                </tr>
            </table>
            </form>
            <Outlet/>
        </div>
    )   
}

export default Edithr;