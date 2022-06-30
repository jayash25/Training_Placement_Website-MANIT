import "./styles.css";
import Login from "./components/login/login";
import Home from "./components/Home/home";
import UserAccount from "./components/userAccount/userAccount";
import Stats from "./components/stats/stats";
import ContactUs from "./components/contactUs/contactUs";
import { BrowserRouter } from "react-router-dom";
import AuthState from "./context/auth/authstate";

export default function App() {
  return (
    <div className="App">
      <AuthState>
      <Home />
      </AuthState>
    </div>
  );
}
