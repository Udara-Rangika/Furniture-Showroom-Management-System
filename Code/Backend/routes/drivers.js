const router  = require("express").Router();
const res = require("express/lib/response");
let Driver = require("../models/Driver");

http://localhost:8070/driver/add

router.route("/add").post((req,res)=>{
    const did = req.body.did;
    const name = req.body.name;
    const dob = req.body.dob;
    const address = req.body.address;
    const contact = Number(req.body.contact);
    const lnumber = req.body.lnumber;
    const experience = Number(req.body.experience);

    const newDriver = new Driver({

        did,
        name,
        dob,
        address,
        contact,
        lnumber,
        experience
    })

    newDriver.save().then(()=>{
        res.json("Driver Added")
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8070/driver

router.route("/").get((req,res)=>{

    Driver.find().then((drivers)=>{
        res.json(drivers)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/driver/updatee/:id

router.route("/update/:id").put(async(req,res)=>{
    let driverId = req.params.id;
    const {did, name, dob, address, contact, lnumber, experience} = req.body;

    const updateDriver = {
        did,
        name,
        dob,
        address,
        contact,
        lnumber,
        experience
    }

    const update = await Driver.findByIdAndUpdate(driverId,updateDriver)
    .then(()=>{
    res.status(200).send({status: "Driver updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

http://localhost:8070/driver/delete/

router.route("/delete/:id").delete(async(req,res)=>{
    let driverId = req.params.id;
    
    await Driver.findByIdAndDelete(driverId)
    .then(()=>{
        res.status(200).send({status: "Driver deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete driver", error: err.message});
    })
})

router.route("/gett/:id").get(async(req,res)=>{
    let driverId = req.params.id;
    const driver = await Driver.findById(driverId)
    .then((driver)=>{
        res.status(200).send({status: "Driver fetched", driver})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get driver", error: err.message});
    })
})

module.exports = router;