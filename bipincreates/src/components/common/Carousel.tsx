'use client'
import Image from "next/image";
import { useState } from "react";
import { IoChevronForwardSharp ,IoChevronBackSharp } from "react-icons/io5";

interface Props{
    img: string; 
  }
const Carousel = () => {

    var [index,setindex]=useState(1);

    setInterval(()=>{
        if (index<4) {
            setindex(index=index+1);
       }
       else{
        setindex(1);
       }
    },8000);

    function increment() {
        if (index <4) {
          setindex(index + 1);
        } else {
          setindex(1); 
        }};

    function decrement(){
        if (index>1) {
            setindex(index=index-1);
        }
        else{
            setindex(4); 
        } };

  return (
    <div className=" w-full  relative  flex  items-center justify-center ">
      <div onClick={increment} className="absolute xl:text-2xl md:text-lg text-sm cursor-pointer  text-lightWhite  left-3 border p-2 hover:bg-navbarBlue  bg-none rounded-full"><IoChevronBackSharp/></div>
      <div>
        <Image src={`/slidebar/img${index}.jpg`}  width={3000} height={3000} alt={"Bipin Creates"} priority className=" w-full h-full transition ease-in-out duration-700"/>
      </div>
      <div onClick={decrement} className="absolute text-lightWhite xl:text-2xl md:text-lg text-sm   right-3 border cursor-pointer hover:bg-navbarBlue p-2 bg-none rounded-full"><IoChevronForwardSharp/></div>
    </div>
  )
}

export default Carousel
