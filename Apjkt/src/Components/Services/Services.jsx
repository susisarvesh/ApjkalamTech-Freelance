import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "High-Quality CNC Machining",
    description:
      "Leveraging the advanced FlexiCAM Ultimate 5-Axis CNC machining center, we deliver ultra-precise, high-strength aluminum components for the aerospace industry. Our state-of-the-art technology ensures exceptional quality and consistency in every product.",
  },
  {
    id: 2,
    title: "High-Precision Carbon Fiber Drone Parts",
    description:
      "We specialize in precision cutting of carbon fiber for drone parts, ensuring top-quality, high-performance components. Our advanced technology guarantees exceptional accuracy and consistency for all your drone manufacturing needs.",
  },
  {
    id: 3,
    title: "Aerospace-Grade Aluminum Components",
    description:
      "We manufacture aerospace-grade aluminum components with exceptional precision using advanced CNC router machines. Our cutting-edge technology ensures high-quality, reliable parts that meet the stringent standards of the aerospace industry.",
  },
  {
    id: 4,
    title: "Custom UHMWPE Fabrication",
    description:
      "Crafted with precision, our UHMWPE machined parts redefine excellence, delivering cutting-edge performance and durability.",
  },
  {
    id: 5,
    title: "Specialized Filter Plate Fabrication",
    description:
      "Experience precision in every pore with our specialized fabrication of paper and oil filter plates. Engineered for optimal filtration efficiency, our plates deliver reliability and performance, ensuring your processes run seamlessly.",
    },
    {
    id: 6,
    title: "Plastic Nylon Gears",
    description:
      "Discover excellence in Plastic Nylon Gears manufacturing with our commitment to precision engineering. Our gears are crafted with utmost attention to detail, ensuring reliability and longevity across diverse industrial applications.",
  },
];

function Services() {
  return (
    <>
      <div className="2xl:container mx-auto flex flex-col gap-6 sm:gap-6 md:gap-10 lg:gap-10 mb-[100px]">
        <div className="w-[95%] sm:w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
          <h1 className="text-[#373636] text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold flex justify-center items-center">
            Services We Provide
          </h1>
        </div>
        <div className="w-[90%] md:[80%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50"
              >
                <p className="text-2xl font-bold flex justify-center item-center text-center">
                  {service.title}
                </p>
                <p>{service.description}</p>
                <div>
                  <Link
                    to={{
                      pathname: "/solutions",
                      search: `?productId=${service.id}`,
                    }}
                  >
                    <button className="bg-[#fc922e] text-white rounded-lg p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
