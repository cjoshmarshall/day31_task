import { useState } from "react"
import  userContext  from "./userContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function Userscreate(){

    let userInfo = useContext(userContext);

    let [firstName,setFirstname] = useState("");
    let [position,setPosition] = useState("");
    let [office,setOffice] = useState("");
    let [age,setAge] = useState("");
    let [date,setDate] = useState("");
    let [salary,setSalary] = useState("");
    
    var history=useHistory  ()

    let userSubmit = (e) => {
        e.preventDefault();
        userInfo.setUserData([...userInfo.userData, {
            firstName,
            position,
            office,
            age,
            date,
            salary
        }])
        history.push("/users");
    }
    return <>
    
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Create User Form</h1>
            </div>
        </div>
    <form onSubmit={userSubmit}>
    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">FirstName</label>
      <input type="text" class="form-control" value={firstName} onChange={(e) => setFirstname(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Position</label>
      <input type="text" class="form-control" value={position} onChange={(e)=>setPosition(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Office</label>
      <input type="text" class="form-control" value={office} onChange={(e)=>setOffice(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Age</label>
      <input type="number" class="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
    <label for="example-date-input" class="col-2 col-form-label">Date</label>
    <input class="form-control" type="date" value="2011-08-19" value={date} onChange={(e)=>setDate(e.target.value)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Salary</label>
      <input type="number" class="form-control" value={salary} onChange={(e)=>setSalary(e.target.value)}/>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <input class="btn btn-primary" type="submit" value="submit"/>
        </div>
    </div>
   </div>
   </form>
   </div>
    </>
}