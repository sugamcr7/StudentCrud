import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';


const Read = () => {
    const [data, setData] = useState([]);
    function getData (){
        axios.get("https://crud-api-lqb6.onrender.com/api/fetchData")
        .then((res)=>{
            console.log(res.data.data);
            setData(res.data.data);
        });
    }

    function handleDelete(id){
        axios.get(`https://crud-api-lqb6.onrender.com/api/delete/${id}`)
        .then(()=>{
          getData();
        })
    }

    const setToLocalStorage = (id, firstName, lastName, email ) =>{
      localStorage.setItem("id", id);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);

    }

    useEffect(()=>{
        getData();
    },[]);

    
  return (
    <div>
        <h2>READ OPERATION</h2><br /><br />
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {data?.map((eachData)=>{
    return(
        <>
        <tbody>
    <tr>
      <th scope="row">{eachData._id}</th>
      <td>{eachData.firstName}</td>
      <td>{eachData.lastName}</td>
      <td>{eachData.email}</td>
      <td><Link to="/update"><button type="button" class="btn btn-warning" onClick={()=> setToLocalStorage(eachData._id, eachData.firstName, eachData.lastName, eachData.email)}>Edit</button></Link></td>
      <td><button type="button" class="btn btn-danger" onClick={()=>handleDelete(eachData._id)}>Delete</button></td>
    </tr>
    
  </tbody>
        </>
    )
  })}
  
</table>
    </div>
  )
}

export default Read