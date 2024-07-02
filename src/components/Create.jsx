import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import '../components/style.css'


const Create = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate ();

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://crud-api-lqb6.onrender.com/api/insert",{
            firstName: firstName,
            lastName: lastName,
            email: email,
         

        })

        .then(()=>{
            navigate("/read");

        });

        
    };



  return (
    <div>
             


<form>
  <div className='container'>
  <h2>CRUD SYSTEM</h2><br />
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setFirstName(e.target.value)} placeholder='Firstname'/>
  </div>

  <div className="mb-3">
  
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e)=>setLastName(e.target.value)} placeholder='Lastname'/>
  </div>

  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} placeholder='Email ID'/>
  </div>

  <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
  </div>
</form>


    </div>
  )
}

export default Create