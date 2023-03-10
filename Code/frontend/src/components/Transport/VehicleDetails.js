import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Furniture.css"
import FurnitureImg from "../Img/p1.png";
import swal from 'sweetalert';

export default function VehicleDetails(){
    const navigate = useNavigate()

    const [vehicles, setVehicles] = useState([]);
    const [VehicleSearch, setSearch] = useState("");

    useEffect(()=>{
        function getVehicles(){
            axios.get("http://localhost:8070/transport/").then((res)=>{
                setVehicles(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getVehicles();
    }, [])
    
    const onDelete = (id)=>{
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
            swal("Successfully Deleted!", {
            icon: "success",
            });
            axios.delete(`http://localhost:8070/transport/delete/${id}`)
            swal(window.location = '/vehicleDetails')
            } else {
            swal("Your imaginary file is safe!");
            }
            
            });
    }

    return(
        <div className="img" style={{backgroundImage: `url(${FurnitureImg})`}}>
        <div>
        &nbsp;<center><h1 style={{color: "white"}}>VEHICLE DETAILS</h1></center>
        <div>

            <input type="text"
                placeholder="Search.." 
                className="text111"
                name="search2"
                onChange ={(e)=>{
                setSearch(e.target.value);
        }}
   style={{border:"2px solid", marginTop:"20px",
   marginBottom:"20px",
   width:"40%",
   marginLeft:"30%",
   boxShadow:" 10px 10px 5px rgba(150, 168, 156)",
}}
  
  
  />
  <button type="submit" style={{color:"red"}}><i class="fa fa-search"></i></button>

        <div className="container">
            <table className ="table" >
                 <thead class="thead-dark">
                     <tr>
                     <th scope ="col" className="HRth">#</th>
                      <th scope ="col" className="HRth">Vehicle ID</th>  
                      <th scope ="col" className="HRth">Vehicle Type</th>
                      <th scope ="col" className="HRth">Registered Year</th>
                      <th scope ="col" className="HRth">Registration Number</th>     
                      <th scope ="col" className="HRth">Capacity</th>
                      <th scope ="col" className="HRth">Action</th>  
                    </tr> 
                </thead> 
                <tbody> 

                {vehicles && vehicles.filter(value=>{
                    if(VehicleSearch === ""){
                        return value;
                    }
                    else if(
                        value.vid.toLowerCase().includes(VehicleSearch.toLowerCase())
                    ){
                        return value;
                    }
                }).map((vehicle,index)=>{
                return(
                    <tr key={index}>
                    <td className="HRtd">{index+1}</td>
                    <td className="HRtd">{vehicle.vid}</td>
                    <td className="HRtd" >{vehicle.vtype}</td>
                    <td className="HRtd">{vehicle.year}</td>
                    <td className="HRtd">{vehicle.rnumber}</td>
                    <td className="HRtd">{vehicle.capacity}</td>
                    <td>
                     <div className="btn btn-warning" onClick={()=>{navigate("/update/:id", {
                         state:{vehicle},
                     })}}>
                     <i className="fas fa-edit"></i>&nbsp;EDIT</div>&nbsp; 

                     <a className ="btn btn-danger" onClick={()=> onDelete(vehicle._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;DELETE</a>&nbsp;

                     <div className="btn btn-primary" onClick={()=>{navigate("/get/:id", {
                         state:{vehicle},
                     })}}>
                     <i className="fa-solid fa-eye"></i>&nbsp;VIEW</div>
                    </td> 
                    
                   </tr>
                     );
            })
             
            }
            </tbody>
            </table>
          
          <button className="btn btn-success" style={{marginLeft:"570px", marginTop:"20px"}}><a href="/addVehicle" style={{textDecoration:'none', color:'white'}}>Create New Vehicle</a></button>

        </div>
        </div>&nbsp;
        <div className="footer">
		<a href="#" className="fa fa-facebook"></a>
		<a href="#" className="fa fa-twitter"></a>
		<a href="#" className="fa fa-linkedin"></a>
		<a href="#" className="fa fa-pinterest"></a>
</div>
        </div></div>
        
    )
}