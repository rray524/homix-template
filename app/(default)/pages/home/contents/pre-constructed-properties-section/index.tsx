"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { NextArrow, PrevArrow } from "./components";
import { PropertyDetails } from "../property-listing/types";
import PreloadingProperty from "../property-listing/component";
import Link from "next/link";
import { fetchProperties } from "../../action";

const PreconstructedPropertyListing = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  const settings = {
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
    slidesToScroll: 3,
    slidesToShow: 3,
    accessibility: true,
    variableWidth: false,
    focusOnSelect: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties("pre-constructed");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto py-10 relative">
      <SectionTitle title="Our residential complexes" titleClass="mx-5 my-5" />
      {loadingData ? (
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 my-10">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className={`w-full lg:w-1/3 md:w-1/2 px-4 mb-8`} key={index}>
                <div key={index} className="border border-gray-200 p-4">
                  <PreloadingProperty />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : properties.length !== 0 ? (
        <Slider {...settings} className="overflow-visible relative">
          {properties.map((property) => (
            <div key={property._id} className="p-4 !w-[100%]">
              <Link href={`/properties/${property._id}`}>
                <div className="bg-white rounded-lg shadow-custom p-4 overflow-hidden">
                  <Image
                    src={
                      property.image_urls.length > 0
                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${property.image_urls[0]}`
                        : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                    }
                    alt={property.name}
                    className="h-[250px] w-full rounded-lg object-cover"
                    width={700}
                    height={700}
                  />
                  <h2 className="text-xl text-left my-5 font-bold mb-2">
                    {property.name}
                  </h2>
                  <p className="text-left text-[18px] font-semibold">
                    {property.exterior.property_type}
                  </p>
                  <p className="text-left text-[15px] text-gray-400 font-semibold">
                    {property.general_details.address}
                  </p>
                  <hr className="w-full my-5" />
                  <div className="flex flex-wrap justify-between my-5">
                    <span className="inline-block py-1 text-[8px] md:text-[12px] lg:text-[14px] text-gray-500 mb-2 text-left">
                      <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
                        {property.at_a_glance.beds} Beds
                      </span>
                    </span>
                    <span className="inline-block py-1 text-[8px] md:text-[16px] lg:text-[14px] text-gray-500 mb-2 text-left">
                      <span className="bg-secondary text-primary font-semibold p-3 rounded-3xl">
                        {property.at_a_glance.baths} Baths
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <div className=" max-h-14 w-full mx-auto">
          <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold">
            No property listed yet!
          </h4>
        </div>
      )}
    </div>
  );
};

export default PreconstructedPropertyListing;
