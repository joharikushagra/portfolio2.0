import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-8">
      {/* <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4"> */}
      {/* <div className="flex md:flex-row md:justify-evenly flex-col justify-center items-center">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="text-gray-400">©Portfolio2021</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex-row">
        <p className="text-black-600 mb-4 font-medium text-lg">
          <Link href="mailto:johari.kushagra13@gmail.com">Email</Link>
        </p>
        <img src="https://img.icons8.com/material-outlined/24/fa314a/email.png"/>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Kushagra Johari</p>
        </div>
      </div> */}
      <div className="flex md:flex-row md:justify-evenly flex-col justify-center items-center">
        {/* <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start "> */}
          <p className="text-gray-400">©Portfolio2021</p>
        {/* </div> */}
        {/* <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex-row"> */}
        <div className="flex md:flex-row justify-evenly items-center text-black-600 mb-4 font-medium text-lg">
          <Link href="mailto:johari.kushagra13@gmail.com">Email</Link>
          <img src="https://img.icons8.com/material-outlined/24/fa314a/email.png"/>
        
        </div>
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col"> */}
          <p className="text-black-600 mb-4 font-medium text-lg"> <span style={{color:'rgba(245, 56, 85, var(--tw-bg-opacity))'}}>K</span>ushagra <span style={{color:'rgba(245, 56, 85, var(--tw-bg-opacity))'}}>J</span>ohari</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
