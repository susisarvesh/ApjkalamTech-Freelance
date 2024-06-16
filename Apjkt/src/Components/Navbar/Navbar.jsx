import { useState, useEffect } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [toggleMenu]);

  return (
    <div className="app">
      <nav>
        <div className="max-w-10xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 py-4">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between w-full gap-8">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center"
                >
                  <img src="https://ik.imagekit.io/zhf0gkzac/apjkt_logo-removebg-preview.png?updatedAt=1718425692719" alt="Apjkt logo" className="w-[100px]" />
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 items-center">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Company</a>
                <a href="#">Services</a>
                <a href="#">Solutions</a>
                <button className="bg-[#fc922e] text-white rounded-md px-4 py-2">
                  Contact Us
                </button>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6 items-center">
              <div className="hidden xs:flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-8 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full pt-10"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-6 font-bold tracking-wider">
              <a href="#" className="">
                Home
              </a>
              <a href="#">Company</a>
              <a href="#">Services</a>
              <a href="#">Solutions</a>
              <button className="bg-[#fc922e] text-white rounded-md p-2">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
