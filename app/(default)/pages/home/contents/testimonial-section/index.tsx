import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { testimonials } from "./data";
import SectionTitle from "@/components/section-title";
import { truncateText } from "./utils";
import {
  NextArrow,
  PrevArrow,
} from "../pre-constructed-properties-section/components";
import StarRating from "./components";

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-primary dark:bg-gray-700 relative">
      <div className="max-w-[1320px] mx-auto py-8 ">
        <div>
          <SectionTitle
            title=" What our clients say"
            titleClass="text-3xl sm:text-4xl md:text-5xl mx-5 my-10 font-bold text-left text-white"
          />
        </div>
        <Slider {...settings} className="overflow-visible relative ">
          {testimonials.map((card, index) => (
            <div key={index} className="px-2 ">
              <div className="bg-white rounded-lg shadow-md gap-10 p-5 h-[300px]">
                <div className="flex text-left mb-4">
                  <StarRating rating={card.rating} />
                </div>
                <h2 className="text-[16px] sm:text-[18px] text-left mb-2 sm:h-[148px] h-[130px]">
                  {truncateText(card.text, 140)}
                </h2>
                <div className="flex my-5">
                  <div className="">
                    <Image
                      src={card.image}
                      alt="img"
                      className="rounded-full"
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className="mx-5">
                    <p className="text-left text-[16px] sm:text-[18px] font-semibold">
                      {card.author}
                    </p>
                    <p className="text-left text-[14px] sm:text-[15px] text-gray-400 font-semibold">
                      {card.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
