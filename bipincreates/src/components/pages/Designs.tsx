"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


interface DesignProps {
  src: string;
}

const Designs = ({ src }: DesignProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative cursor-pointer  aspect-square  bg-lightWhite flex overflow-hidden rounded-2xl" >
        <motion.div whileHover={{ scale: 1.1 }}
        
        className="overflow-hidden">
         <a  href={src}>
            <Image
              src={src} onClick={handleClick}
              alt={"bipin creates"}
              priority 
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-2xl"
            />
            
          </a> 
        </motion.div>
      </div>
    </>
  );
};

export default Designs;
