
import Card from "@/components/common/Card";
import Carousel from "@/components/common/Carousel";
import Designs from "@/components/pages/Designs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full relative justify-center items-center pt-12 ">
        <div className="w-auto mx-2 md:mx-12 lg:mx-20 rounded-md h-auto mt-10 bg-lightWhite overflow-hidden">
        <Carousel/>
          </div>
        {/* first Card */}
        <div className="w-full flex   justify-center ">
          <div className=" md:w-1/2  mt-8 flex shadow-lg shadow-shadow mx-2 md:mx-4  md:ml-10 lg:w-[70vw] md:mr-10  rounded-2xl p-6 xl:flex-row flex-col">
            <div className="xl:w-1/2 max-xl:mb-4 h-auto items-center justify-center flex rounded-lg">
             <Image priority src={"/profile/bcgif.gif"} alt={"Giflogo"}  className="w-full h-auto rounded-md" width={10000} height={10000} />
            </div>
            <div className=" flex  flex-col xl:w-1/2 text-right">
            <span className="font-poppin font-semibold md:text-xl text-base text-dark text-right mb-2">
              Namaste ! Welcome to{" "}
              <h2 className=" text-right font-bold text-xl text-dark md:text-2xl">
                Bipin Creates
              </h2>
            </span>
            <p className="md:text-lg text-xs  font-medium flex text-dark  mb-2 lg:ml-6">
              We're your destination for standout graphic design, UI/UX, motion
              graphics, and web development services. Our team crafts stunning
              designs, intuitive interfaces,captivating motion visuals,and
              robust digital solutions. We prioritize your satisfaction through
              creative excellence, aiming to exceed expectations and build
              lasting partnerships. Let's collaborate to elevate your brand's
              online <br /> presence—contact us today!
            </p>
            </div>
          </div>
        </div>

        {/* Secons card */}
        <div className="w-full mb-12">
          <div className="flex flex-col gap-5 md:gap-12 mt-12 items-center justify-center">
            <div className="gap-5 md:gap-12 flex flex-col md:-ml-8 md:flex-row">
              <Card
                title={"Graphics Design"}
                classname=""
                summary={"Transforming ideas into visually compelling realities through expert graphic design solution and services."} image={"/serviceIcons/img1.png"}              />
              <Card
                title={"UI/UX Design"}
                summary={"Crafting intuitive and engaging digital experiences through seamless UI/UX design solutions."} image={"/serviceIcons/img2.png"}              />
            </div>
            <div className="flex gap-5 md:gap-12 flex-col md:ml-20 md:flex-row">
              <Card
                title={"Motion Graphics"}
                summary={"Bringing stories to life by skillfully editing and enhancing video content with creativity and precision."} image={""}              />
              <Card
                title={"Frontend Development"}
                summary={"Translating designs into bipin creates don ho  interactive and responsive websites with expertise in frontend development."} image={""}              />
            </div>
          </div>
        </div>

        {/* Design and products */}
        <div className="grid md:px-10 mx-auto p-6 place-items-center 2xl:px-14 xl:grid-cols-3 grid-cols-2  2xl:gap-12 gap-6 "> 
        {
          Array.from({ length: 7 }).map((_, i) => (
            <div key={i}>
              <Designs src={`/design/img${i+1}.jpg`} />
            </div>
          ))
        }
        </div>
      </main>
    </>
  );
}
