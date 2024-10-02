import React, { useRef } from "react";
import Banner from "./contents/banner-section";
import DiscoverSection from "./contents/discover-section";
import FaqSection from "./contents/faq-section";
import CtaSection from "./contents/cta-section";
import TestimonialSection from "./contents/testimonial-section";
import PropertyListing from "./contents/property-listing";
import PreconstructedPropertyListing from "./contents/pre-constructed-properties-section";
import CalculatorSection from "./contents/calculator-section/calculator-section";

const HomePage = () => {
  const propertyListingRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Banner />
      <PropertyListing propertyListingRef={propertyListingRef} />
      <DiscoverSection />
      <TestimonialSection />
      <PreconstructedPropertyListing />
      <FaqSection propertyListingRef={propertyListingRef} />
      <CtaSection propertyListingRef={propertyListingRef} />
      <CalculatorSection />
    </>
  );
};

export default HomePage;
