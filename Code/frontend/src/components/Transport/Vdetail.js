import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Furniture.css";
import jsPDF from "jspdf";
import imgData from '../Img/logo.png';

export default function Vdetail(){
    const {state} = useLocation();
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [vid, setVid] = useState("");
    const [vtype, setVtype] = useState("");
    const [year, setYear] = useState("");
    const [rnumber, setRnumber] = useState("");
    const [capacity, setCapacity] = useState("");
    const [editedVehicleID,setEditedVehicleID] = useState("");


    useEffect(() =>{
        setVid(state.vehicle.vid)
        setVtype(state.vehicle.vtype)
        setYear(state.vehicle.year)
        setRnumber(state.vehicle.rnumber)
        setCapacity(state.vehicle.capacity)
        setEditedVehicleID(state.vehicle._id);
    },[])

    function sendVehicle(e){
        e.preventDefault();

        const newVehicle = {
            vid,
            vtype,
            year,
            rnumber,
            capacity,
        }
        
        

        /*url*/
        axios.put(`http://localhost:8070/transport/get/${editedVehicleID}`, newVehicle)
    }


    const jsPdfGenerator = ()=>{
        var doc = new jsPDF('p', 'pt');

        doc.addImage(imgData, 'png', 60, 40, 200, 0)

        doc.rect(45, 45, doc.internal.pageSize.width - 95, doc.internal.pageSize.height - 95, 'S');
            doc.setFontSize(12)
            doc.text(385, 110, '"Comfort Zone"')
            doc.text(385, 125, 'New Kandy Road, Malabe')
            doc.text(385, 140, '+94 777 555 551')
            doc.text(385, 155, '+94 777 666 552')
            doc.text(385, 170, 'comfortzone@sltnet.lk')
            doc.setFontSize(21)
            doc.setTextColor(255,0,0)
            doc.setFont('serif','bold')
            doc.text(200, 250, 'Vehicle Details Report')
            doc.setLineWidth(2.0);
            doc.line(198, 255, 411, 255)
            doc.setFontSize(17)
            doc.setTextColor(0,0,0)
            doc.text(120, 330, 'Vehicle Details')
            doc.setFontSize(13)
            doc.text(120, 380, 'Vehicle ID :')
            doc.text(120, 410, 'Vehicle Type :')
            doc.text(120, 440, 'Registered Year :')
            doc.text(120, 470, 'Registration Number :')
            doc.text(120, 500, 'Vehicle Capacity :')
            doc.text(420, 580, 'Certified By :')
            doc.text(420, 600, 'Transport Admin')
            doc.setFontSize(12)
            doc.setFont('serif','normal')
            doc.text(380,380, state.vehicle.vid)
            doc.text(380,410, state.vehicle.vtype)
            doc.text(380,440,`${state.vehicle.year}`)
            doc.text(380,470, state.vehicle.rnumber)
            doc.text(380,500,`${state.vehicle.capacity}`)
            doc.setFontSize(11)
            doc.setTextColor(255,0,0)
            doc.text(80, 660, '* The given details were generated on ' + `${date}`)

            doc.save(state.vehicle.vid + ' Report.pdf')
    }


    return(
        <>
        <div className="body">
        <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card2">
        <div className="card-header">
        <h2>VEHICLE - {state.vehicle.vid}</h2></div>
        <div className="card-body">
        <form onSubmit={sendVehicle}>
            <div className="mb-3">
                <label for="vid" className="form-label">Vehicle ID</label>
                <input type="text" className="form-control" id="vid" autoComplete="off" value={vid} disabled
                />
            </div>
            <div className="mb-3">
                <label for="vtype" className="form-label">Vehicle Type</label>
                <input type="text" className="form-control" id="vtype" autoComplete="off" value={vtype} disabled
                />
            </div>
            <div className="mb-3">
                <label for="year" className="form-label">Registered Year</label>
                <input type="number" className="form-control" id="year" autoComplete="off" value={year} disabled
                />
            </div>
            <div className="mb-3">
                <label for="rnumber" className="form-label">Registration Number</label>
                <input type="text" className="form-control" id="rnumber" autoComplete="off" value={rnumber} disabled
                />
            </div>
            <div className="mb-3">
                <label for="capacity" className="form-label">Vehicle Capacity</label>
                <input type="text" className="form-control" id="capacity" autoComplete="off" value={capacity} disabled
                />
            </div>
            <br/>
            
            <div className="form-group form-button">
                    <button className="btn btn-primary" style={{fontSize:"18px", width:"100px"}} onClick={() => {navigate("/vehicleDetails")}}>OK</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={()=>jsPdfGenerator()} style={{fontSize:"18px", color:"white"}}>Generate Report</button>
            </div>
        </form>
        </div></div></div></div></div>

        </>          

        

    )
}