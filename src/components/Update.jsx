import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate ();

    useEffect(()=>{

        setId(localStorage.getItem("id"));
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setEmail(localStorage.getItem("email"));

    },[]);

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.post(`https://crud-api-lqb6.onrender.com/api/update/${id}`,{
            firstName: firstName,
            lastName: lastName,
            email: email,
        })
        .then(()=>{
            navigate("/read");

        });

    }




  return (
    <div>

        

<form>
  <div className='container'>
  <h2>Update Now</h2><br />
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Firstname'/>
  </div>

  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Lastname'/>
  </div>

  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email ID'/>
  </div>

  
  <button type="submit" className="btn btn-success" onClick={handleUpdate}>Update</button>
  
  </div>
  
</form>


    </div>
  )
}

export default Update