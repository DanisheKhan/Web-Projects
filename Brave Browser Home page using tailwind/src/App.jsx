import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main" className='container'>
        <div id="addblocker" className='flex justify-between'>
          <div id="header" className='flex'>
            <div>
              <h1>2,271</h1>
              <p>Tracker and ads blocks</p>
            </div>
            <div>
              <h1>57.7</h1>
              <p>Bandwidth saved</p>
            </div>
            <div>
              <h1>2<span>minutes</span></h1>
              <p>Time saved</p>
            </div>
          </div>
          <div id="clock">
            <h1>10:09</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
