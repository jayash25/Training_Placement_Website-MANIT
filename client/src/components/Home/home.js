import { React, useState, useContext } from "react";
import Header from "./header";
import AboutUs from "./aboutUs";
import Footer from "./footer";
import "./home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAccount from "../userAccount/userAccount";


function Home() {
  const [clickForLogin, setClickForLogin] = useState(false);
  return !clickForLogin ? (
    <div>
      <Header setClickForLogin={setClickForLogin} />
      <AboutUs />
      <Footer />
    </div>
  ) : (
    <UserAccount clickForLogin={clickForLogin} setClickForLogin={setClickForLogin}/>
  );
}

export default Home;
