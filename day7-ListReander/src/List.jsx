import { useState } from 'react'


function List() {
  const [count, setCount] = useState(0)
const Fruits=["apple","Bannana","mango"];
const MapFruits=Fruits.map(fruit=><li>{fruit}</li>)
  return 
    
      <ol>{MapFruits}</ol>
      

  
}

export default List