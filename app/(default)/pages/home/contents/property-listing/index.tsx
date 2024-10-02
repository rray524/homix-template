"use client";
import React, { useState, useEffect } from "react";
import SectionTitle from "@/components/section-title";
import { PropertyDetails } from "./types";
import PreloadingProperty from "./component";
import PropertyCard from "./components/property-card";
import { Pagination } from "@/components/pagination";
import { fetchProperties } from "../../action";
import { handleScroll } from "@/helpers/helper";

const categories = ["All", "pre-constructed", "sold", "new"];

function PropertyListing({
  propertyListingRef,
}: {
  propertyListingRef: React.RefObject<HTMLDivElement>;
}) {
  const [properties, setProperties] = useState<PropertyDetails[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 6;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      try {
        const res = await fetchProperties(selectedCategory);
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
    handleScroll(propertyListingRef);
  };

  const currentItems = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div
        className="max-w-[1420px] mx-auto flex items-center justify-center my-10 "
        ref={propertyListingRef}
        id="property_listing"
      >
        <div className="text-center container mx-auto my-5">
          <SectionTitle
            title="Find the category for you"
            description=""
            titleClass="text-center"
            descriptionClass="text-center"
          />

          <div className="flex flex-wrap justify-center gap-2 items-center mx-auto rounded-md overflow-hidden shadow-insetcustom p-3 w-full max-w-[850px] my-10 bg-white shadow-custom ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-4 w-full sm:w-[200px] rounded-lg font-semibold ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loadingData ? (
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4 my-10">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    className={`w-full lg:w-1/3 md:w-1/2 px-4 mb-8`}
                    key={index}
                  >
                    <div key={index} className="border border-gray-200 p-4">
                      <PreloadingProperty />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : currentItems.length !== 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((card, index) => (
                <PropertyCard key={index} card={card} />
              ))}
            </div>
          ) : (
            <div className=" max-h-14 w-full mx-auto">
              <h4 className="text-gray-600 dark:text-gray-100 text-center font-bold">
                No property listed yet!
              </h4>
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default PropertyListing;
