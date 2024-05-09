import Image from 'next/image';
import React from 'react';

import { Lora } from 'next/font/google';
import { cn } from '@/lib/utils';


const font = Lora({
    subsets: ["latin"],
    weight: ["400"],
})

const ThirdSection = () => {
    return (
        <div className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col">
            <div className="xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 font-medium xl:w-1/3 mx-auto text-center">
            From Our Wheel to Your Home 
            </div>

<div className={cn(
    'flex items-center justify-center text-xl xl:text-2xl pt-10 pb-4  xl:py-10 px-8  text-center  w-4/5 ',
    font.className
)}>
                &quot;Transform your space with timeless elegance. Discover exquisite pottery that reflects craftsmanship and heritage, curated for your discerning taste. Elevate your home with artistry and soul.&quot;
            </div>

   
            <div className="items-center flex justify-center flex-col">
            <Image
              src="/logos/icon.png"
              alt="Canva logo"
              width={1200}
              height={1200}
              className="pt-2 xl:pt-0  w-20 "
            />
       
          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">TerraTrend</div>
            <div className="text-sm">The Taj of Indian Culture, Pottery!</div>
          </div>
          </div>

        </div>
    );
}

export default ThirdSection;