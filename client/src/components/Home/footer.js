import React, {useState} from "react";
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  const [queryCred, setQueryCred] = useState({name:"", email:"", message:""})
  const onChange = (e)=>{
    setQueryCred({...queryCred, [e.target.name]:e.target.value});
  }
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://placement-website-tpo.herokuapp.com/contact', {
        method: 'POST',
        credentials: "include",
        withCredentials: true,
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name: queryCred.name, email: queryCred.email, message: queryCred.message})
        
      });
      const json = await response.json();
      console.log(json);
      if(json.errors){
        alert(json.errors[0].msg)
      }
      else if(json.error){
        alert(json.error);
      }
      else{
        alert(json.msg);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <footer className="bg-dark text-center text-white" id="footer">
      <div className="container p-4">
        {/* <section className="mb-4">
          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><FacebookOutlinedIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><TwitterIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><GoogleIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><InstagramIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><LinkedInIcon /></a>
        </section> */}

        {/* <section className="row  contact-form">
          <form action="">

            <h3>Contact Us</h3>

            <div className="mb-3 ">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="query"
                rows="3"
                col="3"
                name="message"
                placeholder="Enter Your Query"
                onChange={onChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-25" onClick={sendMessage}>
              Submit
            </button>


          </form>
        </section> */}

        <section className=" d-flex">
        <div className="col-lg-4 container">
              <h3>Contact Us</h3>
              <email>
              Email : xyz@manit.ac.in,
              </email>
              <p>
              Phone : +123-456-789
              </p>
              <address>
                Address: Link Road Number 3, Near Kali Mata Mandir, Bhopal,
                Madhya Pradesh, India 462003
              </address>
            </div>
            <div className="col-lg-4 container mt-4">
              <h3>Stay Connected</h3>
              <section className="mb-4">
          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><FacebookOutlinedIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><TwitterIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><GoogleIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><InstagramIcon /></a>

          <a className="m-2" href="#!" role="button" style={{ color: "white" }}
          ><LinkedInIcon /></a>
        </section>
            </div>
        </section>
        
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2022 Copyright
      </div>
    </footer>
  )
}

export default Footer;
