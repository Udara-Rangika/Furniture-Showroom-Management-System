import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-brand" style={{color:"red"}}><b><h1>COMFORT ZONE</h1></b></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="topnav">
                    <Link to="/home">Home</Link>
                    <Link to="/vehicleDetails">Vehicle Details</Link>
                    <Link to="/driverDetails">Driver Details</Link>
                    <Link to="/addVehicle">Add Vehicle</Link>
                    <Link to="/addDriver">Add Driver</Link>
                    <Link to="/payment">Payment Portal</Link>
                </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Header;