import Link from "next/link";
import logo from "../../public/images/logo/MGI-logo2.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
import { gelasio } from "@/fonts/general_fonts";
import { useEffect, useState } from "react";

const Footer = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  let [eth, setEth] = useState(null);
  useEffect(() => {
    //  solves hydration
    setEth(true);
  }, []);
  return !eth ? (
    <></>
  ) : (
    <footer
      className={`px-[10px] bg-[#262626] py-[100px] ${
        !mwidth.isLaptop ? "text-[16px]" : "text-[10px]"
      }`}
    >
      <div>
        <div
          className={`flex gap-[50px] my-[30px] justify-between  text-white ${
            mwidth.isTabletDevice ? "flex-col" : "flex-row"
          }`}
        >
          <div>
            <Image
              src={logo}
              className={` ${"h-100"} p-0 m-0`}
              priority
              loading="eager"
            />
          </div>
          <div
            className={`flex gap-[20px] justify-between items-start ${gelasio.className} w-[80%]`}
          >
            {!mwidth.isLaptop ? (
              <div className="flex flex-col gap-[10px] ">
                {[
                  { name: "Home" },
                  { name: "About us" },
                  { name: "contact" },
                ].map((e, index) => {
                  return (
                    <a to="/" key={index} className=" my-[10px]">
                      {e.name}
                    </a>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            <div>
              <h1>
                <b>Contact us</b>
              </h1>

              <p>Email: info@mgihq.com.ng</p>
              <p>Phone number: +2348068621706</p>
            </div>
            <div>
              <div className="mb-[10px] ">
                <h1>
                  <b>Address</b>
                </h1>
                <h2>
                  <b>Marshall Industries cooperation</b>
                </h2>
              </div>
              <div className="flex gap-[20px]">
                {[
                  {
                    office: "Owerri office",
                    address:
                      "No 18, Road 1, Federal Housing Estate, Egbu, Owerri",
                  },
                  {
                    office: "London office",
                    address:
                      "40 Bank Street, Canary Wharf, London Email: london@mgihq.com.ng ",
                  },
                ].map((e, index) => {
                  return (
                    <div key={index}>
                      <h1 className="mb-[5px] underline">
                        <b>{e.office}</b>
                      </h1>
                      <h1>
                        <b>Address:</b>
                      </h1>
                      <p className="max-w-[400px]">{e.address}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full px-[20px]  text-white">
          {mwidth.isLaptop ? (
            <div className="flex gap-[10px] flex-wrap">
              {[
                { name: "Home" },
                { name: "About us" },
                { name: "contact" },
              ].map((e, index) => {
                return (
                  <a to="/" key={index} className=" my-[10px]">
                    {e.name}
                  </a>
                );
              })}
            </div>
          ) : (
            <></>
          )}
          <div className="ml-[auto]">
            <p>Get the freshest news from us</p>
            <div
              className={`flex gap-[10px] justify-center items-center ${
                mwidth.isTabletPlusDevice ? "flex-col" : "flex-row"
              }`}
            >
              <input
                id="phone"
                name="phone"
                placeholder="i.e your email address"
                className={`rounded-lg shadow-md ${
                  mwidth.isTabletPlusDevice
                    ? "w-[200px]  h-[30px]"
                    : " w-[300px]  h-[50px]"
                } pl-[5px] `}
              />
              <button
                type="submit"
                className={`bg-primary text-white ${
                  mwidth.isTabletPlusDevice
                    ? "h-[30px] w-[70px]"
                    : "h-[50px] w-[100px]"
                }   px-[5px] rounded-lg items-center`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr size="50" className="my-[50px]" />
      <div className="flex justify-between items-center my-[50px] text-[#92989F] flex-wrap">
        <div className="flex gap-[10px] justify-center items-center">
          <div>Terms and Conditions</div>
          <div className="h-[10px] w-[5px] bg-[#92989F]"></div>
          <div>Privacy Policy</div>
          <div className="h-[10px] w-[5px] bg-[#92989F]"></div>
          <div>Accessbility</div>
          <div className="h-[10px] w-[5px] bg-[#92989F]"></div>
          <div>Legal</div>
          <div className="h-[10px] w-[5px] bg-[#92989F]"></div>
        </div>
        <div>
          <p>© 2023 copyright, MC All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
