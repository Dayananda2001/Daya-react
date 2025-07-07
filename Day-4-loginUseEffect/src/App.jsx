import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword]=useState("");
  const[isLogin, setIsLogin]=useState("false");
  const correctEmail='viji@gmail.com';
  const correctPassword='viji@2001';

  useEffect(()=>{
    toast.info("plese login");
  console.log("please login")},
  [])
  useEffect(()=>{
    if(isLogin){
      console.log("Login sucess")
    }
  },[isLogin])
  
  const handleLogin=()=>{
    
  if(email===correctEmail && password===correctPassword){
    toast.success("Loin sucessFull") ;
    setIsLogin(true);
      
    
    
  }else{
    toast.error("check email or password")
  }}
  const handleForgot=()=>{
    alert("Button is not working")
  }

  return (
    <>
    <h1>Loginpage</h1><br/>
     <label>Email</label>
     <input  value={email} type="email"  onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email'/><br/>
     <label>Password</label>
     <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password'></input><br/>
     <button onClick={handleLogin} >Login</button>
     <button onClick={handleForgot} >Forgot</button>
     <ToastContainer />
     </>
     
  )
}

export default App
