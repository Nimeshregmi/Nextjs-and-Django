"use client";
import AnimatedText from "@/components/animated/SwiperTemplate";
import TextAboutUs from "@/components/pages/TextAboutUs";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import AutoIncrementToText from "@/components/pages/AutoIncrementToText";
import ActiveSlider from "@/components/animated/ActiveSlider";
import Image from "next/image";
import Liicons from "@/components/animated/Liicons";


const page = () => {
  const reff = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: reff,
    offset: ["start end", "center start"],
    layoutEffect:false
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[100vw] overflow-hidden pt-12">
        <AnimatedText
          text={"About Bipin Creates"}
          classname="!m-8 xl:!text-4xl md:!text-4xl !text-3xl"
        />
        <div
          className="flex relative flex-col  justify-center items-center w-full pl-2 md:w-[80%]"
          ref={reff}
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-5 sm:left-3 md:left-6 top-0 bottom-16  w-[4px] h-full  bg-dark origin-top"
          />
          {/* upper Beginning and story section */}
          <TextAboutUs
            title={"Beginning"}
            summary={
              "Created in 2019 as a graphic design solution in a small room with TOSHIBA laptop, Bipin Creates, has now dynamic collective of creative minds dedicated to crafting exceptional digital experiences. With a passion for innovation and a commitment to excellence, we specialize in a spectrum of creative services, including Graphic designing, UI/UX designing, Motion graphics, and Web development."
            }
          />

          <TextAboutUs
            title="Our Story"
            summary="Born in 2019 as a passion project designer Bipin Creates started with a clear focus on delivering exceptional visual experiences. Our journey began by honing our expertise in graphic design and later expanded our offerings to cater to diverse digital needs. Over the years, we have honed our skills and expertise, evolving into a team that thrives on pushing boundaries and setting new standards of excellence."
          />
          {/* text-count up section */}
          <div className="w-full h-auto ">
            <AutoIncrementToText />
          </div>
          <TextAboutUs
            title={"Our Creative Team"}
            summary={
              "Meet the innovative minds behind Bipin Creates. Our team comprises seasoned professionals from diverse backgrounds, each bringing a unique set of skills and perspectives to the table. From visionary graphic designers to meticulous UI/UX experts, creative video editors, and proficient web developers, we come together to create synergistic solutions that captivate and inspire."
            }
          />
          {/* Teams Profiles */}
          <div className="w-full h-full" id="ourteams">
            <ActiveSlider />
          </div>
          <div className=" ">
            <div className="justify-between ">
              <Liicons reference={reff} />
              <h1 className="font-bold mb-2 text-xl w-full flex ml-7 md:ml-10">
                What We Do
              </h1>
            </div>

            <TextAboutUs
              title={"Graphic Designing:"}
              summary={
                "Our graphic design wizards breathe life into ideas, meticulously crafting visuals that tell compelling stories. From concept to execution, we specialize in creating visually stunning designs that resonate with your audience and elevate your brand identity."
              }
              showcircle={false}
              className="!text-base"
            />

            <TextAboutUs
              title={"UI/UX Designing:"}
              summary={
                "Crafting seamless and intuitive user experiences is our forte. We delve deep into user behavior and preferences to design interfaces that not only look exceptional but also offer unparalleled usability and functionality."
              }
              showcircle={false}
              className="!text-base"
            />

            <TextAboutUs
              title="Video Editing:"
              summary="Transforming raw footage into polished masterpieces is where our
              video editing prowess shines. Whether it's storytelling,
              promotional videos, or engaging content for various platforms, our
              video wizards bring narratives to life through captivating
              visuals."
              showcircle={false}
              className="!text-base"
            />

            <TextAboutUs
              title={"Web Development:"}
              summary={
                "Our web development wizards are adept at turning ideas into    functional, responsive, and visually stunning websites. Using the latest technologies and frameworks, we build digital experiences that leave a lasting impression."
              }
              showcircle={false}
              className="!text-base"
            />
          </div>
          <div className="p-4 md:w-[90%]">
            <div className="md:p-6 max-md:pl-3">
              <Image
                src={"/slidebar/img1.jpg"}
                alt={"Bipin Creates"}
                className="w-full rounded-xl h-auto"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <TextAboutUs
            title={"Our Mission"}
            summary={
              "Our mission is to be at the forefront of creativity and innovation, delivering solutions that not only meet but exceed our clients' expectations. We strive to be trailblazers in our industry, embracing new challenges and technologies to consistently deliver cutting-edge solutions."
            }
          />
          <TextAboutUs
            title={"Our Approach"}
            summary={
              "At Bipin Creates, collaboration and innovation are at the heart of everything we do. We believe in forging strong partnerships with our clients, understanding their goals, and working together as a cohesive unit to achieve outstanding results. Our iterative process ensures that every project evolves through constant feedback and refinement."
            }
          />
          <div className="my-4 first:mt-0 last:mb-0 ml-7 md:ml-9  flex flex-col  justify-start ">
            <div className="flex justify-between items-center mt-7 my-2">
              <Liicons reference={reff} />
              <h1 className="font-bold text-xl   font-poppin">
                Why Choose Bipin Creates
              </h1>
            </div>
            <ul>
              <li className="inline-table font-normal">
                <span className="font-bold text-base">Tailored Solutions:</span>{" "}
                We understand that every project is unique, and we tailor our
                services to suit your specific needs and objectives.
              </li>
              <li className="inline-table font-normal mt-2">
                <span className="font-bold text-base">
                  Attention to Detail:
                </span>
                We pay meticulous attention to detail, ensuring that every
                aspect of our work is crafted with precision and care.
              </li>
              <li className="inline-table font-normal mt-2">
                <span className="font-bold text-base">Timely Delivery:</span>We
                value your time. Our commitment to timely delivery ensures that
                your project progresses smoothly and efficiently.
              </li>
              <li className="inline-table font-normal mt-2">
                <span className="font-bold text-base">
                  Passion for Excellence:
                </span>{" "}
                We are driven by a passion for excellence, continuously refining
                our skills and techniques to deliver the highest quality of
                work.
              </li>
            </ul>
            <h1 className="text-lg mt-10 font-poppin">
              Thank you for considering Bipin Creates. We are excited about the
              possibility of collaborating with you and bringing your creative
              visions to fruition.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
