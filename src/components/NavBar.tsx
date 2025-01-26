import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div
      className={
        "absolute w-full flex justify-between p-4 items-center text-white"
      }
    >
      <h1 className={"text-2xl z-20"}>Experiences</h1>
      <HiMenuAlt3
        size={25}
        className={"z-20  cursor-pointer"}
        onClick={() => setNav(!nav)}
      />
      <NavLinks nav={nav} />
    </div>
  );
};

const NavLinks = ({nav} : {nav : boolean}) => {
  return (
    <div
      className={
        `${nav ? 'left-0 opacity-100' : '-left-full opacity-0'} duration-500 ease-in text-gray-300 fixed top-0 h-screen w-full bg-black/90 px-4 py-7 flex-col z-10`
      }
    >
      <ul
        className={
          "w-full h-full text-center content-center font-bold text-3xl *:p-8"
        }
      >
        <li>Home</li>
        <li>Destinations</li>
        <li>Reservations</li>
        <li>Amenities</li>
        <li>Rooms</li>
      </ul>
    </div>
  );
};

export default NavBar;
