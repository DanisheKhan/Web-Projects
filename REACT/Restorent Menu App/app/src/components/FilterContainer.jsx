import React from 'react'

const FilterContainer = () => {
  return (
    <div className='flex gap-5 justify-center pb-5'>
      <button className=' bg-red-800 text-white px-5 py-2 rounded-full'>ALL</button>
      <button className=' bg-red-800 text-white px-5 py-2 rounded-full'>BreakFast</button>
      <button className=' bg-red-800 text-white px-5 py-2 rounded-full'>Launch</button>
      <button className=' bg-red-800 text-white px-5 py-2 rounded-full'>Dinner</button>
    </div>
  )
}

export default FilterContainer
