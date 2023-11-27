import Image from "next/image";
import Link from "next/link";

import MGIlogo from "../../public/images/logo/MGI-logo.svg";
import { intria } from "@/fonts/general_fonts";

const navData = [
  { title: "Home", link: "/" },
  { title: "About us", link: "/aboutus" },
  { title: "Contact", link: "/contact" },
  { title: "Portfolio", link: "/portfolio" },
];

const MainNavigation = () => {
  return (
    <header className={`${intria.className} flex justify-between items-center pt-6 px-5 md:px-32 `}>
      <div className="h-[51.51px] w-[68.32px]">
        <Image
          src={MGIlogo}
          className="w-full h-ful"
          height={51}
          width={68}
          loading="eager"
          priority
        />
      </div>
      <nav className="flex space-x-20 text-[14px] text-secondary1">
        {navData.map((navObj, index) => (
          <Link key={index} href={navObj.link}>
            {navObj.title}
          </Link>
        ))}
      </nav>

      <button className="bg-primary text-[14px] font-bold rounded-[5px] py-2.5 px-3 text-white">Start Your Project</button>
    </header>
  );
};

export default MainNavigation;
