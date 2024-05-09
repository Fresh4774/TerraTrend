import Image from "next/image";
import {  PiFacebookLogoFill, PiInstagramLogo, PiInstagramLogoFill, PiLinkedinLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from "react-icons/pi";

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
<PiInstagramLogoFill className="text-2xl text-gray-500" />
<PiTwitterLogoFill className="text-2xl text-gray-500" />
<PiFacebookLogoFill className="text-2xl text-gray-500" />
<PiYoutubeLogoFill className="text-2xl text-gray-500" />
<PiLinkedinLogoFill className="text-2xl text-gray-500" />
</div>

</div>
<br />
<div>2024 © All Rights Reserved.</div>
    </div> );
}
 
export default Footer;