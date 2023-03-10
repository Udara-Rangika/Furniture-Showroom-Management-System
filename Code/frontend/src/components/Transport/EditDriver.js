import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Furniture.css";
import swal from 'sweetalert';

export default function EditDriver(){
    const {state} = useLocation();
    const navigate = useNavigate();

    const [did, setDid] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [lnumber, setLnumber] = useState("");
    const [experience, setExperience] = useState("");
    const [editedDriverID,setEditedDriverID] = useState("");


    useEffect(() =>{
        setDid(state.driver.did)
        setName(state.driver.name)
        setDob(state.driver.dob)
        setAddress(state.driver.address)
        setContact(state.driver.contact)
        setLnumber(state.driver.lnumber)
        setExperience(state.driver.experience)
        setEditedDriverID(state.driver._id);
    },[])

    function sendDriver(e){
        e.preventDefault();

        const newDriver = {
            did,
            name,
            dob,
            address,
            contact,
            lnumber,
            experience
        }
        
        

        /*url*/
        axios.put(`http://localhost:8070/driver/update/${editedDriverID}`, newDriver)
        .then(res => console.log(res.data));


        swal({
                title: "Driver Successfully Updated",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/driverDetails');
            });
    }

    return(
        <>
        <div className="body">
       <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card3">
        <div className="card-header">
				<h2>UPDATE DRIVER</h2></div>
                <div className="card-body">
        <form onSubmit={sendDriver}>
            <div className="mb-3">
                <label for="did" className="form-label">Driver ID</label>
                <input type="text" className="form-control" id="did" autoComplete="off" value={did} disabled/>
            </div>
            <div className="mb-3">
                <label for="name" className="form-label">Driver Name</label>
                <input type="text" className="form-control" id="name" autoComplete="off" value={name} disabled/>
            </div>
            <div className="mb-3">
                <label for="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dob" autoComplete="off" value={dob} disabled/>
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Driver Address</label>
                <input type="text" className="form-control" id="address" autoComplete="off" value={address} onChange={(e)=>{
                    setAddress(e.target.value);}}
                />
            </div>
            <div className="mb-3">
                <label for="contact" className="form-label">Driver Contact</label>
                <input type="number" className="form-control" id="contact" autoComplete="off" value={contact} onChange={(e)=>{
                    setContact(e.target.value);}}
                />
            </div>
            <div className="mb-3">
                <label for="lnumber" className="form-label">License Number</label>
                <input type="text" className="form-control" id="lnumber" autoComplete="off" value={lnumber} onChange={(e)=>{
                    setLnumber(e.target.value);}}
                />
            </div>
            <div className="mb-3">
                <label for="experience" className="form-label">Working Experience (Years)</label>
                <input type="number" className="form-control" id="experience" autoComplete="off" value={experience} onChange={(e)=>{
                    setExperience(e.target.value);}}
                />
            </div>
            <br/>
            
            <div className="form-group form-button">
                    <button className="btn btn-danger" style={{fontSize:"18px"}} onClick={() => {navigate("/driverDetails")}}>CANCEL</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary" style={{fontSize: "18px"}}>UPDATE</button>
            </div>
        </form>
        </div></div></div></div></div>
        </>          
    )

}