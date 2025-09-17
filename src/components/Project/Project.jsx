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
       </div>
  )
}

export default Project