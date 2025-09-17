import React from 'react'
import './About.css'
import profile from '../../assets/profile_img.png'
import theme from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div className='about-page py-5 mx-20 px-5'>
        <div className='title-container max-md:flex justify-center items-center'>
             <h1 className='title'>About me</h1>
             <img className='title-img md:flex' src={theme} alt="" />
        </div>
        <div className='flex gap-5 px-4 mt-10 max-md:flex-col'>
            <div className="">
                <img className='w-[550px] rounded-lg' src={profile} alt="" />
            </div>
            <div className="flex flex-col gap-5 justify-evenly">
                <div className='max-sm:text-center flex flex-col'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem rerum molestiae dolore blanditiis? Dolor vero, quam eveniet vel, similique quia iste laudantium voluptate, dicta ratione quo? Reiciendis, ullam officia?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at consequuntur enim ullam eius perspiciatis asperiores doloribus nam. Nisi, nihil?</p>
                </div>
                <div className=" flex flex-col gap-5 justify-between w-100% ">

                    <div className="grid grid-cols-[10%_70%] items-center gap-5 hover:scale-[1.02] transition-all duration-300">
                        <p className='text-[20px] '>Html</p>
                        <div className="h-[3px] w-full rounded-lg bg-gradient-to-r from-[#FF8A00] to-[#E52E71]"></div>
                    </div>
                     <div className="grid grid-cols-[10%_80%] items-center gap-5 hover:scale-[1.02] transition-all duration-300">
                        <p className='text-[20px]'>Css</p>
                        <div className="h-[3px] w-full rounded-lg bg-gradient-to-r from-[#FF8A00] to-[#E52E71]"></div>
                    </div>
                     <div className="grid grid-cols-[10%_50%] items-center gap-5 hover:scale-[1.02] transition-all duration-300">
                        <p className='text-[20px]'>Js</p>
                        <div className="h-[3px] w-full rounded-lg bg-gradient-to-r from-[#FF8A00] to-[#E52E71]"></div>
                    </div>
                     <div className="grid grid-cols-[10%_45%] items-center gap-5 hover:scale-[1.02] transition-all duration-300">
                        <p className='text-[20px]'>React</p>
                        <div className="h-[3px] w-full rounded-lg bg-gradient-to-r from-[#FF8A00] to-[#E52E71]"></div>
                    </div>

                   </div>
            </div>
         </div> 

            <div className='flex justify-between px-10 my-12 '>
                <div className=' flex flex-col items-center gap-2 hover:scale-[1.3] transition-all duration-300'>
                    <span className='text-[40px] tt'>10+</span>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className='h-[100px] rounded-lg bg-white w-1'></div>
               <div className=' flex flex-col items-center gap-2 hover:scale-[1.3] transition-all duration-300'>
                   <span className='text-[40px] tt'>90+</span>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className='h-[100px] rounded-lg bg-white w-1'></div>
                <div className=' flex flex-col items-center gap-2 hover:scale-[1.3] transition-all duration-300'>
                    <span className='text-[40px] tt'>15+</span>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>  
    </div>
  )
}

export default About