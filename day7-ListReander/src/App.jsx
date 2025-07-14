import { useState } from 'react'

import Object from './Object'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Object/>
    </>
  )
}

export default App
