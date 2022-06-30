import React, { useState, useContext } from "react";
import logo from "../../images/logo.png";
import AuthContext from "../../../context/auth/authcontext";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./navbar.css";

const Navbar = (props) => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);
  //create a custom function that will change menucollapse state
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const auth = useContext(AuthContext);
  function logout() {
    auth.setAuthToken("");
  }
  var iconSize = 2;
  if(menuCollapse)
    iconSize = 1.5;
  return (
    <>
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse} className="sidebar">
        <SidebarHeader className="navheader">
          {/* small and big change using menucollapse state */}
          <div className="logotext">
            <p onClick={menuIconClick}>
              {menuCollapse ? (
                <img src={logo} width="50" height="50" alt="profile" />
              ) : (
                <div className="d-flex flex-column align-items-center text-center p-2 py-3">
                  <img src={logo} width="100" height="100" alt="profile" />
                  <p className="mt-2">{auth.data.fname.toUpperCase()} {auth.data.lname.toUpperCase()}</p>
                </div>

              )}
            </p>
          </div>
          {/* changing menu collapse icon on click */}
          <div className="closemenu" onClick={menuIconClick} >
            {menuCollapse ? <AiOutlineArrowRight/> : <AiOutlineArrowLeft />}
          </div>
        </SidebarHeader>
        <SidebarContent className="navcontent">
          <Menu iconShape="">
          <MenuItem
              active={props.profile}
              icon={<CgProfile />}
              title="Profile"
              onClick={() => {
                props.setDashboard(false);
                props.setStats(false);
                props.setCredits(false);
                props.setProfile(true);
              }}
            >
              <span>Profile</span>
            </MenuItem>
            <MenuItem
              active={props.dashboard}
              icon={<FiHome />}
              title="Home"
              onClick={() => {
                props.setDashboard(true);
                props.setStats(false);
                props.setCredits(false);
                props.setProfile(false);
              }}
            >
              <span>Home</span>
            </MenuItem>
            <MenuItem
            active={props.stats}
              icon={<FaList />}
              title="Stats"
              onClick={() => {
                props.setDashboard(false);
                props.setStats(true);
                props.setCredits(false);
                props.setProfile(false);
              }}
            >
              <span>Stats</span>
            </MenuItem>
            <MenuItem
            active={props.credits}
              icon={<FaRegHeart />}
              title="Credits"
              onClick={() => {
                props.setDashboard(false);
                props.setStats(false);
                props.setCredits(true);
                props.setProfile(false);
              }}
            >
              <span>Credits and Contact</span>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter className="navfooter">
          <Menu iconShape="">
            <MenuItem title="Logout" onClick={logout} icon={<FiLogOut />}>
              <span>Logout</span>
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default Navbar;
