import { FaTruck } from "react-icons/fa";
import { MdTrackChanges ,MdNotificationsActive } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaLocationDot ,FaPhoneVolume } from "react-icons/fa6";
import { LuClock1 } from "react-icons/lu";


export const trackingFeatures = [
  {
    icon: <FaTruck />,
    title: "Real-Time Tracking",
    description:
      "Track your shipment instantly with our advanced GPS technology and get up-to-the-minute location updates.",
  },
  {
    icon: <MdTrackChanges />,
    title: "Comprehensive Tracking",
    description:
      "Monitor your package's complete journey from pickup to delivery with detailed status information and milestones.",
  },
  {
    icon: <MdNotificationsActive />,
    title: "Instant Notifications",
    description:
      "Receive immediate alerts about your shipment's status, including estimated delivery times and any potential delays.",
  },
];

export const location = [
  {
    icon: <FaPhoneVolume />,
    title: "Call Us Anytime",
    description: "+250 784 635 871",
  },
  {
    icon: <LuClock1 />,
    title: "Sunday CLOSED",
    description: "Mon - Sat 8.00 - 18.00",
  },
  {
    icon: <FaLocationDot />,
    title: "Rwanda, Kigali city",
    description: "Rwanda, KIgali City - 10620",
  },
];

export const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "blog",
    path: "/blog",
  },

];
