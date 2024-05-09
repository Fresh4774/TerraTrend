import Image from "next/image";
import { PiInstagramLogoFill, PiYoutubeLogoFill } from "react-icons/pi";

const Footer = () => {
    return ( 
        <div className=" flex align-center justify-center items-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
                <div className="pt-4 align-center">
<Image
    src="/logos/iconH.png"
    width={1025}
    height={500}
    alt="logo"
    className="w-[200px]"
/>
<br />
<div className="flex space-x-2">
<div className="flex">
<PiInstagramLogoFill className="text-2xl text-gray-500" />
Instagram
</div>

<div className="flex">
<PiYoutubeLogoFill className="text-2xl text-gray-500" />
YouTube
</div>
</div>
</div>
<br />
<div>2024 © All Rights Reserved.</div>
    </div> );
}
 
export default Footer;