import React, { useContext, useState } from "react";
import AuthContext from "../../context/auth/authcontext";
import {IoIosAddCircleOutline} from "react-icons/io";

export default function Profile() {
  const auth = useContext(AuthContext);
  const [updateduser, setUpdatedUser] = useState({fname:auth.data.fname, lname: auth.data.lname, phone:"", })
  const onChange=(e)=>{
    setUpdatedUser({...updateduser, [e.target.name] : e.target.value})
  }
  return (
    <>
      <div className="container rounded bg-white ">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">{auth.data.fname.toUpperCase()} {auth.data.lname.toUpperCase()}</span><span className="text-black-50">{auth.data.email}</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><input onChange={onChange} type="text" className="form-control mb-3" placeholder="phone number" value="" /></div>
                <div className="col-md-12"><input onChange={onChange} type="text" className="form-control mb-3" placeholder="address line" value="" /></div>
                <div className="col-md-12"><input onChange={onChange} type="text" className="form-control mb-3" placeholder="education" value="" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><input onChange={onChange} type="text" className="form-control mb-3" placeholder="country" value="" /></div>
                <div className="col-md-6"><input onChange={onChange} type="text" className="form-control mb-3" value="" placeholder="state" /></div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><IoIosAddCircleOutline />&nbsp;Experience</span></div><br />
                <div className="col-md-12"><input type="text" className="form-control" placeholder="experience" value="" /></div> <br />
                  <div className="col-md-12"><input type="text" className="form-control" placeholder="additional details" value="" /></div>
                </div>
            </div>
          </div>
        </div>
      </>
      );
}
