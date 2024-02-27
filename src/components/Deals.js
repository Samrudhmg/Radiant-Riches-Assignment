import React from 'react'

const Deals = () => {
    let content=[
        {offer:"20%",img:"download 1.png",time:"Limited Time",name:"webbuilder 1",des:"Computer Modern classic with wix support",price:"$39.96",discount:"$49.96",btn:"View Deal"},
        {offer:"20%",img:"download 1.png",time:"Limited Time",name:"webbuilder 1",des:"Computer Modern classic with wix support",price:"$39.96",discount:"$49.96",btn:"View Deal"},
        {offer:"20%",img:"download 1.png",time:"Limited Time",name:"webbuilder 1",des:"Computer Modern classic with wix support",price:"$39.96",discount:"$49.96",btn:"View Deal"},
    ]
  return (
    <div>
        <h1 className='lg:mt-[4rem]   container  md:text-[2.5rem] mt-[3rem] text-[1.5rem] lg:text-center   md:relative  text-start md: w-auto lg:w-[1000px] text-[#2C384A]'>Related deals you might like for</h1>
        <div className='container  border md:border-none  md:flex justify-center gap-[20px] mt-8 mb-10'>
            {   
                    content.map((item)=>(
                        <div className=' w-auto lg:grid lg:p-2 mt-12  md:h-[33vh] lg:h-[55vh] lg:w-[40vh]  md:w-[32vw]  items-center'>
                        <img className='relative left-[50%]   translate-x-[-50%] md:translate-x-0  md:h-[110px]  md:left-[22.5%] mt-6' src={item.img} alt='noImg'></img>
                        <div className='flex justify-center md:justify-normal gap-3 mt-7  md:ml-5 '>
                            <p className='bg-[#F2F4F7] p-1 text-[#074786]'>{item.offer}</p>
                            <p className='bg-[#F2F4F7] p-1 text-[#074786]'>{item.time}</p>
                        </div>
                        <h1 className='text-[1.5rem] text-[#626E79] font-[600] mt-1'>{item.name}</h1>
                        <p className='text-[#626E79] p-4   md:text-start'>{item.des}</p>
                            <div className='flex ml-4 text-[#5C6874]  justify-center items-center gap-5'>
                                <p className='text-[#5C6874]'>{item.price}</p>
                                <p className='text-[#9FA9B3] text-sm'>{item.discount}</p>
                                <p className='text-[red] text-sm'>{(item.offer)}</p> 
                            </div>
                            <button className=' md:px-[4vh]  px-[10px] py-[10px] mt-5  md:py-3  md:mt-2 rounded-lg text-[#ffffff] bg-[#1B88F4]'>{item.btn}</button>
                        </div>
                    ))
                          
            }
      
     
        </div>
        <div className=' lg:flex lg:justify-center grid  lg:w-[1000px]  md:static md:mt-[15rem] lg:absolute lg:mt-2   xl:left-[17%]   lg:left-[1%] mt-[3rem] md:gap-7  justify-center items-center  lg:gap-[5rem]'>
            <h1 className=' md:w-auto lg:w-[31vw] mt-11 md:mt-11  lg:mt-5  text-start text-[2.2rem] text-[#5C6874]'>Sign up and get exclusive special deals</h1>

                    <div className=' w-auto lg:justify-center lg:flex lg:items-center lg:align-middle md:w-[60vh]'>
                        <input className='  md:w-[20vw] xl:ml-[0] md:ml-[20%] outline-none border mt-5 md:mt-0 py-[11px]  rounded-l-lg px-8'></input>
                <button className='py-3  px-6 rounded  md:rounded-r-lg  lg:rounded-r-lg bg-[#1B88F4] text-[white]'>Sign Up</button></div>
                

        </div>
    </div>
  )
}   

export default Deals