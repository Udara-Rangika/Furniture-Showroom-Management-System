import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Furniture.css";
import swal from 'sweetalert';

export default function EditVehicle(){
    const {state} = useLocation();
    const navigate = useNavigate();

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
        axios.put(`http://localhost:8070/transport/update/${editedVehicleID}`, newVehicle)
        .then(res => console.log(res.data));


        swal({
                title: "Vehicle Successfully Updated",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/vehicleDetails');
            });
    }

    return(
        <>
        <div className="body">
       <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card2">
        <div className="card-header">
				<h2>UPDATE VEHICLE</h2></div>
                <div className="card-body">
        <form onSubmit={sendVehicle}>
            <div className="mb-3">
                <label for="vid" className="form-label">Vehicle ID</label>
                <input type="text" className="form-control" id="vid" autoComplete="off" value={vid} disabled/>
            </div>
            <div className="mb-3">
                <label for="vtype" className="form-label">Vehicle Type</label>
                <select type="text" className="form-control" id="vtype" autoComplete="off" value={vtype}
                onChange={(e)=>{
                    setVtype(e.target.value);}}
                >
                    <option>--Vehicle Type--</option>
                    <option>Truck</option>
                    <option>Buddy Lorry</option>
                    <option>Lorry</option>
                    <option>Cargo Van</option>
                    </select>
            </div>
            <div className="mb-3">
                <label for="year" className="form-label">Registered Year</label>
                <input type="number" className="form-control" id="year" autoComplete="off" value={year} onChange={(e)=>{
                    setYear(e.target.value);}}
                />
            </div>
            <div className="mb-3">
                <label for="rnumber" className="form-label">Registration Number</label>
                <input type="text" className="form-control" id="rnumber" autoComplete="off" value={rnumber} onChange={(e)=>{
                    setRnumber(e.target.value);}}
                />
            </div>
            <div className="mb-3">
                <label for="capacity" className="form-label">Vehicle Capacity</label>
                <input type="text" className="form-control" id="capacity" autoComplete="off" value={capacity} onChange={(e)=>{
                    setCapacity(e.target.value);}}
                />
            </div>
            <br/>
            
            <div className="form-group form-button">
                    <button className="btn btn-danger" style={{fontSize:"18px"}} onClick={() => {navigate("/vehicleDetails")}}>CANCEL</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary" style={{fontSize: "18px"}}>UPDATE</button>
            </div>
        </form>
        </div></div></div></div></div>
        </>          
    )

}