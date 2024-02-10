"use client";
import Image from "next/image";
import "swiper/css";
// import 'swiper/swiper-bundle.min.css';

interface ChildProps {
  title: string;
  image: string[];
  summary: string;
}
const InnerElement = ({ title, image, summary }: ChildProps) => {
  return (
    <div className="w-full md:w-[80%] rounded-lg md:mx-10 h-auto flex flex-col shadow-inner shadow-dark p-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:font-bold font-semibold text-lg md:text-xl">
          {title}
        </h1>
        <span className="font-medium text-sm mb-3 md:text-base">{summary}</span>
      </div>
      
      <section className="flex flex-nowrap overflow-x-scroll scrollbar-hide md:pb-10">
    {image.map((item, index) => (
      <div  key={index} className="flex flex-nowrap mx-2" style={{minWidth: '25%'}}>
        <a href={item}>
        <Image
          className="aspect-square  rounded-lg flex-none"
          width={1000}
          height={1000}
          src={`${item}`}
          alt={title + index}
        />
        </a>
      </div>
    ))}
  </section>
    </div>
  );
};
interface Props {
  mainTitle: string;
  image: string[][];
  title: string[];
  summary: string[];
}
const ContentPage = ({ mainTitle, image, title, summary }: Props) => {
  return (
    <div className="w-full h-auto p-2  items-center  mx-auto justify-center flex flex-col">
      <div className="w-full h-auto pb-3 px-12">
        
      </div>
      <div className="w-full  h-auto flex-col  flex gap-4">
        {summary.map((item, index) => {
          return (
            <div className="flex justify-center" key={index}>
              <InnerElement
                title={title[index]}
                image={image[index]}
                summary={item}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentPage;
