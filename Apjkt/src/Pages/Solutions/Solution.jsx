import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import FooterAll from "../../Components/Footer/FooterAll";

// Dummy data with image URLs
const side = [
  { id: 1, product: "High-Quality CNC Router Machining" },
  { id: 2, product: "High-Precision Carbon Fiber Drone Parts" },
  { id: 3, product: "Grade Aluminum Aerospace Components" },
  { id: 4, product: "Custom UHMWPE Fabrication" },
  { id: 5, product: "UHMWPE, HDPE and all kinds of plastic and composite materials Machining" },
  { id: 6, product: "Specialized Filter Plate Machining" },
];

const data = [
  {
    id: 1,
    product: "High-Quality CNC Router Machining",
    content:
      "The Flexicam S2 CNC router is a testament to reliability and versatility in woodworking and industrial environments. Equipped with a robust tool changer and powered by AC servo motors, it features a 7.5 hp spindle (upgradeable to 11 hp) that delivers precise performance suitable for high-speed sign making. This machine integrates a 3D computerized routing system and offers a choice between durable aluminum T-slot profiles or 25 mm thick phenolic work surfaces, catering to a variety of materials including aluminum composite and acrylic. With a Z-axis travel of 9 inches and a rapid cutting speed of up to 1000 ipm, the Flexicam S2 ensures exceptional accuracy with repeatability of +/- 0.002 inches. Available in models from 50 x 100 to 80 x 161, it is backed by a reliable 12-month warranty.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-001%20-%20Copy.png?updatedAt=1718704923249",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-014.png?updatedAt=1718704925683",
    ],
  },
  {
    id: 2,
    product: "High-Precision Carbon Fiber Drone Parts",
    content:
      "Precision carbon fiber cutting for drone parts ensures high-quality results for any dimension. Utilizing advanced CNC machinery and state-of-the-art technology, this process delivers exceptional accuracy and durability in every piece. Expertise in handling carbon fiber allows for the production of components that meet the stringent requirements of the aerospace and drone industries. Whether custom parts for drone frames, arms, propeller guards, landing gears, or camera mounts are needed, carbon fiber cutting services provide the perfect solution for achieving lightweight, strong, and reliable drone parts. Enhance the performance and longevity of drones with expertly crafted carbon fiber components.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-039.png?updatedAt=1718704932756",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-038.png?updatedAt=1718704932163",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-032.png?updatedAt=1718704931322",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-017-removebg-preview.png?updatedAt=1718706882117",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-015-removebg-preview.png?updatedAt=1718706882806",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-016-removebg-preview.png?updatedAt=1718706881688",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image%20drone%201.png?updatedAt=1718705983279",
    ],
  },
  {
    id: 3,
    product: "Grade Aluminum Aerospace Components",
    content:
      "Specializing in aerospace-grade aluminum components, our services ensure the highest standards of precision and durability. Utilizing advanced CNC machining, we deliver superior aluminum parts tailored to the demanding specifications of the aerospace industry. Our expertise includes fabricating lightweight, strong, and corrosion-resistant components such as brackets, housings, panels, and structural elements. By focusing on quality and performance, we provide aluminum parts that enhance the efficiency and reliability of aerospace applications. For top-tier aerospace aluminum fabrication, trust our unmatched craftsmanship and dedication to excellence.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-010_-_Copy-removebg-preview.png?updatedAt=1718705983441",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-005_-_Copy-removebg-preview.png?updatedAt=1718705983317",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-009_-_Copy-removebg-preview.png?updatedAt=1718706105865",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-006_-_Copy-removebg-preview.png?updatedAt=1718705983210",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-011_-_Copy-removebg-preview.png?updatedAt=1718705968897",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/634d0acab453415dd314afe4-deluxe-linear-rail-sphinx-9-034-removebg-preview.png?updatedAt=1718708311994",
    ],
  },
  {
    id: 4,
    product: "UHMWPE, HDPE and all kinds of plastic and composite materials Machining",
    content:
      "Custom UHMWPE fabrication offers unparalleled durability and versatility for a wide range of applications. Specializing in UHMWPE brackets, UHMWPE turret and backguide components, UHMWPE T-slots, and UHMWPE machined parts, our services deliver high-performance solutions tailored to specific needs. Utilizing precision machining, we ensure each component meets rigorous quality standards, providing excellent wear resistance and longevity. Ideal for industrial, mechanical, and engineering applications, our custom UHMWPE parts are designed to enhance operational efficiency and reliability.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-018-removebg-preview.png?updatedAt=1718707476630",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-041.png?updatedAt=1718704935078",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-037.png?updatedAt=1718704931784",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-035.png?updatedAt=1718704931749",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-028.png?updatedAt=1718704929366",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-029.png?updatedAt=1718704929401",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-024.png?updatedAt=1718704928225",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-025.png?updatedAt=1718704928588",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-034.png?updatedAt=1718704931214",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-033.png?updatedAt=1718704931333"



    ],
  },
  {
    id: 5,
    product: "Specialized Filter Plate Machining",
    content:
      "Specialized filter plate fabrication caters to diverse industries with high-quality, custom solutions. Our expertise includes manufacturing filter plates for the paper industry, oil filter plates, and precision-machined filter plates. Each filter plate is crafted to meet specific requirements, ensuring optimal performance and durability. Utilizing advanced machining techniques, our filter plates provide superior filtration efficiency, enhancing the reliability and productivity of industrial processes. Whether for the paper industry or oil filtration, our specialized filter plates are designed to deliver exceptional results.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-019.png?updatedAt=1718704926326",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-020.png?updatedAt=1718704925915",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-021.png?updatedAt=1718704927864",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-023.png?updatedAt=1718704928068",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-022.png?updatedAt=1718704928215",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-026.png?updatedAt=1718704928812",

    ],
  },
  {
    id: 6,
    product: "Plastic Nylon Gears",
    content:
      "Manufacturing high-quality plastic nylon gears, we ensure superior durability and performance for various industrial applications. Crafted from premium nylon, our gears provide excellent wear resistance, low friction, and noise reduction, making them ideal for machinery, automotive components, and consumer electronics. Our advanced manufacturing processes guarantee precision and strength, ensuring long-lasting reliability and efficiency. Enhance your machinery's performance with our expertly engineered plastic nylon gears.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-036.png?updatedAt=1718704931447",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/image-030.png?updatedAt=1718704929408",
      
    ],
  },
];

