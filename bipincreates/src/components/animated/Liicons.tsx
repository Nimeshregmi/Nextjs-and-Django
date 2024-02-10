import {motion, useScroll} from "framer-motion"
import { RefObject } from "react";


interface Props{
    reference:RefObject<HTMLElement>;
}

const Liicons = ({reference}:Props) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
      });
  return (
   <figure className="absolute sm:-left-8 md:-left-3 -left-4  stroke-dark">
    <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="20"  className="stroke-primary  stroke-1 fill-none"/ >
        <motion.circle cx="75" cy="50" r="20"  className=" stroke-[5px]  fill-light"
        style={{
            pathLength:scrollYProgress
        }}
        / >
        <circle cx="75" cy="50" r="10"  className="animate-pulse stroke-1 fill-primary fill-navbarBlue"/ >
    </svg>
   </figure>
  )
}

export default Liicons