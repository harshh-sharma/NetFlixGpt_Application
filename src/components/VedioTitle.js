import React from 'react'

const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-12/12 flex flex-col gap-5 text-white px-16 py-10 absolute aspect-video justify-center pr-[35rem] bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-4xl font-bold text-[#ff2505]'>{title}</h1>
        <p className='text-sm md:text-xl font-serif'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black font-bold text-lg px-7 py-2 rounded-md'>Play</button>
            <button className='bg-[#ff2508] text-white text-lg font-bold px-5 py-2 rounded-md'>More info</button>
        </div>
    </div>
  )
}

export default VedioTitle