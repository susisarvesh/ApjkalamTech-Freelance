import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Outlet, Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "High-Quality CNC Router Machining",
    link: "/solutions/?productId=1"
  },
    {
    id: 2,
    title: "High-Precision Carbon Fiber Drone Parts",
    link: "/solutions/?productId=2"
  },
  {
    id: 3,
    title: "Grade Aluminum Aerospace Components",
    link: "/solutions/?productId=3"
  },
  {
    id: 4,
    title: "UHMWPE, HDPE and all kinds of plastic and composite materials Machining",
    link: "/solutions/?productId=4"
  },
  {
    id: 5,
    title: "Specialized Filter Plate Fabrication",
    link: "/solutions/?productId=5"
  },
   {
    id: 6,
    title: "Plastic Nylon Gears",
    link: "/solutions/?productId=6"
  }
  // Add other services as needed
];

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleLinkClick = () => {
    setToggleMenu(false);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="app">
      <nav>
        <div className="max-w-10xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 py-4">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between w-full gap-8">
              {/* logo */}
              <div>
                <Link
                  to="/"
                  className="flex gap-1 font-bold text-gray-700 items-center"
                >
                  <img
                    src="https://ik.imagekit.io/zhf0gkzac/apjkt_logo-removebg-preview.png?updatedAt=1718425692719"
                    alt="Apjkt logo"
                    className="w-[100px]"
                  />
                </Link>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 items-center">
                <Link to="/" className="">Home</Link>
                <Link to="/company">Company</Link>
                <Link to="/services">Products</Link>
                <Link to="/catalog">Catalog</Link>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Services{"  "}
                    <span className="inline-block ml-1 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={`h-4 w-5 transition-transform duration-300 transform ${
      showDropdown ? "rotate-180" : "rotate-0"
    }`}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
</span>

                  </button>
                  <div
                    className={`absolute z-50 w-[300px] bg-white shadow-lg rounded-lg mt-2 py-2 transition-opacity duration-300 ${
                      showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="py-1">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={service.link}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to="/contact">
                  <button className="bg-[#fc922e] text-white rounded-md px-4 py-2">
                    Contact Us
                  </button>
                </Link>
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
              <Link to="/" onClick={handleLinkClick} className="">
                Home
              </Link>
              <Link to="/company" onClick={handleLinkClick}>
                Company
              </Link>
              <Link to="/services" onClick={handleLinkClick}>
                Products
              </Link>
             <Link to="/solutions" onClick={handleLinkClick}>Services</Link>
             <Link to="/catalog" onClick={handleLinkClick}>Catalog</Link>

              <Link to="/contact" onClick={handleLinkClick}>
                <button className="bg-[#fc922e] text-white rounded-md p-2">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
