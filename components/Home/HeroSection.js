import Image from "next/image";

import toppngImage from "../../public/images/images/toppng-image.svg";
import heroImage from "../../public/images/images/hero-image.svg";
import networkIcon from "../../public/images/icons/network-icon.svg";
import industryIcon from "../../public/images/icons/industry-icon.svg";
import likeIcon from "../../public/images/icons/like-icon.svg";

import { gelasio, intria, inter } from "@/fonts/general_fonts";

const HeroSection = () => {
  return (
    <section className="pt-24">
      <div className="flex md:px-16">
        <div className="w-[114.84px] h-[120.19px]">
          <Image
            src={toppngImage}
            className="w-full h-full"
            priority
            loading="eager"
          />
        </div>
        <div className={`${gelasio.className} space-y-3 max-w-[871px] mx-auto`}>
          <p className="font-bold text-[34px] text-center text-secondary3 leading-tight">
            Don’t Settle for Less. Achieve Business Excellence with Marshall
            Goodman Industries.
          </p>
          <p
            className={`${intria.className} text-secondary2 text-[24px] text-center`}
          >
             Kickstart Your Business Visibility With The Ultimate IT Partner
          </p>
        </div>
      </div>
      <div className="relative py-28 flex justify-center">
        <div className="w-[80%] h-[448] rounded-[10px] overflow-hidden">
          <Image
            src={heroImage}
            className="h-full w-full object-cover"
            height={448}
            width={1156}
            priority
            loading="eager"
          />
        </div>

        <div
          className={`${inter.className} absolute top-10 left-5   `}
        >
          <div className="h-full w-full relative space-y-3 py-5 px-8 bg-white rounded-[12px] shadow-customShadow1">
            {" "}
            <p className="text-[13px] font-bold text-center">Why MGI?</p>
            <div className="flex items-center space-x-2 text-secondary4">
              <div className="flex items-center justify-center bg-primary rounded-full h-[40px] w-[40px]">
                <div className="w-[13px] h-[13.15px]">
                  <Image
                    src={networkIcon}
                    className="w-full h-full"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
              <p className="text-[12px] ">Innovative Solutions</p>
            </div>
            <div className="flex items-center space-x-2 text-secondary4">
              <div className="flex items-center justify-center bg-primary rounded-full h-[40px] w-[40px]">
                <div className="w-[13px] h-[13.15px]">
                  <Image
                    src={industryIcon}
                    className="w-full h-full"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
              <p className="text-[12px] ">Innovative Solutions</p>
            </div>

            <div className="absolute -bottom-5 -right-6 bg-primary rounded-[9.09px] py-4 px-3.5">
              <div className="w-[19.68px] h-[13.94px]">
              <Image
                    src={likeIcon}
                    className="w-full h-full"
                    height={13}
                    width={19}
                    loading="eager"
                    priority
                  />
              </div>
            </div>
          </div>
        </div>




        
        <div
          className={`${inter.className} absolute bottom-10 right-5   `}
        >
          <div className="h-full w-full relative space-y-3 py-5 px-8 bg-white rounded-[12px] shadow-customShadow1">
            {" "}
            <p className="text-[13px] font-bold text-center">Tailored Solutions</p>
            <div className="flex items-center space-x-2 text-secondary4">
              <div className="flex items-center justify-center bg-primary rounded-full h-[40px] w-[40px]">
                <div className="w-[13px] h-[13.15px]">
                  <Image
                    src={networkIcon}
                    className="w-full h-full"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
              <p className="text-[12px] ">Custom Product Development</p>
            </div>
            <div className="flex items-center space-x-2 text-secondary4">
              <div className="flex items-center justify-center bg-primary rounded-full h-[40px] w-[40px]">
                <div className="w-[13px] h-[13.15px]">
                  <Image
                    src={industryIcon}
                    className="w-full h-full"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
              <p className="text-[12px]">IT Consulting</p>
            </div>

            <div className="absolute -top-5 -left-6 bg-primary rounded-[9.09px] py-4 px-3.5">
              <div className="w-[19.68px] h-[13.94px]">
              <Image
                    src={likeIcon}
                    className="w-full h-full"
                    height={13}
                    width={19}
                    loading="eager"
                    priority
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
