import React,{useState} from "react";
import '../styles/join.css'
import Dropdown from "../components/Dropdown";

export default function Join() {

  const option=[
    {value:'option1', label:'option1'},
    {value:'option2', label:'option2'},
    {value:'option3', label:'option3'}
  ]


    const [formdata,setFormdata]=useState({
        name:'',
        number:'',
        email:'',
        password:''
    })
    const handlechange=(e)=>{
      setFormdata({...formdata,
        [e.target.id]:e.target.value,
      })
    }
    const handlesubmit= async (e)=>{
      e.preventDefault();
      try{
      const response=await fetch('http://localhost:4000/app/join',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
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
      alert("something went wrong!!")
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
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="your name" value={formdata.name} onChange={handlechange} required/>

          <label htmlFor="number">Contact No</label>
          <input type="number" id="number" name="number" placeholder="contact no" value={formdata.number} onChange={handlechange} required/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="email" value={formdata.email} onChange={handlechange} required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="password" value={formdata.password} onChange={handlechange} required/>
  
          <input type="submit" value="submit"/>
        </form>
      </div>
    </div>
  );
}
