
import { PiArrowRight } from "react-icons/pi";
import Image from "next/image";


const GetStartedFree = () => {
    return ( 
    <>
        <div className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Find your pottery style
        </div>
        <div className="py-4 xl:w-1/3  text-center px-10">
        Discover artisanal pottery for timeless elegance at home. Shop now and bring artistry to your space.
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
          Visit our store <PiArrowRight className="ml-3 text-sm " />
        </div>

        <Image
            src="/assets/womanPot.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="w-100 pt-10"
            />

      </div>
    </>
    
    );
}
 
export default GetStartedFree;