import React from "react";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import Achievements from "./Achivements";
import Link from "next/link";
import IconClass from "./style.module.css";

const Pricing = () => {
  return (
    // <>
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="testimoni"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* <div className="flex flex-col w-full my-16" id="testimoni"> */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Projects
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            Below are some of my works..
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
        {/* </div> */}

        <div className="flex flex-col w-full my-16" id="achievements">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Achievements
          </h3>
          <div className="w-full flex flex-col justify-start py-12">
            <Achievements />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500 shadow-lg">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0 md:flex-row flex-col md:justify-evenly justify-evenly text-center">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium ">
                  Let's get Connect
                </h5>
                {/* <p>Let's subscribe with us and find the fun.</p> */}
              </div>
              <Link
                href="https://www.linkedin.com/in/kushagra-johari/"
                rel="nofollow"
                target="_blank"
              >
                <img
                  className={IconClass.icons}
                  align="center"
                  alt="Kushagra_Johari"
                  height={30}
                  width={40}
                  // src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                  src="https://img.icons8.com/ios-filled/150/fa314a/linkedin.png"
                />
              </Link>
              <Link
                href="https://www.codechef.com/users/alcatraz2001"
                rel="nofollow"
              >
                <img
                  className={IconClass.icons}
                  align="center"
                  alt="Kushagra_Johari"
                  height="30"
                  width="40"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codechef.svg"
                />
              </Link>
              <Link
                href="https://www.instagram.com/kushagra_johari/"
                rel="nofollow"
              >
                <img
                  className={IconClass.icons}
                  align="center"
                  alt="Kushagra_Johari"
                  height="30"
                  width="40"
                  // src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                  src="https://img.icons8.com/ios-glyphs/120/fa314a/instagram-circle.png"
                />
              </Link>
              <Link
                href="https://codeforces.com/profile/alcatraz2001"
                rel="nofollow"
              >
                <img
                  className={IconClass.icons}
                  align="center"
                  alt="Kushagra_Johari"
                  height="30"
                  width="40"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codeforces.svg"
                />
              </Link>
            </div>
            {/* <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
    // {/* </> */}
  );
};

export default Pricing;
