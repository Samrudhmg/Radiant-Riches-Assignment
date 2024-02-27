import React from 'react'
import './Home-comp.scss'
import { IoIosArrowDown } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { GoCheck } from "react-icons/go";







const HomeComp = () => {
  return (
    <div className='home-comp mt-[5rem] md:mt-[4rem] font-[inter]'>



        <div className='card grid container  md:flex  md:w-[1000px]  md:h-[60vh]   md:justify-around  md:align-middle  md:items-center  md:px-7'>
        <p className=' absolute text-xl left-1 top-10'>1</p>
          <div className='img-name mt-3 md:mt-0 grid justify-center  md:gap-5'>
            <img className=' md:h-[100px]' src='download 1.png' alt='noImg'></img> 
            <p className='text-[#626E79] mt-3 md:mt-0'>Builder1</p> 
            </div>
            <div>
        <p className='bg-[#FF7724] text-white  absolute top-[-6%] px-9 py-2 left-0 rounded-r-lg flex gap-2 items-center'><BsTrophy id='icon' /> Best Choise</p>
      </div>
                    <div className='description  md:text-start  md:w-[35vw]'>
                        <p><span className=' text-[1.08rem] font-[600]'>Wixpro 71-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <h4 className='font-[600] mt-1 mb-2'>Main highlights</h4>
                        <p className=' md:w-[30vw]  md:ml-[30px]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

                        <p className=' flex md:static  md:items-center mt-5 relative items-center md:justify-start justify-center md:mt-3 text-[#2788ff] cursor-pointer'>Show more <IoIosArrowDown id='downicon'/></p>
                    </div>  
                    <div className='rating    md:grid  md:gap-[60px] '>
                        <div className='star bg-[#F3F9FF] text-[#074786] rounded-lg w-[35vw] md:w-[auto]  md:p-2 p-4 md:grid  md:gap-[3px] ml-5   md:mt-[-80%]'>
                          <h1 className=' md:text-[2.5rem]'>9.8</h1>
                          <p>Execptional</p>
                          <span className=' md:text-xl text-sm'><img src='star1.png' alt='noImg'></img></span>
                        </div>
                        </div>   
                        <button className='bg-[#1B88F4]  md:py-[8px] py-[7px] px-[3.5rem] lg:py-[10px] lg:px-[5rem] md:px-[4.2rem]  absolute  md:left-[75.9%] lg:left-[80%] left-[50%] top-[90%]  md:top-[73%] text-white rounded-xl'>View</button> 
        </div>




        <div className='card grid container md:flex  md:w-[1000px] md:h-[60vh]  mt-[5rem]  md:justify-around  md:align-middle  md:items-center  md:px-7'>
        <p className=' absolute text-xl left-0 top-10 border-2 px-3 py-1 rounded-[50%]'>2</p>
          <div className='img-name mt-3 md:mt-0 grid justify-center  md:gap-5'>
            <img className=' md:h-[100px]' src='download 1.png' alt='noImg'></img> 
            <p className='text-[#626E79] mt-3 md:mt-0'>Builder</p> 
            </div>
            <div>
        <p className='bg-[#FF7724] text-white  absolute top-[-6%] px-9 py-2 left-0 rounded-r-lg flex gap-2 items-center'><IoDiamondOutline id='icon' /> Best Choise</p>
      </div>
                    <div className='description  md:text-start  md:w-[35vw]'>
                        <p><span className=' text-[1.08rem]   font-[600]'>SiteCraft 68-Inch Ultimate Web Design Studio-</span>Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
                        <h4 className='font-[600] mt-1 mb-2'>Main highlights</h4>
                        <p className=' md:w-[30vw]  md:ml-[30px]'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>

                        <p className='flex md:static  md:items-center mt-5 relative items-center md:justify-start justify-center md:mt-3 text-[#2788ff] cursor-pointer'>Show more <IoIosArrowDown id='downicon'/></p>
                    </div>  
                    <div className='rating md:grid  md:gap-[60px] '>
                    <div className='star bg-[#F3F9FF] text-[#074786] rounded-lg w-[35vw] md:w-[auto]  md:p-2 p-4 md:grid  md:gap-[3px] ml-5   md:mt-[-80%]'>
                          <h1 className=' md:text-[2.5rem]'>9.8</h1>
                          <p>Execptional</p>
                          <span className=' md:text-xl text-sm'><img src='star1.png' alt='noImg'></img></span>
                        </div>
                        </div>   
                        <button className='bg-[#1B88F4]  md:py-[8px] py-[7px] px-[3.5rem] lg:py-[10px] lg:px-[5rem] md:px-[4.2rem]  absolute md:left-[75.9%] lg:left-[80%] left-[50%] top-[90%] md:top-[73%] text-white rounded-xl'>View</button> 
        </div>




        <div className='card container grid md:flex  md:w-[1000px]  md:h-[60vh]  mt-[5rem]  md:justify-around  md:align-middle  md:items-center  md:px-7'>
        <p className=' absolute text-xl left-0 top-10 border-2 px-3 py-1 rounded-[50%]'>3</p>
          <div className='img-name mt-3 md:mt-0 grid justify-center  md:gap-5'>
            <img className='md:h-[100px]' src='download 1.png' alt='noImg'></img> 
            <p className='text-[#626E79]'>Builder1</p> 
            </div>
                    <div className='description  md:text-start  md:w-[35vw]'>
                        <p><span className=' text-[1.08rem]   font-[600]'>Wixpro 71-Inch Responsive Website Builder</span>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
                        <h4 className='font-[600] mt-1 mb-2'>Main highlights</h4>
                        <p className=' md:w-[30vw]  md:ml-[30px]'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

                        <p className='flex md:static  md:items-center mt-5 relative items-center md:justify-start justify-center md:mt-3 text-[#2788ff] cursor-pointer'>Show more <IoIosArrowDown id='downicon'/></p>
                    </div>  
                    <div className='rating  md:grid  md:gap-[60px] '>
                        <div className='star bg-[#F3F9FF] text-[#074786] w-[35vw] md:w-[auto] rounded-lg  md:p-2 p-4  md:grid  md:gap-[3px] ml-5  md:mt-[-80%]'>
                          <h1 className=' text-[2.5rem]'>9.5</h1>
                          <p>Execptional</p>
                          <span className=' md:text-xl text-sm'><img src='star1.png' alt='noImg'></img></span>
                        </div>
                        </div>   
                        <button className='bg-[#1B88F4]  md:py-[8px] py-[7px] px-[3.5rem] lg:py-[10px] lg:px-[5rem] md:px-[4.2rem]  absolute  md:left-[75.9%] lg:left-[80%] left-[50%] top-[90%]  md:top-[73%] text-white rounded-xl'>View</button> 
        </div>




        <div className='card grid md:flex container  md:w-[1000px]  md:h-[70vh] mt-[5rem]  md:justify-around  md:align-middle  md:items-center  md:px-7'>
        <p className=' absolute text-xl left-0 top-10  border-2 px-3 py-1 rounded-[50%]'>4</p>
          <div className='img-name mt-3 md:mt-0 grid justify-center  md:gap-5'>
            <img className='md:h-[100px]' src='download 1.png' alt='noImg'></img> 
            <p className='text-[#626E79]'>CDK</p> 
            </div>
                    <div className='description  md:text-start  md:w-[35vw]'>
                        <p><span className=' text-[1.08rem]  font-[600]'>CDK Resposive Builder:</span>An extensive library of widgets and apps, and detailed step-by-step guides</p>
                        <p className='bg-[#F2F4F7] text-[#074786] w-fit  md:p-1 ml-4 md:ml-0 mt-3  md:mt-1 font-[500]'>26% off</p>
                        <h4 className='font-[600] mt-1 mb-2'>Main highlights</h4>
                     <div className=' bg-[#FFF4ED]  md:w-[30vw]  md:p-3 text-start grid gap-2 ml-8' >
                      <p className='text-[#4B5665]'><span className=' text-[#1B88F4] p-1 bg-[#FFFFFF] mr-3 '>9.9</span>Building Responsive</p>
                      <p className='text-[#4B5665]'><span className='text-[#1B88F4] p-1 bg-[#FFFFFF] mr-3' >8.9</span>Cool</p>
                      <p className='text-[#4B5665]'><span className='text-[#1B88F4] p-1 bg-[#FFFFFF] mr-3' >8.9</span>Docs</p>
                     </div>
                       <h3 className='mt-2'>Why we love it</h3>
                       <div className='grid gap-2 mt-1 ml-8 md:ml-0'>
                        <p className='flex'><GoCheck className='text-[#0855A1] text-[1.3rem] p-[2px] bg-[#EBF5FF] rounded-[50%] mr-1' />Documentation</p>
                        <p className='flex'><GoCheck className='text-[#0855A1] text-[1.3rem] p-[2px] bg-[#EBF5FF] rounded-[50%] mr-1' />Easy Use</p>
                        <p className='flex'><GoCheck className='text-[#0855A1] text-[1.3rem] p-[2px] bg-[#EBF5FF] rounded-[50%] mr-1' />Out of Box</p>
                       </div>
                        <p className='flex md:static  md:items-center mt-5 relative items-center md:justify-start justify-center md:mt-3 text-[#2788ff] cursor-pointer'>Show more <IoIosArrowDown id='downicon'/></p>
                    </div>  
                    <div className='rating  md:grid  md:gap-[60px]  '>
                        <div className='star bg-[#F3F9FF] text-[#074786] w-[35vw] md:w-[auto] rounded-lg  md:p-2 p-4  md:grid  md:gap-[3px] ml-5  md:mt-[-80%]'>
                          <h1 className=' text-[2.5rem]'>9.1</h1>
                          <p>Very Good</p>
                          <span className=' md:text-xl text-sm'><img className=' items-center' src='star3.png' alt='noImg'></img></span>
                        </div>
                        </div>   
                        <button className='bg-[#1B88F4]  md:py-[8px] py-[7px] px-[3.5rem] lg:py-[10px] sm:px-[3rem] lg:px-[5rem] md:px-[4.2rem]  absolute  md:left-[75.9%] lg:left-[80%]  left-[50%]  top-[90%]  md:top-[73%] text-white rounded-xl'>View</button> 
        </div>
    </div>
  )
}

export default HomeComp