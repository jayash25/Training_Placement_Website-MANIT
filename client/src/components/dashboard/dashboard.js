import React, { useContext, useState } from "react";
import "./dashboard.css";
import events from "./events";
export default function Dashboard(props) {
  const auth = useContext(AuthContext);
  const [clickedEvent, setClickedEvent] = useState({});
  const showDetails=(event)=>{
    setClickedEvent(event)
  }
  return (
    <>
      <div className="dashboard">
        <div className="topBar d-flex justify-content-center align-items-center">
          Welcome {auth.data.fname.toUpperCase()} !
        </div>
        {events.map((event) => (
          <div
            className="m-2 eventBox"
            onClick={()=>{
              showDetails(event)
            }}
            data-bs-toggle="modal" data-bs-target="#exampleModal"
          >
            <span className="d-flex">{event.type}</span>
          </div>
        ))}
      </div>
      <EventModal event={clickedEvent}/>
    </>
  );
}
