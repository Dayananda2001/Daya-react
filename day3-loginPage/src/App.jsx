import { useState } from 'react'
import './App.css';

 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] =useState("");
  const correctEmail ="daya@gmail.com";
  const correctPassword="Daya@123";

  const handleSubmit =async(e)=>{
    e.preventDefault();
    if(email===correctEmail && password==correctPassword){
      toast.success("Login successfull")

    }
    else{
      toast.error("Incorrect email or password")
    }

  }

  return (
    <>
    <hi>Login </hi><br/>
    <form onSubmit={handleSubmit}>
    <label>Email</label>
    <input placeholder='Emter email' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>

    <label>password</label>
    <input placeholder='Enter password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button type="Submit" >Login</button>
    </form>
    <ToastContainer />

    </>
  )
}

export default App
