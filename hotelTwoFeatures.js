import { AiOutlineWifi } from "react-icons/ai";
import { MdSmokeFree, MdFamilyRestroom, MdRoomService, MdBreakfastDining, MdElevator, MdAirportShuttle } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

export const hotelTwoFeatures = [
  {
    id: 1,
    feature: "Wi-Fi",
    icon: <AiOutlineWifi />
  },
  {
    id: 2,
    feature: "Heating",
    icon: <GiTheater />
  },
  {
    id: 3,
    feature: "Bar",
    icon: <BiDrink />
  },

  {
    id: 4,
    feature: "Elevator",
    icon: <MdElevator />
  },
  {
    id: 5,
    feature: "Reception",
    icon: <FaUserTie />
  },
  {
    id: 6,
    feature: "Breakfast",
    icon: <MdBreakfastDining />
  },
  {
    id: 7,
    feature: "Room Service",
    icon: <MdRoomService />
  },
  {
    id: 8,
    feature: "Family rooms",
    icon: <MdFamilyRestroom />
  },
  {
    id: 9,
    feature: "Airport Shuttle",
    icon: <MdAirportShuttle />
  },
  {
    id: 10,
    feature: "Non-smoking rooms",
    icon: <MdSmokeFree />
  },
];