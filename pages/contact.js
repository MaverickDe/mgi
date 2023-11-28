
// import HeroSection from "@/components/Home/HeroSection";
// import Overview from "@/components/Home/Overview";
// import Layout from "@/components/Layout/Layout";
import MainNavigation from "@/components/Layout/MainNavigation";
import Image from "next/image";
import img1 from "../public/images/images/img1.svg";
import img2 from "../public/images/images/img2.svg";
import img3 from "../public/images/images/img3.svg";
import line1 from "../public/images/images/line1.svg";
import line2 from "../public/images/images/line2.svg";
import halfspher from "../public/images/images/halfspher.svg";
import { useMediaQuery } from "react-responsive";
import { useMediawQuery } from "../helpers/utils";
import { poppins, intria, gelasio } from "@/fonts/general_fonts";
import Footer from "@/components/Layout/Footer";
export default function Contact() {
  return ( 
      <>
          <MainNavigation />
          <div>
              <div className="w-full flex flex-col gap-[10px] justify-center items-center my-[100px]" >
                  
              <h1 className={`${gelasio.className} text-[30px]`}><b>Contact us</b></h1>
              <h1 className="text-[#71717B] text-[27px]"><b>info@mgihq.com.ng</b></h1>
              </div>
              <form className="bg-[#F5F5F5] p-[50px] w-full">
                  <div >
                      <div className="flex flex-wrap justify-center items-center gap-[10px] my-[100px]">
                          
                  <div className="w-[100%] max-w-[700px] " >
                      <label for="name" className={`${poppins.className} ,text-[25px] text-[#262626] my-[10px]`}>Your Full Name </label>
                      <input id="name" name="fullName" placeholder="i.e esther" className="rounded-lg shadow-lg w-[100%]  h-[80px] pl-[5px] text-[20px]"/>
                  </div>
                  <div className="w-[100%] max-w-[700px] ">
                      <label className={`${poppins.className} ,text-[25px] text-[#262626] my-[10px]`}  for="company">Your Company Name </label>
                      <input id="company" name="companyName" placeholder="i.e dangote" className="rounded-lg shadow-md w-[100%]  h-[80px] pl-[5px] text-[20px]"/>
                  </div>
                      </div>
                      <div className="flex flex-wrap justify-center items-center gap-[10px] my-[100px]">
                          
                  <div className="w-[100%] max-w-[700px] ">
                      <label className={`${poppins.className} ,text-[25px] text-[#262626] my-[10px]`} for="email">Your Email </label>
                      <input id="email" name="email" placeholder="i.e esther193@gmail.com" className="rounded-lg shadow-md w-[100%]  h-[80px] pl-[5px] text-[20px]"/>
                  </div>
                  <div className="w-[100%] max-w-[700px] ">
                      <label className={`${poppins.className} ,text-[25px] text-[#262626] my-[10px]`} for="phone">Your Phone Number </label>
                      <input id="phone" name="phone" placeholder="i.e +2348148939023" className="rounded-lg shadow-md w-[100%]  h-[80px] pl-[5px] text-[20px]"/>
                  </div>
                      </div>
                  </div>


                  <div class="w-full my-[100px] flex justify-center items-center">
                      <div className="w-[100%] max-w-[1000px] ">
                          
                          <label className={`${poppins.className} ,text-[25px] text-[#262626] my-[10px]`} for="message">Your message </label>
                          <div className="w-[100%] ">
                              
                      <textarea  id="message" name="message" rows="10" cols="100" className="p-[10px] w-[100%] text-[20px]"  >Write your messagee.... </textarea>
                          </div>
                      </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                      
                  <button type="submit" className="bg-primary text-white h-[60px] w-[100%] max-w-[1000px] px-[5px] rounded-lg items-center">Submit</button>
                  </div>
                  
              </form>
          </div>
          <Footer/>
      </>
  );
}
