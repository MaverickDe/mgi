import MainNavigation from "@/components/Layout/MainNavigation";
import Footer from "@/components/Layout/Footer";

import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../helpers/utils";
import { poppins, intria, gelasio } from "../fonts/general_fonts";
import { Section1 } from "@/components/About/section1";
import { Section2 } from "@/components/About/section2";
import { Section3 } from "@/components/About/section3";
import { Section4 } from "@/components/About/section4";
import { Section5 } from "@/components/About/section5";
import { useEffect, useState } from "react";

export default function About() {
  let mwidth = useMediawQuery(useMediaQuery);
  let [eth, setEth] = useState(null);
  useEffect(() => {
    //  solves hydration
    setEth(true);
  }, []);
  return !eth ? (
    <></>
  ) : (
    <>
      {/* <MainNavigation /> */}
      <div className="mt-10 w-full box-border">
        <div
          className={` ${mwidth.isTabletDevice ? "px-[5px]" : "px-[100px]"}`}
        >
          <Section1 />

          {mwidth.isTabletDevice ? (
            <div className="flex justify-around mt-[300px] ">
              <div>
                <h1 className="text-primary">
                  <b>100K+</b>
                </h1>
                <h2>Happy Customers</h2>
              </div>
              <div>
                <h1 className="text-primary">
                  <b>100K+</b>
                </h1>
                <h2>Happy Customers</h2>
              </div>
            </div>
          ) : (
            <></>
          )}

          <Section2 />

          <Section3 />

          <Section4 />
        </div>

        <div className="bg-[#F5F5F5] py-[100px]">
          <Section5 />
        </div>
      </div>
      <Footer />
    </>
  );
}
