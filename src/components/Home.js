import React from "react";
import "./Home.scss";
import { FaChevronDown } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";




const Home = () => {
  return (
    <div className="Home container  w-auto md:w-[65vw]   flex justify-center ">
      <div className="heading">
        <h1 className="  md:text-[3.2rem] w-[auto] text-[2.2rem]  md:w-[65vw]  text-[#2C384A] mt-6 text-start  font-[inter]">Best Website builders in the US</h1>

        <div className="last-updated border-y-2 p-2  space-y-3 md:space-y-0  md:p-3 grid  justify-start  md:flex  md:justify-between ">
          <div className="updated-left w-auto  md:flex space-y-3 md:space-y-0  md:align-middle  md:space-x-10 text-[#4B5665] ">
            <p className=" md:flex flex md:ml-[-10px] ">
              <CiCircleCheck id="icons" />
              Last updated <span>-</span> February 22,2020
            </p>
            <p className=" md:flex flex">
              <CiCircleInfo id="icons"/>
              Advertising Discounts
            </p>
          </div>
          <div className="updated-right flex text-[#4B5665]">
            <p className=" md:flex flex ml-4 md:ml-0   md:cursor-pointer ">
              Top Relavent <FaChevronDown id="icons" />
            </p>
          </div>
        </div>
        <div className="  md:text-start md:items-center items-start md:flex grid grid-flow-row justify-start   text-start ml-6 md:space-y-0 space-y-2  col-span-2  w-auto md:mt-0  mt-1 px-0.5  py-4 md:text-sm   md:p-[30px]  text-[#4B5665] md:space-x-20">
            <a href="/">Tools</a>
            <a href="/">AWS Builder</a>
            <a href="/">Start Build</a>
            <a href="/">Build Supplies</a>
            <a href="/">Tooling</a>
            <a href="/">BlueHosting</a>
        </div>

        <div className="flex w-auto text-[10px] ml-1 md:mt-0 mt-1 md:border-none border-t-2 border-b-2  md:ml-3">
            <p className="flex w-auto xl:text-[15px] mt-3 md:mt-0 ml-2 md:ml-0 mb-2 md:mb-0   text-[#5C6874]">Home <FaAngleRight id="right"/> Hosting for all <FaAngleRight id="right"/> Hosting <FaAngleRight id="right"/> Hosting6 <FaAngleRight id="right"/> Hosting5   </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
