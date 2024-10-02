import { FaUsers, FaHeart, FaSmile, FaChartLine, FaFlag } from "react-icons/fa";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <FaUsers />,
    title: "Driven by ambition",
    description:
      "We’re all driven by the same goal to change the way the world hires in whatever part we play.",
  },
  {
    icon: <FaHeart />,
    title: "A big heart",
    description:
      "Our people, clients and employees alike, are the heart and core of who we are.",
  },
  {
    icon: <FaSmile />,
    title: "Positively charged",
    description:
      "Whatever we do, we do with a positive attitude and lots of energy.",
  },
  {
    icon: <FaChartLine />,
    title: "Driven by ambition",
    description:
      "We work hard to achieve our clients’ objectives as well as our own individual goals.",
  },
  {
    icon: <FaFlag />,
    title: "Driven by ambition",
    description:
      "We’re here for each other through the challenges and make sure to celebrate the good times too.",
  },
  {
    icon: <FaChartLine />,
    title: "Driven by ambition",
    description:
      "We’re known for being a fun, light-hearted bunch and that shows through all our work.",
  },
];
