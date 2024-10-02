import React from "react";

const ContactInfo: React.FC = () => (
  <div className="flex flex-col gap-4 lg:flex-row">
    <div>
      <h2 className="text-blue-600 font-bold">Contact us:</h2>
      <span className="font-semibold text-xs">hello@homix.com</span>
    </div>
    <div>
      <h2 className="text-blue-600 font-bold">Phone:</h2>
      <span className="font-semibold text-xs">(120) 450 - 6589</span>
    </div>
    <div>
      <h2 className="text-blue-600 font-bold">Location:</h2>
      <span className="font-semibold text-xs">San Francisco</span>
    </div>
  </div>
);

export default ContactInfo;
