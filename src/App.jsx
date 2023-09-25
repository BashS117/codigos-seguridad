import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {UseState} from './UseState.jsx'
import {ClassState} from './ClassState.jsx'
import { UseReducer } from './UseReducer'
import './App.css'

function App() {

  return (
    <>
      <div>
        <UseReducer name='UseReducer'/>
        <UseState name="UseState"/>
        <ClassState name="Class State"/>
      </div>
     
    </>
  )
}

export default App
