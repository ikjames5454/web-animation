import React, { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import StarBackground from "./StarBackground";
import background from "./background.jpg"
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";


/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations: FC<IntegrationsProps> = ({ slice }) => {


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image 
      src={background} 
      alt="image" 
      fill
      quality={90}
      className="object-cover"
      />
      <StarBackground />
       
       <div className="relative">

       <h2 className="max-w-2xl mx-auto text-balance text-center text-5xl font-medium md:text-7xl">
      <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
      <PrismicRichText field={slice.primary.body} />
      </div>

       <AnimatedContent slice={slice} />
       </div>
      
    </Bounded>
  );
};

export default Integrations;
