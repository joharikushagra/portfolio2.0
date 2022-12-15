import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import Link from "next/link";

const WorkExperience = ({
  listTestimoni = [
    {
      name: "Dukaan",
      image: "/assets/dukaan.jfif",
      testimoni: "Software Development Intern",
      timeline: "April 2022 - June 2022",
    },
    {
      name: "Conwo Solutions",
      image: "/assets/conwo.jfif",
      testimoni: "Software Development Intern",
      timeline: "Jan 2022 - April 2022",
    },
    {
      name: "The Solar Labs",
      image: "/assets/tsl.jfif",
      testimoni: "Software Development Intern",
      timeline: "July 2021 - Oct 2021",
    },
    {
      name: "FirstAd Pvt. Ltd.",
      image: "/assets/firstad.jfif",
      testimoni: "Web Developer Intern (JS,React.Js)",
      timeline: "Dec 2020 - April 2021",
    },
    {
      name: "GirlScript Summer of Code",
      image: "/assets/gssoc.jfif",
      testimoni: "Open Source Contributor",
      timeline: "Aug 2020 - Nov 2020",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <Image
                src={listTestimonis.image}
                height={300}
                width={150}
                alt="Icon People"
              />
              <p className="text-lg text-black-600 mt-10 capitalize">
                {listTestimonis.name}
              </p>
              <p className="mt-5 text-center">{listTestimonis.testimoni}</p>
              <p style={{ color: "rgba(245, 56, 85, var(--tw-bg-opacity)" }}>
                {listTestimonis.timeline}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
