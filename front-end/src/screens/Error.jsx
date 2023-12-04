import React from 'react'

export default function Error() {
  return (
      <div className='container mx-auto text-center bg-white text-4xl min-h-screen min-w-full
       flex flex-col justify-start items-center pt-28 '>
        <div className='border-4 rounded-xl border-slate-700 py-24 px-56'>
            <h1 className='text-[#282828] '>404 Error</h1>
            <h3 className='text-[#282828] '>Page not found</h3>
        </div>
    </div>
  )
}
