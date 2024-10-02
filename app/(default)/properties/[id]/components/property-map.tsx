import { PropertyDetails } from "@/app/(default)/pages/home/contents/property-listing/types";
import SectionTitle from "@/components/section-title";

export const PropertyMap = ({
  property,
  apiKey,
  zoom = 14,
}: {
  property: PropertyDetails;
  apiKey: string;
  zoom?: number;
}) => (
  <div className="text-left">
    <SectionTitle title="Location" titleClass="text-2xl font-bold mb-4" />
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${property.latitude},${property.longitude}&zoom=${zoom}`}
      width="100%"
      height="550"
      className="rounded-lg"
      allowFullScreen
    ></iframe>
  </div>
);
