import React, { useState } from 'react';
import axios from 'axios';
import { Outlet,Link, useNavigate } from 'react-router-dom';

const Location = () =>{
    const [locations, setLocations] = useState("");
    const [ buildingid, setBuildingid] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [nmanager, setNmanager] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/location",{
            locations: locations,
            buildingid: buildingid,
            address: address,
            zipcode: zipcode,
            nmanager: nmanager
        })
    };    
    
    const handleHome = () =>{
        navigate("/locationdata")
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
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
                    <td><label for="zipcode">zip code</label></td>
                    <td><input type="number" id="zipcode" name="zipcode" value={zipcode} onChange={(e)=>{
                        setZipcode(e.target.value);
                    }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="nmanager">Manager Name</label></td>
                    <td><input type="text" id="nmanager" name="nmanager" value={nmanager} onChange={(e)=>{
                        setNmanager(e.target.value);
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

export default Location;