import { useState } from 'react'
import Screen from './Screen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Screen></Screen>
    </>
  )
}

export default App
