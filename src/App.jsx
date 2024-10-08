import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputValidation from './components/input-validation'
import Click from './components/click/click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <InputValidation/>
     <Click/>
    </>
  )
}

export default App
