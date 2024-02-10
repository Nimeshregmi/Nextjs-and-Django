import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/profile/logo.png'


const Footer = () => {
  return (
    <footer className="w-full flex mt-12 bg-white ">
      <div className=" w-full ">
        <div className="md:flex w-full  bg-dark text-light p-5">
          <div className="mb-6 md:mb-0  md:w-[40vw]">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                priority
                className="h-16 w-auto "
                alt="BipinCreates"
              />
              <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
                Bipin Creates
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div >
              <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 gap-3 dark:text-gray-400 font-medium">
                <li >
                +977-9843506305
                </li>
                <li>
                +977-9815984650
                </li>
                <li>
                  <a href="mailto:bipinbaral1225@gmail.com">bipinbaral1225@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="mx-5 ml-9">
              <h2 className="mb-6 text-xl font-semibold text-gray-900  dark:text-white">
                QuickLinks
              </h2>
              <ul className="text-gray-500  gap-2 flex justify-center flex-col dark:text-gray-400 font-medium">
                <li className="hover:underline">
                  <a href="/">Home</a>
                </li>
                <li className="hover:underline">
                  <a href="/about">About</a>
                </li>
                <li className="hover:underline">
                  {/* <a href="/experience">Experiences</a> */}
                </li>
                <li className="hover:underline">
                  <a href="/services">Services</a>
                </li>
                <li className="hover:underline">
                  <a href="/about-us#ourteams">Teams</a>
                </li>
                <li className="hover:underline">
                  <a href="mailto:bipinbaral1225@gmail.com">Contact</a>
                </li>
                
                
              </ul>
            </div>
            <div className="">
              <h2 className="mb-6 text-xl  font-semibold text-gray-900 uppercase dark:text-white">
                <a href="/team">Teams</a>
              </h2>
              <ul className="text-gray-500 gap-3 flex flex-col dark:text-gray-400 font-medium">
                <li >
                  <a href="/" className="hover:underline">
                    Bipin Baral
                  </a>
                </li>
                <li>
                  <a href="https://regminimesh.com.np" className="hover:underline">
                    Nimesh Regmi
                  </a>
                </li>
                <li>
                  <a href="https://regminimesh.com.np" className="hover:underline">
                    Anupam Bista
                  </a>
                </li>
                <li>
                  <a href="https://regminimesh.com.np" className="hover:underline">
                    Raju Basnet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-0.5 border-gray-200 sm:mx-auto dark:border-gray-700 w-full" />
        <div className="sm:flex sm:items-center justify-center w-full py-3  bg-footerdown">
          <span className="text-sm text-gray-500 sm:text-center flex md:flex-row flex-col justify-center  w-full items-center ">
            <p>© {new Date().getFullYear()}{" "}
            <a className="hover:underline font-semibol font-bold">BipinCreates.&nbsp;  </a></p>
            <div>
              {" "}
              Build by{" "}
              <Link
                target="_blank"
                className="mx-1 cursor-pointer font-bold  hover:duration-100"
                href="https://regminimesh.com.np"
              >
                NimeshRegmi. 
              </Link>
            </div>{" "}
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
