import React, {useState} from 'react';
import axios from "axios";
import {Outlet, Link, useNavigate} from "react-router-dom";

const Employee = () =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [employeeid, setEmployeeid] = useState("");
    const [contactnumber, setContactnumber] = useState("");
    const [homeaddress, setHomeaddress] = useState("");
    const [worklocation, setWorklocation] = useState("");
    
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // e.preventDefault();
        axios.post("http://localhost:8000/employee",{
            firstname: firstname,
            lastname: lastname,
            employeeid: employeeid,
            contactnumber: contactnumber,
            homeaddress: homeaddress,
            worklocation: worklocation,
        })
        navigate("/List")
    };

    const handleHome = () =>{
        navigate("/")
    }

    return(
        <div>
            {/* <nav>
                <ul>
                    <li><Link to="/Employee">Employee</Link></li>
                </ul>
            </nav> */}
            <form onSubmit={handleSubmit}>
                <table>
                <tr>
                    <td><label for="firstname">Firstname</label></td>
                    <td>
                        <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e)=>{
                            setFirstname(e.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                <td><label for="lastname">Lastname</label></td>
                    <td>
                        <input type="text" id="lastname" name="lastname" value={lastname} onChange={(e)=>{
                            setLastname(e.target.value);
                        }}/>
                    </td>
                </tr>
                {/* <tr>
                    <td><label for="employeeid">Employee Id</label></td>
                    <td>
                        <input type="number" id="employeeid" name="employeeid" value={employeeid} onChange={(e)=>{
                            setEmployeeid(e.target.value);
                        }}/>
                    </td>
                </tr> */}
                <tr>
                    <td><label for="contactnumber">Contact Number</label></td>
                    <td>
                        <input type="phone" id="contactnumber" name="contactnumber" value={contactnumber} onChange={(e)=>{
                            setContactnumber(e.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="homeaddress">Home Address</label></td>
                    <td>
                        <input type="text" id="homeaddress" name="homeaddress" value={homeaddress} onChange={(e)=>{
                            setHomeaddress(e.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="worklocation">Work Location</label></td>
                    <td>
                        <input type="text" id="worklocation" name="worklocation" value={worklocation} onChange={(e)=>{
                            setWorklocation(e.target.value);
                        }}/>
                    </td>
                </tr>
                <tr>
                    <br/><br/>
                    <td>
                        <button className="btn btn-dark" type="button" value="Back" onClick={handleHome}>Back</button>&nbsp;
                        <button className="btn btn-dark" type="submit" value="submit" onClick={handleSubmit}>Submit</button>
                    </td>
                </tr>
                </table>
            </form>
            <Outlet/>
        </div>
    )   
}

export default Employee;