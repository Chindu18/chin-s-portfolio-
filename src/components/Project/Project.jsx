import React from 'react'
import './Project.css'
import theme from '../../assets/theme_pattern.svg'
import work from '../../assets/mywork_data.js'

const Project = () => {
  return (
   <div className='px-12 mx-20 pb-20'>
          <div className='title-container max-md:flex justify-center items-center mb-20'>
                       <h1 className='title'>My latest work</h1>
                       <img className='title-img md:flex' src={theme} alt="" />
           </div>
           <div className='grid grid-cols-3 gap-10'>
            {work.map((items)=>{
                return(
                  <img className='hover:scale-[1.1] duration-300 hover:border-4 rounded-lg border-violet-600' src={items.w_img}/>
                )
            })}
            </div> 
            <div className=' flex justify-center items-center mt-[80px] '>
              <button className='hover:gap-5 duration-300 flex items-center gap-1 border-2 border-white rounded-[40px] px-8 py-4 text-[20px]'><h1>show more</h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
              </button>
            </div>
       </div>
  )
}

export default Project