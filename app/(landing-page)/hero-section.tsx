"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";


const tabs = [
  {
    name: "Large Variety", 
    description: "Multitude of products, exclusive design with each.",
    more: (
      <div className="text-yellow-600 flex items-center">
      Buy Now <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
  },
  {
    name: "Custom Pottery",
    description: "Flexible custom pottery on demand with ease.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Buy Now <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
  },

  {
    name: "KAPCO Box",
    description: "Made with the finest clay, delivered in the safest boxes.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Buy Now <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
  },
  {
    name: "Sustainble",
    description: "A sustainble alternative to metals and plastics.",
    more: (
      <div className="text-yellow-600 flex items-center">
        Buy Now <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
  },
];

const HeroSection = () => {
  const ref = useRef(null);


  const [activeTab, setActiveTab] = useState(tabs[0]);

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
 





  return (

      <div className="md:items-center flex flex-col ">
        <div
          className="
     
          font-medium
        
          2xl:w-1/3
          md:w-2/3
          xl:w-1/2
          
          
          lg:px-0
          px-8
    

  text-5xl
            xl:text-6xl     
            flex
            justify-center
            xl:font-medium
            xl:pt-14
            text-center 
            pt-6
            "
        >
          Where Tradition Meets Trend
        </div>

        <p
          className="
            text-2xl
            pt-4
            text-center
            w-2/3
            mx-auto
            "
        >
          At TerraTrend, our goal is to support Indian potters by providing them with essential capital, resources, and promotion to help them succeed. Our company is ethical, sustainable, and fairly compensates the potters. We seek to promote Indian handicrafts and to catapult the value of pottery on a commercial scale.
        </p>

        <div className="flex gap-4 pt-6 items-center justify-center">
          <Link href="https://terratrendstore.vercel.app">
            <Button className="py-1 ">
              <div className="flex items-center justify-center">
                <div className="text-lg">Visit our store</div>
                <div>
                  <PiArrowRight className="ml-2 " />
                </div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="pt-10 xl:pt-20 items-center justify-center">
          <Image
            src="/assets/womanPot.jpg"
            alt="hero image"
            width={1000}
            height={1000}
            className="flex items-center justify-center mx-auto w-90"
          />
        </div>
        {isSmallScreen ? (
          <div className="px-8">
         <div className="grid grid-cols-4   md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
            p-1
              md:p-8
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                  ? "rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 "
                  : "md:bg-[#f6f5f4]   rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] "
                } `
            }
                
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col   items-center md:justify-center mx-auto">
              <div className="font-medium text-sm  xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
          </div>

  
           

        ) : (
          <div className="flex  xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
            {tabs.map((tab) => (
              <motion.div
                key={tab.name}
                className={`
                xl:flex 
                justify-center 
                space-x-4
                xl:pt-4
                sm:my-10
               
                xl:my-0
                w-60
                h-36
                ${
                  activeTab === tab
                    ? "border rounded-xl pt-2 bg-white "
                    : "shadow-md rounded-xl pt-2  bg-[#f6f5f4] m"
                }
              `}
                onMouseEnter={() => setActiveTab(tab)}
              >
                <div className="px-4">
                  <div className="flex items-center">
                    <div className="text-2xl font-medium">{tab.name}</div>

                    {/* Render feature tag only for "AI" tab */}
                    {tab.name === "AI"}
                  </div>

                  <motion.div
                    className="flex flex-col text-sm"
                    initial={{ y: 0 }}
                    animate={{ y: activeTab === tab ? 10 : 25 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      {/* Only animate the description */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {tab.description}
                      </motion.div>
                    </div>

                    {/* Conditional rendering for "Learn more" link */}
                    {activeTab === tab && (
                      <div className="text-sm mt-2">{tab.more}</div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

  );
};

export default HeroSection;
