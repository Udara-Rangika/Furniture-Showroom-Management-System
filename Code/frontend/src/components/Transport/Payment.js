import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Furniture.css"
import FurnitureImg from "../Img/p1.png";
import swal from 'sweetalert';

export default function Payment(){
    const navigate = useNavigate()

    const [drivers, setDrivers] = useState([]);
    const [DriverSearch, setSearch] = useState("");
    

    useEffect(()=>{
        function getDrivers(){
            axios.get("http://localhost:8070/driver/").then((res)=>{
                setDrivers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getDrivers();
    }, [])


    return(
        <div className="img" style={{backgroundImage: `url(${FurnitureImg})`}}>
        <div>
        &nbsp;<center><h1 style={{color: "white"}}>PAYMENT PORTAL</h1></center>
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
                      <th scope ="col" className="HRth">Driver ID</th>  
                      <th scope ="col" className="HRth">Driver Name</th>
                      <th scope ="col" className="HRth">Action</th>  
                    </tr> 
                </thead> 
                <tbody> 

                {drivers && drivers.filter(value=>{
                    if(DriverSearch === ""){
                        return value;
                    }
                    else if(
                        value.did.toLowerCase().includes(DriverSearch.toLowerCase())
                    ){
                        return value;
                    }
                }).map((driver,index)=>{
                return(
                    <tr key={index}>
                    <td className="HRtd">{index+1}</td>
                    <td className="HRtd">{driver.did}</td>
                    <td className="HRtd">{driver.name}</td>
                    <td>
                     <div className="btn btn-warning" onClick={()=>{navigate("/salary", {
                         state:{driver},
                     })}}>
                     <i className="fa-solid fa-sack-dollar"></i>&nbsp;PAY</div>&nbsp; 
                    </td> 
                    
                   </tr>
                     );
            })
             
            }
            </tbody>
            </table>

            
          
            
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