import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../../helpers/utils";
import Image from "next/image";
// import { poppins , intria,gelasio } from "@/fonts/general_fonts";
import img1 from "../../public/images/images/img1.svg";
import img2 from "../../public/images/images/img2.svg";
import img3 from "../../public/images/images/img3.svg";
import line1 from "../../public/images/images/line1.svg";
import line2 from "../../public/images/images/line2.svg";
import halfspher from "../../public/images/images/halfspher.svg";
import { poppins, intria, gelasio } from "../../fonts/general_fonts";
export const Section4 = () => {
  let mwidth = useMediawQuery(useMediaQuery);
  return (
    <div className="w-full flex flex-wrap justify-center items-center mt-[100px] ">
      {[
        {
          head: "Discovery and Analysis",
          list: [
            "Client Consultation: We begin by thoroughly understanding our client's needs and objectives through comprehensive consultations.",
            "Market Research: Conducting in-depth market research to identify trends, challenges, and opportunities.",
          ],
        },
        {
          head: "Planning and Strategy",
          list: [
            "Project Scope Definition: Clearly defining the scope of the project, including goals, deliverables, and timelines.",
            "Strategic Planning: Developing a tailored strategy that aligns with the client's vision and business objectives.",
          ],
        },
        {
          head: "Design and Development",
          list: [
            "Prototyping: Creating prototypes and mock-ups to visualize the user experience and design elements.",
            "Agile Development: Employing agile methodologies for flexible and efficient development.",
          ],
        },
        {
          head: "Testing and Quality Assurance",
          list: [
            "Comprehensive Testing: Rigorous testing of all functionalities, ensuring a seamless user experience.",
            "User Feedback Integration: Implementing necessary fixes based on user feedback for continuous improvement.",
          ],
        },
      ].map((e, index, list) => {
        return (
          <div
            className={`${
              mwidth.isTabletDevice
                ? `w-[50%]  text-[13px] ${
                    (index + 1) % 2 == 0 ? "ml-auto" : "mr-auto"
                  }`
                : "min-w-[320px] w-[400px] justify-center"
            } min-h-[270px]  h-[350px] rounded-md shadow-md flex flex-col  items-center  m-10 ${
              mwidth.isMobileDevicePlus ? "text-[10px]" : ""
            }`}
          >
            <div
              className={`relative w-full h-full rounded-md  flex flex-col  justify-center items-center px-5 py-7 `}
            >
              {mwidth.isTabletDevice && index != list.length - 1 ? (
                <>
                  <Image
                    src={(index + 1) % 2 == 0 ? line1 : line2}
                    className={`w-30 p-0 m-0 absolute top-[80%] ${
                      (index + 1) % 2 == 0 ? "right-[100%]" : "left-[100%]"
                    }`}
                    priority
                    loading="eager"
                  />
                </>
              ) : (
                <></>
              )}
              <div
                className={`absolute top-[-20px] left-[-20px] bg-primary ${
                  mwidth.isTabletDevice
                    ? "w-[35px] h-[35px]"
                    : "w-[50px] h-[50px]"
                }  rounded-[50%] flex justify-center items-center text-white`}
              >
                <b>{index + 1}</b>
              </div>
              <h2 className={`text-[22px] ${gelasio.className} `}>
                <b>{e.head}</b>
              </h2>
              <ul>
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
          </div>
        );
      })}
    </div>
  );
};
