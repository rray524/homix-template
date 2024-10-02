import React, { Suspense, use } from "react";
import { fetchSingleProperty } from "./action";
import LoadingFallback from "./components/loading-fallback";
import PropertyInfo from "./components/property-info";
import PropertyHeader from "./components/property-header";
import ImageGallery from "./components/image-gallery";
import PropertyDescription from "./components/property-description";
import Features from "./components/property-feature";
import { PropertyMap } from "./components/property-map";
import PropertyNotFoundFallback from "./components/property-error-handler";
import { PropertyDetailsTable } from "./components/property-details-table";

interface PageProps {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: PageProps) {
  const property = await fetchSingleProperty(params.id);

  return {
    title: property?.exterior.property_type || "Property Details",
    description:
      property?.property_description || "Detailed view of the property",
  };
}
const PropertyDetails = ({ params }: PageProps) => {
  const property = use(fetchSingleProperty(params.id));
  const apiKey = process.env.NEXT_PUBLIC_SITE_KEY!;
  if (!property) {
    return <PropertyNotFoundFallback />;
  }

  return (
    <div className="my-10 w-[90%] lg:w-[70%] mx-auto">
      <PropertyHeader
        address={property.general_details.address}
        title={property.exterior.property_type}
        price={property.general_details.price}
        category={property.category}
        status={property.available_for}
      />
      <PropertyInfo
        beds={property.at_a_glance.beds}
        baths={property.at_a_glance.baths}
        sqft={property.square_feet}
      />
      <ImageGallery images={property.image_urls} />
      <PropertyDescription description={property.property_description} />
      <Features features={property.at_a_glance} />
      <PropertyDetailsTable property={property} />
      <PropertyMap property={property} apiKey={apiKey} />
    </div>
  );
};

const PropertyDetailsPage = (props: PageProps) => (
  <Suspense fallback={<LoadingFallback />}>
    <PropertyDetails {...props} />
  </Suspense>
);

export default PropertyDetailsPage;
