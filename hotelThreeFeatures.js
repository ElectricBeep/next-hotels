import { AiOutlineWifi } from "react-icons/ai";
import { MdSmokeFree, MdFamilyRestroom, MdRoomService, MdBreakfastDining, MdAirportShuttle } from "react-icons/md";
import { FaParking, FaUserTie } from "react-icons/fa";
import { BiDrink, BiRestaurant } from "react-icons/bi";

export const hotelThreeFeatures = [
  {
    id: 1,
    feature: "Parking",
    icon: <FaParking />
  },
  {
    id: 2,
    feature: "Wi-Fi",
    icon: <AiOutlineWifi />
  },
  {
    id: 3,
    feature: "Airport Shuttle",
    icon: <MdAirportShuttle />
  },
  {
    id: 4,
    feature: "Family rooms",
    icon: <MdFamilyRestroom />
  },
  {
    id: 5,
    feature: "Non-smoking rooms",
    icon: <MdSmokeFree />
  },
  {
    id: 6,
    feature: "Restaurant",
    icon: <BiRestaurant />
  },
  {
    id: 7,
    feature: "Reception",
    icon: <FaUserTie />
  },
  {
    id: 8,
    feature: "Room Service",
    icon: <MdRoomService />
  },
  {
    id: 9,
    feature: "Bar",
    icon: <BiDrink />
  },
  {
    id: 10,
    feature: "Breakfast",
    icon: <MdBreakfastDining />
  },
];