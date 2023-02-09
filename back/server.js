const express = require("express");
const cors = require("cors");
var mysql = require("mysql");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req,res)=>{
    res.json({message: "Hello from server!"});
})

var con = mysql.createConnection({
    host: "192.168.2.8",
    user: "trainee",
    password: "trainee@123",
    database: "trainee"
});

con.connect(function (err){
    if(err) throw err;
    console.log("Database Connected");
});

app.post("/employee", (req,res)=>{
    console.log(req.body);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const employeeid = req.body.employeeid;
    const contactnumber = req.body.contactnumber;
    const homeaddress = req.body.homeaddress;
    const worklocation = req.body.worklocation;

    con.query(`insert into employee19(firstname, lastname, employeeid, contactnumber, homeaddress, worklocation) values("${firstname}","${lastname}","${employeeid}","${contactnumber}","${homeaddress}","${worklocation}")`, function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("inserted");
    });

});

app.get("/list", (req,res)=>{
    //console.log(req.body)
    con.query(`select * from employee19 where isactive=1`,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get("/employeedata", async(req,res)=>{
    con.connect(function(err,result){
        const eid = req.query.eid;
        console.log("fetch id",eid);
        con.query(`select * from employee19 where recid="${eid}"`, function(err,result){
            if(err) throw err;
            res.send(result);
        })
    })
});

app.get("/updateemp", async(req,res)=>{
    con.connect(function(err,result){
        const eid = req.query.recid;
        console.log("bhavya",eid);
        const firstname = req.query.firstname;
        const lastname = req.query.lastname;
        const contactnumber = req.query.contactnumber;
        const homeaddress = req.query.homeaddress;
        const worklocation = req.query.worklocation;
        console.log("fetch id",eid);
        con.query(`update employee19 set firstname="${firstname}", lastname="${lastname}", contactnumber="${contactnumber}", homeaddress="${homeaddress}", worklocation="${worklocation}" where recid="${eid}" `,function(err,result){
            if(err) throw err;
            res.send(result);
        })

    })
})

app.get("/deletedata",async(req,res)=>{
    con.connect(function(err,result){
        console.log("hello");
        const eid = req.query.recid;
        console.log(eid);
        con.query(`update employee19 set isactive='false' where recid="${eid}"`,function(err,result){
            if(err) throw err;

            res.send(result);
            console.log(result);
        })
    })
})

//HR Data crud of add hr 

app.post("/hr", (req,res)=>{
    console.log(req.body);
    const employeepayroll = req.body.employeepayroll;
    const socialsecurity = req.body.socialsecurity;
    const employeeid = req.body.employeeid;
    const salary = req.body.salary;


    con.query(`insert into hr19(employeepayroll, socialsecurity, employeeid, salary) values("${employeepayroll}","${socialsecurity}","${employeeid}","${salary}")`, function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("inserted");
    });

});

//hr data 

app.get("/hrdata", (req,res)=>{
    //console.log(req.body)
    con.query(`select * from hr19 where isactive=1 `,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//delete data of hr
app.get("/deletedatahr",async(req,res)=>{
    con.connect(function(err,result){
        console.log("hello");
        const eid = req.query.recid;
        console.log(eid);
        con.query(`update hr19 set isactive='false' where recid="${eid}"`,function(err,result){
            if(err) throw err;

            res.send(result);
            console.log(result);
        })
    })
})

app.get("/sethrdata", async(req,res)=>{
    con.connect(function(err,result){
        const eid = req.query.eid;
        console.log("fetch id",eid);
        con.query(`select * from hr19 where recid="${eid}"`, function(err,result){
            if(err) throw err;
            res.send(result);
        })
    })
});
// hr update
app.get("/updatehr", async(req,res)=>{
    con.connect(function(err,result){
        const eid = req.query.recid;
        console.log("bhavya",eid);
        const employeepayroll = req.query.employeepayroll;
        const socialsecurity = req.query.socialsecurity;
        const employeeid = req.query.employeeid;
        const salary = req.query.salary;
        console.log("fetch id",eid);
        con.query(`update hr19 set employeepayroll="${employeepayroll}", socialsecurity="${socialsecurity}", employeeid="${employeeid}", salary="${salary}" where recid="${eid}" `,function(err,result){
            if(err) throw err;
            res.send(result);
        })

    })
})

//Location Data crud of add location 

app.post("/location", (req,res)=>{
    console.log(req.body);
    const locations = req.body.locations;
    const buildingid = req.body.buildingid;
    const address = req.body.address;
    const zipcode = req.body.zipcode;
    const nmanager = req.body.nmanager;


    con.query(`insert into location19(locations, buildingid, address, zipcode, nmanager) values("${locations}","${buildingid}","${address}","${zipcode}", "${nmanager}")`, function(err, result){
        if(err) throw err;
        console.log(result);
        console.log("inserted");
    });

});

//location data 

app.get("/locationdata", (req,res)=>{
    //console.log(req.body)
    con.query(`select * from location19 where isactive=1 `,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//delete data of location
app.get("/deletedatalocation",async(req,res)=>{
    con.connect(function(err,result){
        console.log("hello");
        const eid = req.query.recid;
        console.log(eid);
        con.query(`update location19 set isactive='false' where recid="${eid}"`,function(err,result){
            if(err) throw err;

            res.send(result);
            console.log(result);
        })
    })
})

app.get("/setlocationdata", async(req,res)=>{
    con.connect(function(err,result){
        const eid = req.query.eid;
        console.log("fetch id",eid);
        con.query(`select * from location19 where recid="${eid}"`, function(err,result){
            if(err) throw err;
            res.send(result);
        })
    })
});
// location update
app.get("/updatelocation", async(req,res)=>{
    con.connect(function(err,result){
        const eid = req.query.recid;
        console.log("bhavya",eid);
        const locations = req.query.locations;
        const buildingid = req.query.buildingid;
        const address = req.query.address;
        const zipcode = req.query.zipcode;
        const nmanager = req.query.nmanager;
        console.log("fetch id",eid);
        con.query(`update location19 set locations="${locations}", buildingid="${buildingid}", address="${address}", zipcode="${zipcode}", nmanager="${nmanager}" where recid="${eid}" `,function(err,result){
            if(err) throw err;
            res.send(result);
        })

    })
})

app.listen(8000, () =>{
    console.log(`Server is running on port 8000`);
});