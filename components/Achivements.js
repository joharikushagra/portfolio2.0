import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Achievements = ({
  listTestimoni = [
    {
      name: "CodeChef - (4 Star, Max Rating: 1871)",
      testimoni: "Achieved Global Rank of 114 in December Long Challenge 2020",
    },
    {
      name: "Codeforces - (Max Rating: 1164)",
      testimoni: "Achieved my best rank 3889 in CodeForces Round 678 div 2",
    },
    {
      name: "Google HashCode 2021",
      testimoni: "Achieved AIR 602 by our team Code_It_Out",
    },
    {
      name: "Google KickStart",
      testimoni:
        "Achieved global Rank of 2388 in Round D of KickStart 2021",
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
        className="flex items-stretch justify-items-stretch">
      {listTestimoni.map((data, index) => {
        return (
          <div
            key={index}
            className="flex md:justify-evenly md:align-center md:flex-row flex-col text-left items-center transition-all"
          >
            <div className="p-5 w-1/2 md:w-full">
              <p> 
                <strong>{data.name}</strong>
              </p>
            </div>
            <div className="p-5 w-1/2 md:w-full">
              <p>{data.testimoni}</p>
            </div>
          </div>
        );
      })}
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

export default Achievements;
