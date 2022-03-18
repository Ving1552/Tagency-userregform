import React,{useState} from "react";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import axios from "axios";
const App = () => {
  const [data,setData] = useState({
    username :'',
    email:'',
    password:'',
    confirmPassword:'',
    state:'',
    city:'',
    country:'',
  })
  const{username,email,password,confirmPassword,state,city,country} =data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = async(e) =>{
    e.preventDefault();
    if(username.length < 5){
      alert("Username must be atleast 5 charcaters long");
    }
    else if(password!==confirmPassword)
    {
  
      console.log("Passwords do not match")
    }
    else{
      console.log(data);
      let res=await axios.post("http://localhost:4000/users",data);
      let message=res.data;
      alert("Registration Succesful");
    }
    
  }
  return(
    <div >
      <Container id="main-container" className="d-grid h-50">
      <center>
        <h2 className="Heading">Register</h2>
       <Form className="text-center" onSubmit={submitHandler}>
         <br/><p>Username</p><input type="text" name="username" value={username} placeholder="Enter Username" onChange={changeHandler} /><br/>
         <br/><p>Email</p><input type="email" name="email" value={email} placeholder="Enter Email" onChange={changeHandler}/><br/>
         <br/><p>Password</p><input type="password" name="password" value={password} placeholder="Enter Password" onChange={changeHandler}/><br/>
         <br/><p>Confirm Password</p><input type="password" name="confirmPassword" value={confirmPassword} placeholder="Re-Enter Password" onChange={changeHandler}/><br/>
         {password!==confirmPassword ?<p style={{"color":"red"}}>Passwords do not match</p>:null}
         <br/><p>State</p><input type="state" name="state" value={state} placeholder="Enter your state name" onChange={changeHandler}/><br/>
         <br/><p>City</p><input type="city" name="city" value={city} placeholder="Enter your city name" onChange={changeHandler}/><br/>
         <br/><p>Country</p><input type="country" name="country" value={country} placeholder="Enter your country name" onChange={changeHandler}/><br/>
         <br/><input type="submit" name="submit" style={{"color":"White"}} className="button"/><br/>
       </Form>
      </center>
      </Container>
    </div>
  )
}

export default App;
