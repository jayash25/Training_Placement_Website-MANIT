import React, { useState , useContext} from "react";
import Navbar from "./navbar/navbar";
import Dashboard from "../dashboard/dashboard";
import Profile from "../profile/profile";
import Login from "../login/login";
import Stats from "../stats/stats";
import ContactUs from "../contactUs/contactUs";
import AuthContext from "../../context/auth/authcontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function UserAccount(props) {
  const [username, setusername] = useState("Pranav");
  const [dashboard, setDashboard] = useState(true);
  const [stats, setStats] = useState(false);
  const [profile, setProfile] = useState(false);
  const sidePage = () => {
    if (dashboard) return <Dashboard username = {username}/>;
    else if (stats) return <Stats />;
    else if (credits) return <ContactUs />;
    else if(profile) return <Profile />
  };
  const auth = useContext(AuthContext);

  return (
    <>
      {/* <BrowserRouter> */}
      <div className="userAccount d-flex">
        {auth.authToken ? (
          <div className="d-flex w-100 ">
            <Navbar
              dashboard={dashboard}
              setDashboard={setDashboard}
              stats={stats}
              setCredits={setCredits}
              profile={profile}
              setProfile={setProfile}
            />
            {sidePage()}
          </div>
        ) : (
          <Login clickForLogin={props.clickForLogin} setClickForLogin={props.setClickForLogin}/>
        )}
      </div>
    </>
  );
}
