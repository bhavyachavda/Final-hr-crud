import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Outlet, Link, useNavigate} from "react-router-dom";

function Editemployee (){
    const [recid, setRecid] = useState('')
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [employeeid, setEmployeeid] = useState();
    const [contactnumber, setContactnumber] = useState("");
    const [homeaddress, setHomeaddress] = useState("");
    const [worklocation, setWorklocation] = useState("");
    

    useEffect(()=>{
        setupdatedata();
    },[])

    const navigate = useNavigate();
    const setupdatedata = async()=>{
        try {
            const eid = localStorage.getItem("id");
            console.log("fetch id", eid);
            setRecid(eid);
            const req = await axios.get("http://localhost:8000/employeedata",{params:{eid}})
            console.log(req.data[0].firstname);
            setFirstname(req.data[0].firstname);
            setLastname(req.data[0].lastname);
            setEmployeeid(req.data[0].employeeid);
            setContactnumber(req.data[0].contactnumber);
            setHomeaddress(req.data[0].homeaddress);
            setWorklocation(req.data[0].worklocation);
        } catch (error) {
            error.status(404);
        }
    }

    const handleUpdate = async(e) => {
        try {
            e.preventDefault();
            const req = await axios.get("http://localhost:8000/updateemp",
            {params:{recid,firstname,lastname,employeeid,contactnumber,homeaddress,worklocation}})
            navigate("/List");
        } catch (error) {
            
        }

    };

    const handleHome = () =>{
        navigate("/");
    }
    return(
        <div>
            {/* <nav>
                <ul>
                    <li><Link to="/Employee">Employee</Link></li>
                </ul>
            </nav> */}
            <form onSubmit={handleUpdate}>
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
                        <input className="btn btn-dark" type="submit" value="submit" />&nbsp;
                        <button className='btn btn-dark' type="button" value="Back" onClick={handleHome}>Back</button>
                    </td>
                </tr>
                </table>
            </form>
            <Outlet/>
        </div>
    )   
}

export default Editemployee;