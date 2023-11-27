import Image from "next/image";
import toppngImage from "../../../public/images/images/toppng-image.svg";
import { gelasio } from "@/fonts/general_fonts";



const HeroSection = () => { 
  return (
    <section>
      <div className="flex">
        <div className="w-[114.84px] h-[120.19px]">
          <Image
            src={toppngImage}
            className="w-full h-full"
            priority
            loading="eager"
          />
        </div>
        <div className={gelasio.className}>
          <p className="font-bold text-[34px] text-center text-secondary3">
            Don’t Settle for Less. Achieve Business Excellence with Marshall
            Goodman Industries.
          </p>
          <p className="text-secondary2">
             Kickstart Your Business Visibility With The Ultimate IT Partner
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
