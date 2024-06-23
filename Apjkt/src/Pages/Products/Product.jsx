
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "UHMWPE Sheets",
    description:
      "Leveraging the advanced FlexiCAM Ultimate 5-Axis CNC machining center, we deliver ultra-precise, high-strength aluminum components for the aerospace industry. Our state-of-the-art technology ensures exceptional quality and consistency in every product.",
    image: 'https://ik.imagekit.io/zhf0gkzac/Apjkt/uhmw-polyethylene-sheet-1000x1000.webp?updatedAt=1718867693925'
  },
  {
    id: 2,
    title: "PolyPropylene Sheets",
    description:
      "We specialize in precision cutting of carbon fiber for drone parts, ensuring top-quality, high-performance components. Our advanced technology guarantees exceptional accuracy and consistency for all your drone manufacturing needs.",
    image: 'https://ik.imagekit.io/zhf0gkzac/Apjkt/polypropyle.webp?updatedAt=1718867693879'
  },
  {
    id: 3,
    title: "High Density Polyethylene Sheets",
    description:
      "We manufacture aerospace-grade aluminum components with exceptional precision using advanced CNC router machines. Our cutting-edge technology ensures high-quality, reliable parts that meet the stringent standards of the aerospace industry.",
    image: 'https://ik.imagekit.io/zhf0gkzac/Apjkt/hdpe-sheet-bw-2028x1544.jpg-3-640x487.jpeg?updatedAt=1718867693741'
  },
  {
    id: 4,
    title: "Bakelite Sheets",
    description:
      "Crafted with precision, our UHMWPE machined parts redefine excellence, delivering cutting-edge performance and durability.",
    image: 'https://ik.imagekit.io/zhf0gkzac/Apjkt/paper-bakelite-sheet-1.webp?updatedAt=1718867693888'
  },
  {
    id: 5,
    title: "Delrin Sheets",
    description:
      "Experience precision in every pore with our specialized fabrication of paper and oil filter plates. Engineered for optimal filtration efficiency, our plates deliver reliability and performance, ensuring your processes run seamlessly.",
    image: 'https://ik.imagekit.io/zhf0gkzac/Apjkt/delrin-sheets-500x500.webp?updatedAt=1718867693968'
  },
  
];

function Product() {
  return (
    <div className="2xl:container mx-auto flex flex-col gap-6 sm:gap-6 md:gap-10 lg:gap-10 mb-[100px]">
      <div className="w-[95%] sm:w-[90%] md:w-[90%] lg:w-[80%] mx-auto">
              {/* Any additional content can go here */}
               <h3 className="text-[#373636] text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold flex justify-center items-center">
           Products We Deliver
          </h3>
            
      </div>
      <div className="w-[90%] md:[80%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50 relative overflow-hidden"
              style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="bg-opacity-50 p-6 rounded-xl">
                <p className="text-2xl font-bold flex justify-center items-center text-center text-white">
                  {service.title}
                </p>
                {/* <p className="text-black">{service.description}</p> */}
                <div className="flex justify-center mt-4">
                  <Link
                    to={{
                      pathname: "/products",
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