function Solution() {
  const refs = useRef(data.map(() => React.createRef()));
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productId = parseInt(searchParams.get("productId"), 12);

    if (productId) {
      handleScroll(productId - 1);
    }
  }, [location.search]);

  const handleScroll = (index) => {
    refs.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
    <div className="2xl:container mx-auto grid grid-cols-1 mt-[10px] lg:grid-cols-[1fr_3fr] gap-4">
      <div className="sidebar hidden lg:block sticky top-10 max-h-[300px] overflow-y-auto  p-5 shadow-custom rounded-lg border-4 border-l-[#fc922e] ">
        {side.map((e, index) => (
          <div
            key={e.id}
            className="text-[14px] p-2 cursor-pointer"
            onClick={() => handleScroll(index)}
          >
            {e.product}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 ">
        {data.map((e, index) => (
          <div
            key={e.id}
            ref={refs.current[index]}
            className="m-[20px] p-[20px] h-auto grid grid-cols-1 gap-6 lg:grid-cols-2 shadow-sm"
          >
            <div>
              <h1 className="text-[24px] font-bold mb-[5px] text-center lg:text-start">{e.product}</h1>
              <p className="p-1">{e.content}</p>
            </div>
            <Carousel images={e.images} />
          </div>
        ))}
      </div>
     
      </div>
      <FooterAll></FooterAll>
      </div>
  );
}

export default Solution;
