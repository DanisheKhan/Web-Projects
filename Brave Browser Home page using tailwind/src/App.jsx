import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main" className='container'>
        <div id="addBlocker" className='flex justify-between mt-8'>
          <div id="header" className='flex gap-4'>
            
            <div className='flex flex-col gap-4 justify-center'>
              <h1 className=' text-5xl text-orange-500'>3,359</h1>
              <p className='font-bold '>Bandwidth saved</p>
            </div>
            <div className='flex flex-col gap-4 justify-center'>
              <h1 className=' text-5xl' style={{color:"#9DA3E6"}}>57.7</h1>
              <p className='font-bold '>Bandwidth saved</p>
            </div>
            <div className='flex flex-col gap-4 justify-center'>
              <h1 className=' text-5xl'>2 </h1>
              <p className='font-bold '>Time saved</p>
            </div>
            
          </div>
          <div id="clock">
            <h1 className=' text-8xl text-white'>10:09</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
