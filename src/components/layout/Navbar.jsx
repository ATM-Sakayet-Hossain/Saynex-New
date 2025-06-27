import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router";

const navItems = [
  { icon: <IoHomeOutline />, label: "Home" },
  { icon: <IoIosContact />, label: "Contact" },
  { icon: <GrGroup />, label: "Group" },
  { icon: <IoSettingsOutline />, label: "Setting" },
  { icon: <CgProfile />, label: "About" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="fixed top-1/2 left-0 w-[82px] h-[506px] z-50 bg-[#4DA674] rounded-r-[20px] transform -translate-y-1/2 py-[30px] px-0">
      {/* Top Left Curved */}
      <div className="absolute top-0 left-0 w-[25px] h-[25px] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[200%] h-[200%] rounded-full shadow-[inset_-17px_17px_0_0_#4DA674]" />
      </div>

      {/* Bottom Left Curved */
      <div className="absolute bottom-0 left-0 w-[25px] h-[25px] overflow-hidden transform rotate-90 translate-y-full">
        <div className="absolute bottom-0 left-0 w-[200%] h-[200%] rounded-full shadow-[inset_-17px_17px_0_0_#4DA674]" />
      </div>}
      
      <ul className="flex flex-col items-center w-full">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`w-[90px] h-[90px] flex items-center justify-center ${
              activeIndex === index ? "translate-x-[37px]" : ""
            } transition-all duration-500 list`}
            onClick={() => setActiveIndex(index)}
          >
            <Link
              className="flex flex-col items-center justify-center text-[#EAF8E7] font-medium relative w-full"
            >
              <span
                className={`icon text-[#C1E6BA] text-[1.5em] leading-[75px] transition-transform duration-500 ${
                  activeIndex === index ? "scale-[1.5] z-[52]" : ""
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`absolute transition-all duration-500 ${
                  activeIndex === index
                    ? "text-[0.9rem] opacity-100 translate-y-[30px]"
                    : "text-[0.1rem] opacity-0 translate-y-[12px]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}

        {/* Indicator */}
        <div
          className="absolute w-[90px] h-[90px] rounded-full border-[5px] border-[#494949] bg-[#023336] right-[-50%] transition-transform duration-500"
          style={{ transform: `translateY(${activeIndex * 90}px)` }}
        >
          <div className="absolute -top-[22px] left-[31%] w-[20px] h-[20px] rotate-90 rounded-tr-[20px] shadow-[0px_-10px_0_0_#494949]" />
          <div className="absolute -bottom-[22px] left-[31%] w-[20px] h-[20px] rotate-90 rounded-tl-[20px] shadow-[0px_-10px_0_0_#494949]" />
        </div>
      </ul>
    </section>
  );
};

export default Navbar;
