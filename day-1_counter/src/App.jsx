import React from 'react'
import { useState } from 'react'



import viteLogo from '/vite.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [count, setCount] = useState(0)
  const submit=()=>{
    setCount(0);
    toast.warn("Counter is reset")
  }
  return (
    <>
    <div className='max-w-sm mx-auto mt-24 p-6 border rounder-lg shadow text-center bg-white'>

      <h2 className='text-2xl font-bold mb-4'>Counter App {count}</h2>
      <h1 className='text-5xl font-bold md-6'>{count}</h1>

      <div className='flex justify-between gap-4'>
        <button onClick={()=>{setCount(count+1)}} className='bg-red-500 text-white-500 py-2 px-4 rounded'>count</button><br/>
        <button onClick={()=>{setCount(count-1)}} className='bg-red-500 text-white-500 py-2 px-4 rounded'>subtract</button><br/>
        <button onClick={submit} className='bg-green-500 text-white-500 py-2 px-4 rounded'>reset</button>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
