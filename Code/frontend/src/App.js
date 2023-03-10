import React from "react";
import './App.css';
import Header from './components/Transport/Header';
import AddVehicle from "./components/Transport/AddVehicle"
import VehicleDetails from "./components/Transport/VehicleDetails";
import AddDriver from "./components/Transport/AddDriver";
import DriverDetails from "./components/Transport/DriverDetails";
import Vdetail from "./components/Transport/Vdetail";
import EditVehicle from "./components/Transport/EditVehicle";
import Ddetail from "./components/Transport/Ddetail";
import EditDriver from "./components/Transport/EditDriver";
import Home from "./components/Transport/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Payment from "./components/Transport/Payment"
import Salary from "./components/Transport/Salary"
import Login from "./components/Transport/Login"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="/vehicleDetails" element={<VehicleDetails/>} />  
        <Route path="/addVehicle" element={<AddVehicle/>} />
        <Route path="/addDriver" element={<AddDriver/>} />
        <Route path="/driverDetails" element={<DriverDetails/>} />
        <Route path="/update/:id" element={<EditVehicle/>} />
        <Route path="/gett/:id" element={<Ddetail/>} />
        <Route path="/updatee/:id" element={<EditDriver/>} />
        <Route path="/get/:id" element= {<Vdetail/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/salary" element={<Salary/>} />
        <Route path="/" element={<Login/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
