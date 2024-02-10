import AnimatedText from "@/components/animated/SwiperTemplate";
import Card from "@/components/common/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bipin Creates | Services',
  description: 'Our Services',
}



const page = () => {
  return (
    <div className="w-full h-auto">
    <div className="flex w-full overflow-x-hidden flex-col justify-center items-center img pt-12">
      <AnimatedText
        text={"Our services"}
        classname="!m-8 xl:!text-4xl md:!text-4xl !text-3xl"
      />
      <Card
        title={"Web Development"}
        summary={"Elevate your online presence with our UI/UX design expertise. Specializing in visually stunning and user-friendly websites, this is the bipin creates website nding functionality with visual appeal. "}
        classname="md:!w-1/2 lg:!w-[50%] " image={"/serviceIcons/img2.png"}  smallclass="md:mr-40 !mt-3" divdot={true}    />
      <Card
        title="UI/UX Design"
        summary="Elevate your online presence with our UI/UX design expertise. Specializing in visually stunning and user-friendly websites, this is the bipin creates website nding functionality with visual appeal."
        classname="md:!w-1/2 lg:!w-[50%]  "
        smallclass="!flex-row-reverse md:-mr-40 !mt-8" image={"/serviceIcons/img3.png"}    divdot={true}   />
      <Card
        title="Motion Graphics"
        summary="Elevate your online presence with our UI/UX design expertise. Specializing in visually stunning and user-friendly websites, this is the bipin creates website nding functionality with visual appeal."
        classname="md:!w-1/2 lg:!w-[50%]" smallclass="md:mr-40 !mt-8" image={"/serviceIcons/img2.png"}     divdot={true}   />
      <Card
        title=" Graphics Design"
        summary="Elevate your online presence with our UI/UX design expertise. Specializing in visually stunning and user-friendly websites, this is the bipin creates website nding functionality with visual appeal."
        classname="md:!w-1/2 lg:!w-[50%]"
        smallclass="!flex-row-reverse md:-mr-40 !mt-8 !mb-4" image={"/serviceIcons/img4.png"}    divdot={true}    />
    </div>
    </div>
  );
};

export default page;
