import React, {useState} from "react";

function Contact() {
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
        setQueryCred({
          name:"",
          email:"",
          message:""
        })
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="row  contact-form">
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
                value={queryCred.name}
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
                value={queryCred.email}
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
                value={queryCred.message}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-25" onClick={sendMessage}>
              Submit
            </button>


          </form>
        </section>
  );
}

export default Contact;
