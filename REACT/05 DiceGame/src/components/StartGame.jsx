import Button from './Button';

function StartGame({ toggle }) {
  return (
    <div className='flex justify-center h-svh'>
    <div className='flex max-w-7xl items-center justify-center'>
      <div className='flex-1 '>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className='flex-1'>
        <h1 className='text-8xl font-bold' >Dice Game</h1>
        <Button onClick={toggle} label="Game Start" className={"mt-6 bg-black text-white py-3 px-8 rounded-md text-2xl hover:bg-slate-500 ease-in-out "} />
      </div>
    </div>
    </div>
  )
}

export default StartGame