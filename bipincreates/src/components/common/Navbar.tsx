"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaBehanceSquare,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { FaXmark } from "react-icons/fa6";
import logo from "../../../public/profile/darklogo.png";

interface CustomLinksProps {
  title: ReactNode;
  className?: string;
  href: string;
}
interface CustomMobileLinksProps {
  title: ReactNode;
  className?: string;
  href: string;
  toggle: Function;
}

const CustomMobileLinks = ({
  title,
  className = "",
  href,
  toggle,
}: CustomMobileLinksProps) => {
  const router = usePathname();
  const route = useRouter();
  const handleClick = () => {
    toggle();
    route.push(href);
  };
  return (
    <button onClick={handleClick} className="w-full my-1 flex flex-col">
      <motion.a
        className={`${className} relative group cursor-pointer text-lightWhite 
      `}
      >
        {title}
        <span
          className={`h-1 bg-lightWhite  inline-block absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router == href ? "w-full" : "w-0"
          } `}
        >
          &nbsp;
        </span>
      </motion.a>
    </button>
  );
};

const CustomLinks = ({ title, className = "", href }: CustomLinksProps) => {
  const router = usePathname();
  return (
    <Link href={href} legacyBehavior>
      <motion.a
        className={`${className} ${
          router == href ? "font-bold" : "font-medium"
        } relative group cursor-pointer  text-2xl
      `}
      >
        {title}
        <span
          className={`h-1 bg-dark dark:bg-light inline-block absolute w-0 left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router == href ? "w-full" : "w-0"
          } `}
        >
          &nbsp;
        </span>
      </motion.a>
    </Link>
  );
};

const MotionLink = motion(Link);

const Navbar = () => {
  const [togglle, settogglle] = useState(false);
  const handletoggle = () => {
    settogglle(!togglle);
  };
  const phoneNumber = 9843506305;
  const facebook = 'bipincreates';
  const instagram = 'bipincreates1';
  const linkedin = 9843506305;
  const behance = 9843506305;
  const github = 9843506305;
  return (
    <header
      className="w-full px-5 md:px-24 fixed  justify-between items-center py-3 md:py-3 font-medium flex
    z-30 lg:px-16  sm:px-6      bg-navbarBlue font-poppin"
    >
      <div className="w-full flex">
        {/* for smaller device */}
        <div className="w-full   bg-navbarBlue flex items-center justify-start cursor-pointer duration-75 text-2xl lg:hidden">
          <div onClick={handletoggle}>
            {togglle ? <FaXmark /> : <VscThreeBars />}
          </div>

          {/* Bipincreates in mobile navbar */}
          <div className="left-16 relative">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                priority
                className="h-12 w-12  rounded-full"
                alt="BipinCreates"
              />
              <span className="ml-0 pl-0 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                BipinCreates
              </span>
            </a>
          </div>
        </div>
        <div>
          {togglle && (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-68%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`min-w-[70vw]  flex-col fixed justify-between items-center top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90  py-10 rounded-2xl backdrop-blur-md flex `}
            >
              <nav className="flex flex-col items-center justify-center ">
                <div
                  onClick={handletoggle}
                  className="text-light text-2xl absolute right-4 top-3"
                >
                  <FaXmark />
                </div>
                <CustomMobileLinks
                  href="/"
                  title="Home"
                  className="mr-4 "
                  toggle={handletoggle}
                />
                <CustomMobileLinks
                  className=" "
                  toggle={handletoggle}
                  href="/services"
                  title="Services"
                />
                <CustomMobileLinks
                  className=" "
                  toggle={handletoggle}
                  href="/about-us"
                  title="About Us"
                />
                <CustomMobileLinks
                  className=" "
                  toggle={handletoggle}
                  href="/gallery"
                  title="Gallery"
                />

                {/* Dropdown  */}
              </nav>
              <nav className="flex items-center justify-center gap-5  px-5 sm:gap-3 flex-wrap text-2xl text-lightWhite  mt-4">
                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={`https://facebook.com/${facebook}`}
                >
                  <FaFacebook />
                </Link>
                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={`https://instagram.com/${instagram}`}
                >
                  <FaInstagram />
                </Link>
                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={`https://behance.com/${behance}`}
                >
                  <FaBehanceSquare />
                </Link>
                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={`https://github.com/${github}`}
                >
                  <FaGithub />
                </Link>
                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={`https://linkedin.com/${linkedin}`}
                >
                  <FaLinkedin />
                </Link>

                <Link
                  target="_blank"
                  className="cursor-pointer"
                  href={`https://wa.me/${phoneNumber}`}
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </Link>
              </nav>
            </motion.div>
          )}
        </div>

        {/* for larger device */}
        <div className="w-full    justify-between items-center overflow-hidden xl:px-28  hidden lg:flex">
          <a href="/">
            {" "}
            <Image
              src={logo}
              priority
              className="h-10 w-auto cursor-pointer"
              alt="BipinCreates"
            />
          </a>
          <nav className="flex gap-16">
            <CustomLinks title={"Home"} href={"/"} />
            <CustomLinks title={"Services"} href={"/services"} />
            <CustomLinks title={"About Us"} href={"/about-us"} />
            <CustomLinks title={"Gallery"} href={"/gallery"} />

            {/* <CustomLinks className=" " href="/gallery" title="Gallery" /> */}
          </nav>

          <div className="flex items-center justify-center gap-5 flex-wrap text-xl">
            <MotionLink
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
              target="_blank"
              className="cursor-pointer"
              href={`https://facebook.com/${facebook}`}
            >
              <FaFacebook />
            </MotionLink>
            <MotionLink
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
              target="_blank"
              className="cursor-pointer"
              href={`https://instagram.com/${instagram}`}
            >
              <FaInstagram />
            </MotionLink>
            <MotionLink
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
              target="_blank"
              className="cursor-pointer"
              href={`https://behance.com/${behance}`}
            >
              <FaBehanceSquare />
            </MotionLink>
            <MotionLink
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
              target="_blank"
              className="cursor-pointer"
              href={`https://github.com/${github}`}
            >
              <FaGithub />
            </MotionLink>
            <MotionLink
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
              target="_blank"
              className="cursor-pointer"
              href={`https://linkedin.com/${linkedin}`}
            >
              <FaLinkedin />
            </MotionLink>
            <MotionLink
              whileHover={{
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
              target="_blank"
              className="cursor-pointer "
              href={`https://wa.me/${phoneNumber}`}
            >
              <FaWhatsapp />
            </MotionLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
