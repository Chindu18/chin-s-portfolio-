import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import service from '../../assets/services_data.js'

const Service = () => {
  return (
    <div className='lg:px-12 mx-20 pb-20'>
       <div className='title-container max-md:flex justify-center items-center mb-20'>
                    <h1 className='title'>Services</h1>
                    <img className='title-img md:flex' src={theme} alt="" />
        </div>
        <div className="mt-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3">
           {service.map((items)=>{
            return(
                 <div className='sm:h-full md:h-[300px] p-7  lg:w-full h-[300px] border-2 border-white rounded-lg flex flex-col p-7 items-start gap-3  hover:scale-[1.05] transition-all duration-300 hover:border-orange-300 '>
                        <h2 className='text-[20px]'>{items.s_no}</h2>
                        <h2 className='text-[30px] tt'>{items.s_name}</h2>
                        <p className='text-[20px]'>{items.s_desc}</p>
                        <p className='mt-4 text-[20px]'>Read more </p>
                    </div>   
                    )
           })} 
           
            
        </div>
    </div>
  )
}

export default Service