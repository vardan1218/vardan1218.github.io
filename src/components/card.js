import React from 'react'

const Card = () => {
  return (
    <div>
       <div className='flex justify-between ml-7'>
         <div className='w-[300px] h-[300px] rounded-[60px] bg-cyan-600 flex items-center justify-center'>
            <div className='w-[270px] h-[270px] rounded-full bg-pink-300 flex items-center justify-center'>
            </div>
         </div>

         <div className='w-[300px] h-[300px] rounded-[60px] bg-violet-600 relative overflow-hidden'>
             <div className='absolute w-[190px] h-[190px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-300 rotate-45'>
             </div>
         </div>

         <div className='w-[300px] h-[300px] rounded-[60px] bg-yellow-300 flex items-center justify-center'>
            <div className='w-[270px] h-[270px] rounded-full bg-purple-300 flex items-center justify-center'>
            </div>
         </div>

         <div className='w-[300px] h-[300px] rounded-[60px] bg-lime-600 relative overflow-hidden'>
             <div className='absolute w-[190px] h-[190px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400 rotate-45'>
             </div>
         </div>

        </div> 
    </div>
  )
}

export default Card