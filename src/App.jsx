import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {UseState} from './UseState.jsx'
import {ClassState} from './ClassState.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UseState name="UseState"/>
        <ClassState name="Class State"/>
      </div>
     
    </>
  )
}

export default App
