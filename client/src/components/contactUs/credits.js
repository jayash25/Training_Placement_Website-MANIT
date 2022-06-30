import React, {useState} from "react";
import Contact from "./contact";
import profile from "../images/profile.png";

function Member(props) {
  return (
    <div className="col-lg-3 col-md-6 ">
      <div
        className="card text-white bg-dark mb-3 member-card "
        style={{ width: "13.5rem", margin: "0 auto" }}
      >
        <img
          className="card-img-top member-img"
          src={props.img}
          alt={props.Name}
          style={{ width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.Name}</h5>
          <p className="card-text">MANIT, B-Tech(ECE)</p>
        </div>
      </div>
    </div>
  );
}

function Credit() {
  
  return (
    <div className="credits">
      <header>
        <h1>Credits</h1>
      </header>

      <h2 id="white-line"/>

      <div className="container">
        <div className="row">
          <Member img={profile} Name="Suryansh Yadav" />
          <Member img={profile} Name="Pranav Gupta" />
          <Member img={profile} Name="Priyadarshna" />
          <Member img={profile} Name="Jayash Khoiya" />
        </div>
      </div>
      <Contact />
      
    </div>
  );
}

export default Credit;
