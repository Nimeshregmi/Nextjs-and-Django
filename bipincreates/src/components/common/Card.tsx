"use client"
import { useRouter } from "next/navigation";
import Layout from "../animated/Layout";
import { FaForward } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import { title } from "process";


interface Props {
    title: string;
    summary: string;
    img?: string;
    classname?: string;
    smallclass?: string;
    image:string| StaticImageData;
    divdot?:boolean;
  }
   

const  Card = ({ title, summary, img = "", classname = "" ,smallclass="",image,divdot=false}: Props) => {
  const route=useRouter()
  const url=title.split(" ").join("-").split("/").join("-").toLowerCase()
  return (
    <div onClick={()=>{
      route.push(`/content`)
    }} className={`flex w-full opacity-100  cursor-pointer justify-center items-center  ${smallclass} `}>
    <Layout
        className={`${classname} shadow-inner glassbg  shadow-innershadow    flex w-[90%] md:w-[18rem]  mx-4 lg:w-[25rem] rounded-2xl  md:px-3  gap-2 items-center`}
      >
         <div  className="outline-dotted  hidden md:flex w-[7%] h-auto rounded-full overflow-hidden ">
         <Image
        src={image}
        alt={title}
        className=" p-1 w-full h-full rounded-full"
        width={150}
        height={150}
      />
    </div>
        <div className="p-3 md:w-[93%]">
          <h2 className="font-semibold  text-base text-dark  md:text-2xl">{title}</h2>
          <h2 className="md:text-lg text-dark  text-sm font-poppin ">{summary}</h2>
        </div>
      </Layout>
    {divdot && <Layout className={` p-3 rounded-full bg-navbarBlue hidden  md:flex`}>
          <FaForward/>
          <div></div>
        </Layout>}
      
      </div>
  )
}

export default Card
