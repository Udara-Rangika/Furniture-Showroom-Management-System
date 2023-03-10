const router  = require("express").Router();
const res = require("express/lib/response");
let Transport = require("../models/Transport");

http://localhost:8070/transport/add/

router.route("/add").post((req,res)=>{
    const vid = req.body.vid;
    const vtype = req.body.vtype;
    const year = Number(req.body.year);
    const rnumber = req.body.rnumber;
    const capacity = req.body.capacity;

    const newTransport = new Transport({

        vid,
        vtype,
        year,
        rnumber,
        capacity
    })

    newTransport.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })
})

http://localhost:8070/transport

router.route("/").get((req,res)=>{

    Transport.find().then((transports)=>{
        res.json(transports)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/transport/update/:id

router.route("/update/:id").put(async(req,res)=>{
    let transportId = req.params.id;
    const {vid, vtype, year, rnumber, capacity} = req.body;

    const updateTransport = {
        vid,
        vtype,
        year,
        rnumber,
        capacity
    }

    const update = await Transport.findByIdAndUpdate(transportId,updateTransport)
    .then(()=>{
    res.status(200).send({status: "Vehice updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

2

router.route("/delete/:id").delete(async(req,res)=>{
    let transportId = req.params.id;
    
    await Transport.findByIdAndDelete(transportId)
    .then(()=>{
        res.status(200).send({status: "Vehicle deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete vehicle", error: err.message});
    })
})

//get details

router.route("/get/:id").get(async(req,res)=>{
    let transportId = req.params.id;
    const transport = await Transport.findById(transportId)
    .then((transport)=>{
        res.status(200).send({status: "Vehicle fetched", transport})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get vehicle", error: err.message});
    })
})




module.exports = router;