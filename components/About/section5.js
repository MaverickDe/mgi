import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";
// import img1 from "../../public/images/images/img1.svg";
// import img2 from "../../public/images/images/img2.svg";
// import img3 from "../../public/images/images/img3.svg";
// import line1 from "../../public/images/images/line1.svg";
// import line2 from "../../public/images/images/line2.svg";
// import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";

export const Section5 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className={` ${mwidth.isTabletDevice ? "px[-10px]" : " px-[100px] "}`}>
      <h1 className="text-center text-[30px]">
        <b>Our Services</b>
      </h1>
      <h1
        className={`${
          mwidth.isMobileDevice ? "text-[20px] mt-[50px]" : "text-[27px]"
        }`}
      >
        <b>
          Perfect I.T
          <span className="text-primary underline"> Solution</span> for
        </b>
      </h1>
      <h1
        className={`${mwidth.isMobileDevice ? "text-[20px]" : "text-[27px]"}`}
      >
        <b>
          Your<span className="text-primary underline"> business</span>
        </b>
      </h1>

      <div className="w-full flex  flex-col justify-center items-center mt-[100px] ">
        {[
          {
            head: "IT Consultation",
            list: [
              "Strategic IT Consulting: We work with your team to understand your business goals and formulate IT strategies that align with them.",
              "Infrastructure Optimization: We assess your current IT infrastructure and suggest improvements to enhance efficiency and productivity.",
              "Digital Transformation Roadmaps: We help you navigate the digital landscape by creating a step-by-step guide for your digital transformation journey.",
            ],
          },
          {
            head: "Planning and Strategy",
            list: [
              "Help Desk Support: We provide round-the-clock support to address any IT issues that may arise, ensuring minimal downtime.",
              "System Administration: We manage your IT systems, including servers, networks, and databases, to ensure smooth operation.",
              "Application Development: We develop custom applications tailored to your business needs, enhancing your digital capabilities.",
            ],
          },
          {
            head: "Design and Development",
            list: [
              "Threat Assessments: We identify potential threats to your digital assets and suggest measures to mitigate them.",
              "Implementation of Security Measures: We implement robust security measures, such as firewalls and encryption, to protect your digital assets.",
              "Security Audits: We conduct regular audits to ensure the ongoing security of your digital assets.",
            ],
          },
          {
            head: "Customer Product development",
            list: [
              "Bespoke Software Solutions: We develop custom software solutions tailored to your business needs, from CRM systems to automation tools.",
              "Specialized Application Development: We create specialized applications, such as mobile apps or web apps, to enhance your digital presence.",
            ],
          },
        ].map((e, index) => {
          return (
            <div
              className={`bg-white relative min-w-[320px] min-h-[350px]  w-[80%] h-[auto] rounded-md shadow-md flex flex-col justify-center items-center px-5 py-7 m-10 ${
                mwidth.isTabletDevice ? "text-[15px]" : ""
              }`}
            >
              <div className="flex justify-between w-full mb-10">
                <h2 className={`text-primary ${gelasio.className} text-[19px]`}>
                  <b>{e.head}</b>
                </h2>
                <div>0{index + 1}</div>
              </div>
              <ul className={`${poppins.className} flex flex-col gap-5`}>
                {e.list.map((ee, index) => {
                  return (
                    <li
                      className={`mb-5 flex gap-5 ${poppins.className}`}
                      key={index}
                    >
                      <div className="bg-primary rounded-[50%] h-[7px] w-[7px] "></div>
                      <p className="w-[80%]">{ee}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
