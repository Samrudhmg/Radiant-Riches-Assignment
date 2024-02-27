import React from 'react'
import { FaAngleDown } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='h-[50vh] lg:h-[50vh]  md:h-max md:w-auto md:p-10   lg:p-0 lg:px-[16rem]  lg:py-[2rem] grid items-center justify-center  md:flex lg:flex  md:justify-between lg:justify-between w-auto bg-[#212731] text-[white] md:mt-[4rem] lg:mt-[18rem]  xl:mt-[18rem] mt-[15rem]'>

        <div className='grid lg:gap-5  lg:align-middle  md:gap-[55px]  text-[0.9rem] text-start cursor-pointer text-[#B6BDC4]'>
            <h1 className='text-[1.3rem] text-[white]'>CATEGORIES</h1>
            <p>Web Builder</p>
            <p>Hosting</p>
            <p>Data Ceneter</p>
            <p>Robotic-Automation</p>
            <p></p>
        </div>
        <div className='grid  lg:gap-4 md:gap-[50px] text-[0.9rem] cursor-pointer text-start text-[#B6BDC4]'>
        <h1 className='text-[1.3rem] text-[white]'>CONTACT</h1>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Categories</p>
            <p>About</p>
        </div>
        <div >
            <p className='flex lg:items-start align-middle text-[#B6BDC4]   md:[100%] lg:text-start items-center cursor-pointer gap-1'>United States <FaAngleDown /> </p>
        </div>

    </div>
  )
}

export default Footer