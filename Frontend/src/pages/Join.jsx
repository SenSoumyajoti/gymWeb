import {React,useState} from "react";
import '../styles/join.css'

export default function Join() {

    const [formdata,setFormdata]=useState({
        name:'',
        number:'',
        email:'',
        password:''
    })
    const handlechange=(e)=>{
      setFormdata({...formdata,
        [e.target.name]:e.target.value,
      })
    }
    const handlesubmit= async (e)=>{
      try{

      
      const response=await fetch("http://localhost:5000/join",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          },
          body:JSON.stringify(formdata),
      })

      const data= await response.json();
      if (response.ok){
        alert(data.message)
      }else{
        alert(data.message)
      }
    }catch(error){
      console.log("error",error.message);
      }
    }
   
  return (
    <div>
      <div className="heading">
        <p>Want to be your best version??!</p>
        <span>Register here</span>
      </div>
      <div className="submit-form">
        <form onSubmit={handlesubmit}>
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="your name" value={formdata.name} onChange={handlechange} required/>

          <label for="number">Contact No</label>
          <input type="number" id="number" placeholder="contact no" value={formdata.number} onChange={handlechange} required/>

          <label for="email">Email</label>
          <input type="email" id="email" placeholder="email" value={formdata.email} onChange={handlechange} required/>

          <label for="password ">Password</label>
          <input type="password" id="password" placeholder="password" value={formdata.password} onChange={handlechange} required/>
  
          <input type="submit" value="submit"/>
        </form>
      </div>
    </div>
  );
}
