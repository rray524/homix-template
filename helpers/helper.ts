export const formatPrice = (value: string | number): string => {
  if (value === undefined || value === null || value === "") {
    return "0.00";
  }
  if (typeof value === "number") {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  const numberValue = parseFloat(value.replace(/,/g, ""));
  if (isNaN(numberValue)) {
    return "0.00";
  }
  return numberValue.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
