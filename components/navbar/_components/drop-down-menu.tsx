import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white  px-4 items-center justify-center absolute  right-0 xl:hidden">

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
          <Link href={"/sign-in"}>
            <Button
              className="
              w-full
                        "
            >
       Visit our store
            </Button>
          </Link>

          <Link href={"/sign-in"}>
            <Button
            variant={"outline"}
            className="w-full"
        
            >
            Instagram
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
