import React,{useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import "./Furniture.css";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function AddDriver(){

    const navigate = useNavigate();
    const [contactErr, setContactErr] = useState();
    const [lnumErr, setLnumErr] = useState();

    const[did, setDid] = useState("");
    const[name, setName] = useState("");
    const[dob, setDob] = useState("");
    const[address, setAddress] = useState("");
    const[contact, setContact] = useState("");
    const[lnumber, setLnumber] = useState("");
    const[experience, setExperience] = useState("");

    function sendData(e){
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

        if (did == "" || name == "" || dob == "" || address == "" || contact == "" || lnumber == "" || experience == ""){
            alert("Please fill out this field.")
          }else if(contact.length <=9 || lnumber.length <=3){  
            setContactErr("Please enter a valid Contact Number")
            setLnumErr("Please enter a valid License Number")
          }
          else{

        axios.post("http://localhost:8070/driver/add",newDriver)
        .then(res => console.log(res.data));


        swal({
                title: "Driver Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/driverDetails');
            });
    }}

    //Demo Button Values
    const demo = () => {

        setDid("D006");
        setName("Nimal Perera");
        setDob("1963-06-12");
        setAddress("Kaduwela, Malabe");
        setContact("0777562149");
        setLnumber("L123");
        setExperience("8");
    
    };

    return(
        
        <div className="body">
        <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card1">
        <div className="card-header">
				<h2>ADD DRIVER</h2></div>
                <div className="card-body">
            <form onSubmit={sendData}>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-id-card"></i></span>
						</div>
                    <label for="did" className="form-label"></label>
                    <input type="text" required className="form-control" id="did" value={did} placeholder="Driver ID" onChange={(e)=>{
                        setDid(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-signature"></i></span>
						</div>   
                    <label for="name" className="form-label"></label>
                    <input type="text" required className="form-control" id="name" value={name} placeholder="Driver Name" onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-calendar-day"></i></span>
						</div>
                <label for="dob" className="form-label"></label>
                    <input type="date" required className="form-control" id="dob" value={dob} placeholder="Date of Birth" onChange={(e)=>{
                        setDob(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-location-dot"></i></span>
						</div>
                <label for="address" className="form-label"></label>
                    <input type="text" required className="form-control" id="address" value={address} placeholder="Address" onChange={(e)=>{
                        setAddress(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-phone"></i></span>
						</div>
                <label for="contact" className="form-label"></label>
                    <input type="text" required className="form-control" id="contact" value={contact} placeholder="Contact Number" onChange={(e)=>{
                        setContact(e.target.value);
                    }}/>
                </div>&nbsp;
                {contactErr && <p class="error-message" style={{color:"red",fontWeight:"bold"}}>{contactErr}</p>}
                </div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-hashtag"></i></span>
						</div>
                <label for="lnumber" className="form-label"></label>
                    <input type="text" required className="form-control" id="lnumber" value={lnumber} placeholder="Driving License Number" onChange={(e)=>{
                        setLnumber(e.target.value);
                    }}/>
                </div>&nbsp;
                {lnumErr && <p class="error-message" style={{color:"red",fontWeight:"bold"}}>{lnumErr}</p>}
                </div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i class="fa-solid fa-person-circle-plus"></i></span>
						</div>
                <label for="experience" className="form-label"></label>
                    <input type="text" required className="form-control" id="experience" value={experience} placeholder="Driving Experience (Years)" onChange={(e)=>{
                        setExperience(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <button type="submit" className="btn btn-primary" style={{fontSize:"18px"}}>SUBMIT</button>&nbsp;&nbsp;
                <input type="reset" className="btn btn-danger" style={{fontSize:"18px"}} value="RESET"></input>&nbsp;&nbsp;
                <button type="button" onClick={demo} className="btn btn-success" style={{fontSize:"18px"}}>DEMO</button>
                </form>
                </div></div></div></div></div>
                
    )
}

export default AddDriver;