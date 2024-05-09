"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight, PiArrowRight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    image: "/assets/pot1.jpg",
  },

  {
    image: "/assets/pot2.jpg",
  },
  {
    image: "/assets/pot4.jpg",
  },
];


const SixthSection = () => {
  const ref = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col ">
        <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center">
        TerraTrends Pottery Trends
        </div>
        <div className="py-4 px-10  xl:w-1/2 2xl:w-1/3 md:w-2/3 text-center">
          Exceptional, exclusive, embracing Trends few clicks away from your door steps.
        </div>
        <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 3
                  ? "xl:col-span-4 md:col-span-6 lg:col-span-8 lg:row-span-3 flex bg-[#f6f5f4] rounded-xl "
                  : index > 3
                  ? "col-span-12 lg:col-span-4  md:col-span-4 bg-[#f6f5f4] rounded-xl flex-col "
                  : "l"
              }
            `}
            >
              {index <= 3 ? (
                <div>
                  <div className="flex justify-center items-center flex-col">
                    <Image
                      src={tab.image || ""}
                      width={500}
                      height={500}
                      alt="logo"
                      className="w-full  rounded-xl p-10"
                    />
                  </div>
                </div>
              ) : index > 5 && (
                  <div className="flex  flex-col">
                  </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}





export default SixthSection;

