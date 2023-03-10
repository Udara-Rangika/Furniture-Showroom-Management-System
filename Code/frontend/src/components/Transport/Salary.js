import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Furniture.css";
import swal from 'sweetalert';
import jsPDF from "jspdf";
import imgData from '../Img/logo.png';

export default function Salary(){
    const {state} = useLocation();
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [did, setDid] = useState("");
    const [name, setName] = useState("");


    useEffect(() =>{
        setDid(state.driver.did)
        setName(state.driver.name)
    },[])

    function sendDriver(e){
        e.preventDefault();

        const newDriver = {
            did,
            name
        }
    }

    const [reg,setReg] = useState();
    const [ot,setOt] = useState();
    const [total,setTotal] = useState(0);
    const [grossTotal,setGrossTotal] = useState()
    const [regTotal,setRegTotal] = useState();
    const [otTotal,setOtTotal] = useState();
    
    function addition(){
        setRegTotal(reg*200)
        setOtTotal(ot*250);
        setGrossTotal(ot * 250 + reg * 200);
        setTotal((ot * 250 + reg * 200) - (100 + 200 + 150));
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
            doc.text(200, 220, 'Driver Salary Report')
            doc.setLineWidth(2.0);
            doc.line(198, 225, 398, 225)
            doc.setTextColor(0,0,0)
            doc.setFontSize(13)
            doc.text(85, 270, 'Driver ID :')
            doc.text(85, 290, 'Driver Name :')
            doc.setFont('serif','normal')
            doc.text(230,270, state.driver.did)
            doc.text(230,290, state.driver.name)
            doc.setLineWidth(0)
            doc.line(45, 325, 546, 325)
            doc.setFontSize(17)
            doc.setTextColor(0,0,0)
            doc.setFontSize(13)
            doc.setTextColor(0, 58, 43)
            doc.setFont('serif','bold')
            doc.text(80, 340, 'Regular Hours')
            doc.text(210, 340, 'Pay Rate')
            doc.text(320, 340, 'Pay Period')
            doc.text(440, 340, 'Net Reg Pay')
            doc.line(45, 347, 546, 347)
            doc.setTextColor(0,0,0)
            doc.setFont('serif','normal')
            doc.text(108,369, `${reg}`)
            doc.text(213, 369, '$200.00')
            doc.text(300, 369, '05/25/22 - 06/25/22')
            doc.text(455, 369, `${regTotal}`)
            doc.line(45, 380, 546, 380)
            doc.setTextColor(0, 58, 43)
            doc.setFont('serif','bold')
            doc.text(80, 395, 'Over Time Hours')
            doc.text(210, 395, 'Pay Rate')
            doc.text(320, 395, 'Pay Period')
            doc.text(440, 395, 'Net OT Pay')
            doc.line(45, 402, 546, 402)
            doc.setTextColor(0,0,0)
            doc.setFont('serif','normal')
            doc.text(108,424, `${ot}`)
            doc.text(213, 424, '$200.00')
            doc.text(300, 424, '05/25/22 - 06/25/22')
            doc.text(455, 424, `${otTotal}`)
            doc.setFont('serif','bold')
            doc.text(320, 455, 'Total Gross Pay')
            doc.text(455,455, `${grossTotal}`)
            doc.setLineWidth(3.0);
            doc.line(45, 460, 546, 460)
            doc.setTextColor(0, 58, 43)
            doc.setFont('serif','bold')
            doc.text(245, 480, 'Deductions')
            doc.setLineWidth(0);
            doc.line(45, 490, 546, 490)
            doc.setTextColor(0,0,0)
            doc.setFont('serif','normal')
            doc.text(200, 510, 'Medicare')
            doc.text(200, 530, 'Food')
            doc.text(200, 550, 'Accomodation')
            doc.text(468, 510, '100')
            doc.text(468, 530, '200')
            doc.text(468, 550, '150')
            doc.line(45, 557, 546, 557)
            doc.text(320, 575, 'Total Deductions')
            doc.text(468, 575, '450')
            doc.setFont('serif','bold')
            doc.text(366, 595, 'Net Pay')
            doc.text(455,595, `${total}`)
            doc.setLineWidth(2.0);
            doc.line(410, 605, 546, 605)
            doc.line(410, 608, 546, 608)
            doc.text(420, 675, 'Certified By :')
            doc.text(420, 695, 'Transport Admin')
            doc.setFontSize(11)
            doc.setTextColor(255,0,0)
            doc.text(80, 750, '* The given details were generated on ' + `${date}`)
            
            doc.save(state.driver.did + ' Report.pdf')
    }

    //Demo Button Values
    const demo = () => {

        setReg("100");
        setOt("50");
    
    };

    return(
        <>

        <div className="body">
       <div className="container"><div className="d-flex justify-content-center h-100">
        <div className="card2">
        <div className="card-header">
				<h2>PAYMENT</h2></div>
                <div className="card-body">
        <form onSubmit={sendDriver}>
            <div className="mb-3">
                <label for="did" className="form-label">Driver ID</label>
                <input type="text" className="form-control" id="did" autoComplete="off" value={did} disabled/>
            </div>
            <div className="mb-3">
                <label for="name" className="form-label">Driver Name</label>
                <input type="text" className="form-control" id="name" autoComplete="off" value={name} disabled/>
            </div>&nbsp;
            <div className="mb-3">
                <label for="regular" className="form-label">Regular Hours:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" placeholder="0" value={reg} onChange={e => setReg(+e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="ot" className="form-label">Overtime Hours:</label>&nbsp;&nbsp;&nbsp;
                <input type="number" placeholder="0" value={ot} onChange={e => setOt(+e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="total" className="form-label">Net Pay</label>
                <input type="number" placeholder="Total" className="form-control" autoComplete="off" value={total} disabled/>
            </div>
            <br/>
            
            <div className="form-group form-button">
                    <button type="submit" className="btn btn-primary" style={{fontSize: "18px"}} onClick={addition}>Calculate</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" onClick={demo} className="btn btn-success" style={{fontSize:"18px", backgroundColor:"#bf3030"}}>Demo</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={()=>jsPdfGenerator()} style={{fontSize:"18px", color:"white"}}>Generate Report</button>
            </div>
        </form>
        </div></div></div></div></div>
        </>          
    )

}