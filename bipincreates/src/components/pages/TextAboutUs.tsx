import { motion } from "framer-motion";
import { useRef } from "react";
import Liicons from "../animated/Liicons";

interface Props {
  title: string;
  summary: string;
  className?: string;
  showcircle?:boolean;
}
const TextAboutUs = ({ title, summary,className,showcircle=true }: Props) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className=" first:mt-0 last:mb-0  mx-auto flex flex-col items-center ml-6 md:ml-8 justify-between p-2 md:w-[90%]"
    >
      {showcircle && <Liicons reference={ref} />}
      <motion.div
      viewport={{once: true}}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className={`${className} text-xl mb-2  font-bold`}>{title}</h1>
        <p className="font-normal font-poppin">{summary}</p>
      </motion.div>
    </li>
  );
};

export default TextAboutUs;
