import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'

const Contact = () => {
  return (
    <div className='px-5'>
       <div className='title-container max-md:flex justify-center items-center'>
            <h1 className='title'>Touch with me</h1>
            <img className='title-img md:flex' src={theme} alt="" />
        </div>


        <div className='mt-5 w-full  h-[800px] px-20 flex'>
            <div className='w-[45%] h-full  p-3 space-y-4'>
                <div>
                    <span className='text-[50px] tt'>Let's Talk</span>
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi iusto dolorem repellat qui architecto dignissimos laudantium, similique facere maxime ut!</p>
                </div>
                <div>
                    <ul className='space-y-8 mt-5'>
                        <li className='flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>chinraman.v@gmail.com
                        </li>
                        <li className='flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>+91 6381094741
                        </li>
                        <li className='flex gap-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg><a href="https://www.linkedin.com/in/chinraman-v-b916a3294/" target="_blank">Linked In</a>
                        </li>
                    </ul>
                </div>
            </div>
            <form className='w-[55%] h-full  flex flex-col space-y-5 p-4'>
                <div className='space-y-4'>
                    <p>Your Name</p>
                    <input type="text" placeholder='enter your name' className='w-full h-[60px] rounded-[5px] bg-[#32323c] px-5' />
                </div>
                <div className='space-y-4'>
                    <p>Your Gmail</p>
                    <input type="text" placeholder='enter your gmail' className='w-full h-[60px] rounded-[5px] bg-[#32323c] px-5' />
                </div>
                 <div className='space-y-4'>
                    <p>Write Your Message Here</p>
                    <textarea type="text" placeholder='write something here' className='w-full h-[150px] rounded-[5px] bg-[#32323c] px-5 pt-5' ></textarea>
                </div>
                <div>
                     <img src="" alt="" />
                </div>
                <div className='flex'>
                    <div className='hero-connect'>Connect with me</div>
                </div>
            </form>
        </div>


    </div>
  )
}

export default Contact