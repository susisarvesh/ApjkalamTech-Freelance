import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import FooterAll from "../../Components/Footer/FooterAll";
import Preloader from "../Preloader";

const side = [
  { id: 1, product: "Ultra high Molecular Weight Polyethylene Sheets" },
  { id: 2, product: "PolyPropylene Sheets" },
  { id: 3, product: "High Density Polyethylene Sheets" },
  { id: 4, product: "Bakelite Sheets" },
  { id: 5, product: "Delrin Sheets" },
];

const data = [
  {
    id: 1,
    product: "Ultra High Molecular Weight Polyethylene Sheets",
    content:
      "Ultra High Molecular Weight Polyethylene (UHMWPE) Sheets are known for their exceptional durability, high impact resistance, and low friction properties. These versatile sheets are perfect for various applications, including conveyor systems, chute linings, wear strips, marine bumpers, and dock fenders. They are also ideal for food processing and medical devices due to their FDA approval and chemical resistance. UHMWPE sheets offer reliable performance and superior quality in the most demanding industrial environments.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/uhmw.jpeg?updatedAt=1718869309029",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/uhmw-polyethylene-sheet-1000x1000.webp?updatedAt=1718867693925",
    ],
  },
  {
    id: 2,
    product: "PolyPropylene Sheets",
    content:
      "Polypropylene Sheets are known for their excellent chemical resistance, high impact strength, and low moisture absorption. These versatile sheets are ideal for various applications, including chemical tanks, industrial plating, and automotive components. They are also widely used in food processing and packaging due to their FDA compliance and low toxicity. Polypropylene sheets offer reliable performance and exceptional durability in diverse industrial and commercial environments.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/polypropyle.webp?updatedAt=1718867693879",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/polypropylene-sheet-pp-sheet.jpg?updatedAt=1718869309018",
    ],
  },
  {
    id: 3,
    product: "High Density Polyethylene Sheets",
    content:
      "Discover the versatility of High Density Polyethylene (HDPE) sheets with our premium products. HDPE sheets are renowned for their strength, flexibility, and resistance to impact and chemicals, making them ideal for a wide range of applications. From industrial cutting boards to marine construction and environmental containment solutions, HDPE sheets offer unmatched reliability and performance. Explore our selection today to find the perfect solution for your needs.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/hdpe-sheet-bw-2028x1544.jpg-3-640x487.jpeg?updatedAt=1718867693741",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/HDPE-general-purpose_ABZ7427-1024x681.jpg?updatedAt=1718869309783",
    ],
  },
  {
    id: 4,
    product: "Bakelite Sheets",
    content:
      "We deliver high-quality Bakelite sheets renowned for their robustness and exceptional electrical insulation properties. These sheets are essential in electrical and automotive industries, offering superior heat resistance, mechanical strength, and dimensional stability. Common applications include electrical insulation panels, automotive components, and various industrial uses. Choose our reliable Bakelite sheet solutions for your specific requirements today",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/millborn-bakelite-sheet-1642841391-6169057.jpg?updatedAt=1718869309066",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/paper-bakelite-sheet-1.webp?updatedAt=1718867693888",
    ],
  },
  {
    id: 5,
    product: "Delrin Sheets",
    content:
      "Experience the exceptional durability and versatility of Delrin sheets. Delrin, a type of acetal resin, is renowned for its high mechanical strength, low friction coefficient, and excellent dimensional stability. It finds extensive use in industries ranging from automotive and consumer goods to manufacturing and engineering. Delrin sheets are ideal for applications such as gears, bushings, rollers, and structural components where strength and precision are paramount. Trust our reliable delivery of Delrin sheet solutions tailored to your needs.",
    images: [
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/delrin-sheets-500x500.webp?updatedAt=1718867693968",
      "https://ik.imagekit.io/zhf0gkzac/Apjkt/polyacetal-delrin-sheets.jpg?updatedAt=1718869309034",
    ],
  },
];

function ProductsPage() {

  const refs = useRef(data.map(() => React.createRef()));
  const location = useLocation();



  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productId = parseInt(searchParams.get("productId"), 10);

    if (productId) {
      handleScroll(productId - 1);
    }
  }, [location.search]);

  const handleScroll = (index) => {
    refs.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

 

  return (
    <div className="">
      <div className="2xl:container mx-auto grid grid-cols-1 mt-[10px] lg:grid-cols-[3fr_1fr] gap-4">
        <div className="grid grid-cols-1 ">
          {data.map((e, index) => (
            <div
              key={e.id}
              ref={refs.current[index]}
              className="m-[20px] p-[20px] h-auto grid grid-cols-1 gap-6 lg:grid-cols-2 shadow-sm"
            >
              <div>
                <h1 className="text-[24px] font-bold mb-[5px] text-center lg:text-start">
                  {e.product}
                </h1>
                <p className="p-1">{e.content}</p>
              </div>
              <Carousel images={e.images} />
            </div>
          ))}
        </div>
        <div className="sidebar hidden lg:block sticky top-10 max-h-[300px] overflow-y-auto p-5 shadow-custom rounded-lg border-4 border-l-[#fc922e] ">
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
      </div>
      <FooterAll></FooterAll>
    </div>
  );
}

export default ProductsPage;
