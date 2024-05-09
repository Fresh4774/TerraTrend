import Image from 'next/image';
import React from 'react';
import { PiArrowRight } from 'react-icons/pi';

const logos = [
  { image: "/logos/logoipsum-265.svg" },
  { image: "/logos/logoipsum-222.svg" },
  { image: "/logos/logoipsum-243.svg" },
  { image: "/logos/logoipsum-258.svg" },
  { image: "/logos/logoipsum-317.svg" },
  { image: "/logos/logoipsum-289.svg" },
  { image: "/logos/logoipsum-297.svg" },
  { image: "/logos/logoipsum-311.svg" },
  { image: "/logos/logoipsum-264.svg" },
  { image: "/logos/logoipsum-264.svg" },
];

const SecondSection = () => {
  return (
    <div className="pt-16 flex justify-center items-center flex-col">
      <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
      A Touch of Clay, A Dash of Style
      </div>
      <div className="py-4 xl:w-1/4 text-center px-8">
      we create handmade pottery using traditional techniques, shaping each piece by hand to infuse your kitchen with charm and coziness.
      </div>
      <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
        Visit our store <PiArrowRight className="ml-3 text-sm " />
      </div>
    </div>
  );
}

export default SecondSection;
