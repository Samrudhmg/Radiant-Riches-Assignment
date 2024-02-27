import React, { useState } from 'react'
import './navbar.scss'
import { CiSearch } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [open,setOpen]=useState(false)  
  return (  
    <div className='navbar sm:w-full md:w-full lg:w-full w-full h-[15vh] md:h-[10vh] bg-[#212731] text-[#D1D6DA]  md:justify-center   flex justify-start items-center  '>  
    <CiSearch className=' text-[29px] cursor-pointer text-[#626E79] align-middle bg-white h-[40px]  rounded-s-xl relative left-3 '/>
    <input type="text" className=' h-[40px] md:w-[15vw] w-[57vw] md:h-[40px]  rounded-xl  md:pl-4 outline-none' />
       <div className={`md:flex absolute md:static md:w-fit  sm:flex justify-center sm:space-x-20 md:space-x-[60px] md:ml-8 bg-[#212731] z-[-1]  cursor-pointer  md:z-auto top-[1%] left-0 w-full transition-all duration-300 ease-in ${!open ?'top-[14%]' :'top-[2%]'} `}>
      <h4 className=' md:my-0 my-1 md:ml-[30px]'>Categories</h4>
      <h4 className=' md:my-0 my-1'>Website Builders</h4>
      <h4 className=' md:my-0 my-1'>Today's deals</h4>  
      </div>
      <div onClick={()=>setOpen(!open)}>
        {
          open?<TiThMenuOutline className=' md:opacity-0 text-3xl absolute right-3 top-9 transition duration-500 cursor-pointer' />:<IoMdClose className=' md:opacity-0 text-3xl absolute right-3 top-10 cursor-pointer' />
        }
 
      </div>
    </div>
  )
}

export default Navbar