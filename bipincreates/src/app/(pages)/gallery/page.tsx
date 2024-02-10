
import AnimatedText from "@/components/animated/SwiperTemplate"
import Designs from "@/components/pages/Designs"
import { Images } from "@/components/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bipin Creates | Gallery',
  description: 'View of our work',
}


const page = () => {
  return (
    
    <div className="w-full lg:p-12 md:p-10 p-3 flex flex-col items-center justify-center pt-12">
      <AnimatedText text={"Our Designs  "} classname=" !m-8 xl:!text-4xl md:!text-4xl !text-3xl"/>
      <div className="grid md:px-10 mx-auto mt-10 place-items-center 2xl:px-14 md:grid-cols-4 grid-cols-2  2xl:gap-10 gap-6 w-full "> 
      {
          Images.map((_, i) => (
            <div key={i}>
              <Designs  src={`/design/img${i+1}.jpg`} />
            </div>
          ))
        }

        </div>
      
    </div>
  )
}

export default page

