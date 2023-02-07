import { AiOutlineWifi } from "react-icons/ai";
import { MdSmokeFree, MdFamilyRestroom, MdElevator, MdBreakfastDining } from "react-icons/md";
import { FaParking, FaUserTie } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";

export const hotelOneFeatures = [
  {
    id: 1,
    feature: "Wi-Fi",
    icon: <AiOutlineWifi />
  },
  {
    id: 2,
    feature: "Parking",
    icon: <FaParking />
  },
  {
    id: 3,
    feature: "Heating",
    icon: <GiTheater />
  },
  {
    id: 4,
    feature: "Breakfast",
    icon: <MdBreakfastDining />
  },
  {
    id: 5,
    feature: "Elevator",
    icon: <MdElevator />
  },
  {
    id: 6,
    feature: "Reception",
    icon: <FaUserTie />
  },
  {
    id: 7,
    feature: "Family rooms",
    icon: <MdFamilyRestroom />
  },
  {
    id: 8,
    feature: "Non-smoking rooms",
    icon: <MdSmokeFree />
  },
];