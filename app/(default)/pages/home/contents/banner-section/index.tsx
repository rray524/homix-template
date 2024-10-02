"use client";
import React, { useState } from "react";
import BannerTitle from "./component/banner-title";
import Button from "@/components/button/common-button";
import { FiX } from "react-icons/fi";
import { fetchProperties } from "../../action";
import PropertyCard from "../property-listing/components/property-card";
import { PropertyDetails } from "../property-listing/types";
import { Pagination } from "@/components/pagination";
import PropertyLoaderFallback from "@/components/property-loader";

function Banner() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<PropertyDetails[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 3;

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    setIsSearching(true);
    setHasSearched(true);
    try {
      const data = await fetchProperties();
      const filteredResults = data.data.filter(
        (property: PropertyDetails) =>
          property.general_details.address
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.exterior.property_type
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          property.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setHasSearched(false);
  };

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  const currentResults = searchResults.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative max-w-[1820px] mx-auto bg-banner bg-full h-[700px] bg-no-repeat flex items-center justify-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-transparent z-10"></div>

      {searchResults.length > 0 && (
        <div className="fixed inset-0 bg-black opacity-60 z-10"></div>
      )}
      <div className="relative text-center container mx-auto my-auto px-4 z-20">
        <BannerTitle
          title="The best place to find"
          subtitle="Your dream house"
          description="Find the best place to start your dream house right now"
        />

        <div className="flex items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden my-10 px-2 py-2 max-w-4xl mx-auto relative">
          <input
            type="text"
            className="px-8 py-4 w-full focus:outline-none text-gray-600"
            placeholder="Search for city, property type, category, address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <FiX
              className="absolute left-2 cursor-pointer text-gray-600"
              size={24}
              onClick={handleClearSearch}
            />
          )}
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {isSearching ? (
          <div className=" flex items-center justify-center">
            <PropertyLoaderFallback />
          </div>
        ) : hasSearched && searchResults.length === 0 ? (
          <div className="mt-10 flex items-center justify-center text-gray-600 max-w-4xl mx-auto bg-white py-5">
            No results found
          </div>
        ) : (
          searchResults.length > 0 && (
            <div
              className={`mt-10 flex flex-col xl:flex-row gap-6 items-center justify-center mx-auto z-20 ${
                currentResults.length === 1 ? "w-full lg:w-[33%]" : "w-full"
              }`}
            >
              {currentResults.map((property) => (
                <PropertyCard key={property._id} card={property} />
              ))}
            </div>
          )
        )}
        {!isSearching && searchResults.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center mt-4 z-20">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
