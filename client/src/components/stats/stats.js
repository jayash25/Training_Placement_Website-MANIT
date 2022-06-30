import React , {useState}from "react";
import "./stats.css";
import Companies from "./companies";
import ModalBox from "./modalBox";
export default function Stats() {
  const [clickedComp, setClickForComp] = useState({});
  const showDetails=(company)=>{
    setClickForComp(company);
  }
  return (
    
    <div className="stats w-100 table-responsive-lg">
      <ModalBox company={clickedComp}/>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col" colSpan="7">
              Branch
            </th>
            <th scope="col">CTC (lacs/annum)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>CSE</td>
            <td>ECE</td>
            <td>Mechanical</td>
            <td>Civil</td>
            <td>Chemical</td>
            <td>Electrical</td>
            <td>MSME</td>
            <td></td>
          </tr>
          {Companies.map(company => (
            <tr style={{ cursor: "pointer" }} onClick={()=>{
              showDetails(company)
            }} data-bs-toggle="modal" data-bs-target="#modalbox">
              <td>{company.name}</td>
              <td>{company.cse}</td>
              <td>{company.ece}</td>
              <td>{company.mech}</td>
              <td>{company.civil}</td>
              <td>{company.chemical}</td>
              <td>{company.electrical}</td>
              <td>{company.msme}</td>
              <td>{company.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
