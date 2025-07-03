import { useState } from 'react'

import viteLogo from '/vite.svg'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [email, setEmail] = useState(" ")
  const [password, setPassword]=useState("")
  const handleLogin=()=>{
    const validEmail="daya@gmail.com";
    const validPassword='Pass@2001';
    if(email===validEmail && password===validPassword){
      toast.success("Login success")
    }
    else{
      toast.error("incorrect email or password")
    }
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
      <h1>Login</h1>
      <input className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
 type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input   className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
 type='password' placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>

      <ToastContainer />
       </div>
    </div>
    </>
  )
}

export default App
