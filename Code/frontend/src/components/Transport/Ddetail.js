import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Furniture.css";
import jsPDF from "jspdf";
import imgData from '../Img/logo.png';


export default function Ddetail(){
    const {state} = useLocation();
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

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
        axios.put(`http://localhost:8070/driver/get/${editedDriverID}`, newDriver)
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
            doc.text(200, 250, 'Driver Details Report')
            doc.setLineWidth(2.0);
            doc.line(198, 255, 398, 255)
            doc.setFontSize(17)
            doc.setTextColor(0,0,0)
            doc.text(120, 330, 'Driver Details')
            doc.setFontSize(13)
            doc.text(120, 380, 'Driver ID :')
            doc.text(120, 410, 'Driver Name :')
            doc.text(120, 440, 'Date of Birth :')
            doc.text(120, 470, 'Driver Address :')
            doc.text(120, 500, 'Driver Contact Number :')
            doc.text(120, 530, 'Driver License Number :')
            doc.text(120, 560, 'Driving Experience (Years) :')
            doc.text(420, 640, 'Certified By :')
            doc.text(420, 660, 'Transport Admin')
            doc.setFontSize(12)
            doc.setFont('serif','normal')
            doc.text(380,380, state.driver.did)
            doc.text(380,410, state.driver.name)
            doc.text(380,440,`${state.driver.dob}`)
            doc.text(380,470, state.driver.address)
            doc.text(380,500,`${state.driver.contact}`)
            doc.text(380,530, state.driver.lnumber)
            doc.text(380,560, `${state.driver.experience}`)
            doc.setFontSize(11)
            doc.setTextColor(255,0,0)
            doc.text(80, 720, '* The given details were generated on ' + `${date}`)

            doc.save(state.driver.did + ' Report.pdf')
    }



    

    return(
        <>
        <div className="body">
        <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card3">
        <div className="card-header">
        <h2>DRIVER - {state.driver.did}</h2></div>
        <div className="card-body">
        <form onSubmit={sendDriver}>
            <div className="mb-3">
                <label for="did" className="form-label">Driver ID</label>
                <input type="text" className="form-control" id="did" autoComplete="off" value={did} disabled
                />
            </div>
            <div className="mb-3">
                <label for="name" className="form-label">Driver Name</label>
                <input type="text" className="form-control" id="name" autoComplete="off" value={name} disabled
                />
            </div>
            <div className="mb-3">
                <label for="dob" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dob" autoComplete="off" value={dob} disabled
                />
            </div>
            <div className="mb-3">
                <label for="address" className="form-label">Driver Address</label>
                <input type="text" className="form-control" id="address" autoComplete="off" value={address} disabled
                />
            </div>
            <div className="mb-3">
                <label for="contact" className="form-label">Driver Contact</label>
                <input type="number" className="form-control" id="contact" autoComplete="off" value={contact} disabled
                />
            </div>
            <div className="mb-3">
                <label for="lnumber" className="form-label">Driving License Number</label>
                <input type="text" className="form-control" id="lnumber" autoComplete="off" value={lnumber} disabled
                />
            </div>
            <div className="mb-3">
                <label for="experience" className="form-label">Driving Experience (Years)</label>
                <input type="number" className="form-control" id="experience" autoComplete="off" value={experience} disabled
                />
            </div>
            <br/>
            
            <div className="form-group form-button">
                    <button className="btn btn-primary" style={{fontSize:"18px", width:"100px"}} onClick={() => {navigate("/driverDetails")}}>OK</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={()=>jsPdfGenerator()} style={{fontSize:"18px", color:"white"}}>Generate Report</button>
            </div>
        </form>
        </div></div></div></div></div>
        </>          
    )

}