import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet,Link, useNavigate } from 'react-router-dom';

const Locationlist = () =>{
    const [anshr, setAnshr] = useState([]);
    const [reloadpagelocation, setreloadpagelocation] = useState(false);


    const navigate = useNavigate();

    const handlelocationdata = async () => {
        await axios.get("http://localhost:8000/locationdata",)
            .then((res)=>{
                setAnshr(res.data);
            })
        }

        useEffect(()=>{
            handlelocationdata();
        },[reloadpagelocation])

        const handleEditlocation = (recid) =>{
            localStorage.setItem("id",recid)
            navigate("/Editlocation")
        }

        const handleHomelocation = () =>{
            navigate("/")
        }
        
        const handleAddlocation = () =>{
            navigate("/location")
        }
        
        const handleDeletelocation = async(recid) =>{
            try {
                console.log("Delete data",recid)
                const req = await axios.get("http://localhost:8000/deletedatalocation",
                {params:{recid}})
                setreloadpagelocation(!reloadpagelocation)
            } catch (error) {
                
            }
        }

    return(
        <div>
            <button type="button" value="Home" onClick={()=>{handleHomelocation()}} className="btn btn-dark" style={ {"marginTop": "5rem","marginLeft": "10rem"}}>Home</button>
            <button type="button" value="Add Location" onClick={()=>{handleAddlocation()}} className="btn btn-primary" style={ {"marginTop": "5rem","marginLeft": "1rem"}}>Add Location</button>
            <table className="table table-striped" style={{ "width": "70vw", "marginTop": "2rem", "marginLeft": "10rem" }}>
                <tbody>
                    <tr>
                        <th>Recid</th>
                        <th>Location</th>
                        <th>Building Id</th>
                        <th>Address</th>
                        <th>Zipcode</th>
                        <th>Manager</th>
                        <th>Action</th>
                    </tr>
             {
                anshr.map((result)=>(
                    <tr>
                        <td>{result.recid}</td>
                        <td>{result.locations}</td>
                        <td>{result.buildingid}</td>
                        <td>{result.address}</td>
                        <td>{result.zipcode}</td>
                        <td>{result.nmanager}</td>
                        <td>
                            <button type="button" value="Edit" onClick={()=>{handleEditlocation(result.recid)}} className="btn btn-primary">Edit</button>&nbsp;
                            <button type="button" value="Delete" onClick={()=>{handleDeletelocation(result.recid)}} className="btn btn-warning">Delete</button>
                        </td>
                    </tr>
                ))
             }
            </tbody>
            </table>
        </div>
    );
};

export default Locationlist;