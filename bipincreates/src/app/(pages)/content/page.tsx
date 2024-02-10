

import ContentPage from "@/components/pages/ContentPage"
import { contexttext } from "@/components/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Bipin Creates |content',
  description: 'We solve your problem',
}

const page = () => {
  return (
    <div className="w-full flex justify-center  h-auto">
      <div className="pt-20 w-full ">
      <ContentPage mainTitle="Graphics Design" image={contexttext["Graphics Design"].image} title={contexttext["Graphics Design"].title} summary={contexttext["Graphics Design"].summary}/>
      </div>
    </div>
  )
}

export default page
