'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


interface CustomLinksProps {
  title: ReactNode;
  className?: string;
  href: string;
}
const CustomLinks = ({ title, className = "", href }: CustomLinksProps) => {
  const router = usePathname();
  return (
    <Link href={href} legacyBehavior>
      <motion.a
        className={`${className} ${
          router == href ? "font-bold bg-footerdown" : "font-medium bg-dark"
        } relative group cursor-pointer  lg:text-xl text-lightWhite  transition-[width] ease duration-300   rounded-3xl px-3 py-2 hover:bg-footerdown
      `}
      >
        {title}
        
      </motion.a>
    </Link>
  );
};

const ContentHeader = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
      <div className='rounded-3xl mt-12 bg-dark p-2'>
          <CustomLinks title={"Graphics Design"} href={"/content/graphics-design"}/>
          <CustomLinks title={" Motions Graphics"} href={"/content/motion-graphics"}/>
          <CustomLinks title={"Web Development"} href={"/content/web-development"}/>
          <CustomLinks title={"UI/UX Design"} href={"/content/ui-ux-design"}/>
      </div>
    </div>
  )
}

export default ContentHeader