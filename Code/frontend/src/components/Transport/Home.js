import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Furniture.css"
import "./Home.css"

export default function Home(){
    const navigate = useNavigate()

    return(
        <React.Fragment>
            <>
            
  <section
    className="u-clearfix u-image u-section-1"
    id="carousel_bc05"
    data-image-width={880}
    data-image-height={586}
  >
    <center><label style={{fontSize:"45px", fontFamily:"URW Chancery L", fontStyle:"oblique", fontWeight:"bold"}}>TRANSPORT AND VEHICLE MANAGEMENT</label></center>
    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div className="shape" />
      <div
      alt=""
      className="sha"
      />
      <div
        alt=""
        className="img1"
      />
      <div
        alt=""
        className="img2"
      />
      <div className="sheet">
        <div className="list">
          <div className="rep">
            <div className="it">
            <div className="lay0"><span className="icon1"></span></div>
              <div className="lay">
              <a
                href="/"
                className="bttn"
              >
                {" "}
                ORDER DETAILS
              </a>
              </div>
              </div>
              <div className="it1">
              <div className="lay0"><span class="icon2"></span></div>
              <div className="lay">
              <a
                href="/driverDetails"
                className="bttn"
              >
                {" "}
                DRIVER DETAILS
              </a></div></div>
              <div className="it2">
              <div className="lay0"><span class="icon3"></span></div>
              <div className="lay">
              <a
                href="/vehicleDetails"
                className="bttn"
              >
                {" "}
                VEHICLE DETAILS
              </a></div></div>
            </div></div></div></div>
            <div className="footer">
		<a href="#" className="fa fa-facebook"></a>
		<a href="#" className="fa fa-twitter"></a>
		<a href="#" className="fa fa-linkedin"></a>
		<a href="#" className="fa fa-pinterest"></a>
</div>
  </section>

</>

        </React.Fragment>
    )
}