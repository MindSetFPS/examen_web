import { useState } from 'react'
import './App.css'
import Test from './Test'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <>
      {
        currentQuestion == 0 ? 
          <>
            "presion para empezar el test"
            <button> Empezar </button> 
          </>
        : 
          <Test />
      }
    </>
  )
}

export default App
