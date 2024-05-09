
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <>
            <Link href={"/"}>
                <Image
                    src="/logos/icon.png"
                    alt="logo"
                    width={60}
                    height={60}
                    className="
                    w-18
                    ml-2
                  "
                    />
            </Link>
    </> 
    );
}
 
export default Logo;