import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Outlet, Link, useNavigate} from "react-router-dom";

function Editlocation (){
    const [recid, setRecid] = useState('')
    const [locations, setLocations] = useState("");
    const [buildingid, setBuildingid] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [nmanager, setNmanager] = useState("");
   
    

    useEffect(()=>{
        setupdatelocationdata();
    },[])

    const navigate = useNavigate();
    const setupdatelocationdata = async()=>{
        try {
            const eid = localStorage.getItem("id");
            console.log("fetch id", eid);
            setRecid(eid);
            const req = await axios.get("http://localhost:8000/setlocationdata",{params:{eid}})
            console.log(req.data[0].recid);
            setLocations(req.data[0].locations);
            setBuildingid(req.data[0].buildingid);
            setAddress(req.data[0].address);
            setZipcode(req.data[0].zipcode);
            setNmanager(req.data[0].nmanager);
            
        } catch (error) {
            error.status(404);
        }
    }

    const handleUpdatelocation = async(e) => {
        try {
            console.log(recid);
            e.preventDefault();
            const req = await axios.get("http://localhost:8000/updatelocation",
            {params:{recid,locations,buildingid,address,zipcode,nmanager}})
            navigate("/locationdata");
        } catch (error) {
            
        }

        
        
    };
    const handleHome = () =>{
        navigate("/locationdata")
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
                    <td><label for="locations">Location</label></td>
                    <td><input type="text" id="locations" name="locations" value={locations} onChange={(e)=>{
                        setLocations(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="buildingid">Building Id</label></td>
                    <td><input type="number" id="buildingid" name="buildingid" value={buildingid} onChange={(e)=>{
                        setBuildingid(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="address">Address</label></td>
                    <td><input type="text" id="address" name="address" value={address} onChange={(e)=>{
                        setAddress(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="zipcode">Zipcode</label></td>
                    <td><input type="number" id="zipcode" name="zipcode" value={zipcode} onChange={(e)=>{
                        setZipcode(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="nmanager">Manager</label></td>
                    <td><input type="text" id="nmanager" name="nmanager" value={nmanager} onChange={(e)=>{
                        setNmanager(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <br/><br/>
                    <td>
                        <button className="btn btn-dark" type="button" value="Back"  onClick={handleHome}>Back</button>&nbsp;
                        <button className="btn btn-dark" type="submit" value="submit"  onClick={handleUpdatelocation}>Submit</button>
                    </td>
                </tr>
            </table>
            </form>
            <Outlet/>
        </div>
    )   
}

export default Editlocation;