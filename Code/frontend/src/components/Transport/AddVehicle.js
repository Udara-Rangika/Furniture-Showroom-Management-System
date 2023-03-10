import React,{useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import "./Furniture.css";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function AddVehicle(){

    const navigate = useNavigate();
    const [rnumErr, setRnumErr] = useState();

    const[vid, setVid] = useState("");
    const[vtype, setVtype] = useState("");
    const[year, setYear] = useState("");
    const[rnumber, setRnumber] = useState("");
    const[capacity, setCapacity] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newVehicle = {
            vid,
            vtype,
            year,
            rnumber,
            capacity
        }

        if (vid == "" || vtype == "" || year == "" || rnumber == "" || capacity == ""){
            alert("Please fill out this field.")
          }else if(rnumber.length <=3){
            setRnumErr("Please enter a valid Registration number")
          }
          else{

        axios.post("http://localhost:8070/transport/add", newVehicle)
            .then(res => console.log(res.data));


        swal({
                title: "Vehicle Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/vehicleDetails');
            });

    }}

    //Demo Button Values
    const demo = () => {

        setVid("V006");
        setVtype("Buddy Lorry");
        setYear("1999");
        setRnumber("WP DAF-8899");
        setCapacity("1400KG");
    
    };


    return(
        <div className="body">
       <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card">
        <div className="card-header">
				<h2>ADD VEHICLE</h2></div>
                <div className="card-body">
            <form onSubmit={sendData}>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fa-solid fa-id-badge"></i></span>
						</div>
                    <label for="vid" className="form-label"></label>
                    <input type="text" required className="form-control" id="vid" value={vid} placeholder="Vehicle ID" onChange={(e)=>{
                        setVid(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fa-solid fa-truck"></i></span>
						</div>
                    <label for="vtype" className="form-label"></label>
                    <select type="text" required className="form-control" id="vtype" value={vtype} placeholder="Vehicle Type" onChange={(e)=>{
                        setVtype(e.target.value);
                    }}>
                        <option value="">--Vehicle Type--</option>
                        <option value="Truck">Truck</option>
                        <option value="Buddy Lorry">Buddy Lorry</option>
                        <option value="Lorry">Lorry</option>
                        <option value="Cargo Van">Cargo Van</option>
                    </select>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fa-solid fa-calendar"></i></span>
						</div>
                <label for="year" className="form-label"></label>
                    <input type="text" required className="form-control" id="year" value={year} placeholder="Year" onChange={(e)=>{
                        setYear(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fa-solid fa-registered"></i></span>
						</div>
                <label for="rnumber" className="form-label"></label>
                    <input type="text" required className="form-control" id="rnumber" value={rnumber} placeholder="Registration Number" onChange={(e)=>{
                        setRnumber(e.target.value);
                    }}/>
                </div>&nbsp;
                {rnumErr && <p class="error-message" style={{color:"red",fontWeight:"bold"}}>{rnumErr}</p>}
                </div>
                <div className="mb-3">
                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fa-solid fa-weight-scale"></i></span>
						</div>
                <label for="capacity" className="form-label"></label>
                    <input type="text" required className="form-control" id="capacity" value={capacity} placeholder="Capacity" onChange={(e)=>{
                        setCapacity(e.target.value);
                    }}/>
                </div>&nbsp;</div>
                <button type="submit" className="btn btn-primary" style={{fontSize:"18px"}}>SUBMIT</button>&nbsp;&nbsp;
                <input type="reset" className="btn btn-danger" style={{fontSize:"18px"}} value="RESET"></input>&nbsp;&nbsp;
                <button type="button" onClick={demo} className="btn btn-success" style={{fontSize:"18px"}}>DEMO</button>
                </form>
                </div></div></div></div></div>
                
    )
}

export default AddVehicle;