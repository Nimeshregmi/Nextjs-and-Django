
  "use client";
  import { motion } from "framer-motion";
  import Image from "next/image";
  import Link from "next/link";
  import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
  
  
  
  interface Props {
    className?: string;
    img: string;
    name: string;
    facebookLink?: string;
    instaLink?: string;
    linkedinLink?: string;
    gitHubLink?: string;
    Number?: string;
    mail?: string;
    skills: string;
    firstClass?: string;
  }
  
  const MotionLink = motion(Link);
  const PhotoClickDisplay = () =>({
    className = "",
    img,
    facebookLink,
    instaLink,
    linkedinLink,
    gitHubLink,
    name,
    Number,
    mail,
    skills,
    firstClass = "",
  }: Props) => {
    return (
      <div
        className={`${className} shadow-lg rounded-2xl my-3  shadow-dark w-full flex`}
      >
        <Image
          priority
          src={img}
          alt={name}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
        <div className="flex w-full p-1 flex-col h-full items-start ml-2 justify-center">
          <span className={`font-bold text-xl pt-3 ${firstClass}`}>{name}</span>
          <span className="font-semibold max-md:text-xs space-y-0">{skills}</span>
          {Number != null && (
            <span className="font-semibold text-base my-1 ">
              +977 &nbsp;{Number}
            </span>
          )}
          {mail != null && (
            <span className="font-semibold text-base my-1">{mail}</span>
          )}
          {mail != null && (
            <a
              href={`mailto:${mail}`}
              className="font-medium flex flex-wrap text-base my-1"
            >
              {mail}
            </a>
          )}
          <div className="flex items-center mt-3 w-full justify-start mb-5 gap-3 md:gap-5 flex-wrap text-xl">
            {facebookLink != null && (
              <MotionLink
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.5 },
                }}
                target="_blank"
                className="cursor-pointer "
                href={`${facebookLink}`}
              >
                <FaFacebook />
              </MotionLink>
            )}
  
            {instaLink != null && (
              <MotionLink
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.5 },
                }}
                target="_blank"
                className="cursor-pointer"
                href={`${instaLink}`}
              >
                <FaInstagram />
              </MotionLink>
            )}
  
            {gitHubLink != null && (
              <MotionLink
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.5 },
                }}
                target="_blank"
                className="cursor-pointer"
                href={`${gitHubLink}`}
              >
                <FaGithub />
              </MotionLink>
            )}
            {linkedinLink != null && (
              <MotionLink
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.5 },
                }}
                target="_blank"
                className="cursor-pointer"
                href={`${linkedinLink}`}
              >
                <FaLinkedin />
              </MotionLink>
            )}
          </div>
        </div>
      </div>
    );
  };
  
 
  
export default PhotoClickDisplay;
