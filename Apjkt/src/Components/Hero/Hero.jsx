

function Hero() {
  const images1 = [
    "https://ik.imagekit.io/zhf0gkzac/wood_cutting-transformed.webp?updatedAt=1718428647001",
    "https://ik.imagekit.io/zhf0gkzac/stock-photo--d-printer-making-object-1369600760-transformed.jpeg?updatedAt=1718428764446",
    "https://ik.imagekit.io/zhf0gkzac/MG_6684-scaled.webp?updatedAt=1718428764340",
    "https://ik.imagekit.io/zhf0gkzac/oar2.jpg?updatedAt=1718428787237",
    "https://ik.imagekit.io/zhf0gkzac/71qhjZ162dL.AC_UF1000,1000_QL80.jpg?updatedAt=1718434496038",
    "https://ik.imagekit.io/zhf0gkzac/image2__95185.jpg?updatedAt=1718434495795",
  ];

  const images2 = [
    "https://ik.imagekit.io/zhf0gkzac/plastic-project.jpg?updatedAt=1718434496085",
    "https://ik.imagekit.io/zhf0gkzac/cnc.webp?updatedAt=1718434496265",
    "https://ik.imagekit.io/zhf0gkzac/uhmwpe-bottle-filler-star-wheel-500x500.webp?updatedAt=1718434496076",
    "https://ik.imagekit.io/zhf0gkzac/part-00405-2110-1024x577.jpg?updatedAt=1718434495945",
    "https://ik.imagekit.io/zhf0gkzac/stock-photo--d-printer-making-object-1369600760-transformed.jpeg?updatedAt=1718428764446",
    "https://ik.imagekit.io/zhf0gkzac/wood_cutting-transformed.webp?updatedAt=1718428647001",
  ];

  return (
    <div className="w-screen h-auto lg:h-auto 2xl:container mx-auto mb-[10px]">
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:p-[100px]">
        <div className="flex flex-col gap-8 p-8 justify-center md:items-center lg:items-start">
          <p className="text-[#373636] text-3xl text-center  md:text-7xl lg:text-6xl lg:text-start font-semibold">
            Precision in Every Cut<span className='text-[#fc922e]'>,</span> Innovation in Every Part.
          </p>
          <p className="text-xl text-center w-[260px] sm:text-2xl md:text-2xl md:w-[450px] lg:text-2xl lg:text-start lg:w-[415px]">
            High-quality plastic, Hylam, and acrylic parts made with precision using advanced CNC machines.
          </p>
          <div className="flex items-center justify-center lg:items-start lg:justify-start" >
            <button className="bg-[#fc922e] text-white rounded-lg px-6 py-3">
              Make a Deal
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-10">
          <div className="relative h-80 lg:h-[600px] overflow-hidden ">
            <div className="absolute w-full h-full flex flex-col gap-4 animate-scroll md:animate-scrollmed ">
              {images1.map((src, index) => (
                <div key={index} className="w-full flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Company logo ${index + 1}`}
                    className="h-80  md:h-full lg:h-[500px] object-cover rounded-lg "
                  />
                </div>
              ))}
              {images1.map((src, index) => (
                <div key={`duplicate-${index}`} className="w-full flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Duplicate company logo ${index + 1}`}
                    className="h-80 md:h-full lg:h-[500px] object-cover rounded-lg "
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-80 lg:h-full overflow-hidden">
            <div className="absolute w-full h-full flex flex-col gap-4 animate-scroll-reverse">
              {images2.map((src, index) => (
                <div key={`image2-${index}`} className="w-full flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Company logo ${index + 1}`}
                    className="h-80 md:h-full lg:h-[500px] object-cover rounded-lg "
                  />
                </div>
              ))}
              {images2.map((src, index) => (
                <div key={`duplicate-image2-${index}`} className="w-full flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Duplicate company logo ${index + 1}`}
                    className="h-80 md:h-full lg:h-[500px] object-cover rounded-lg "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
