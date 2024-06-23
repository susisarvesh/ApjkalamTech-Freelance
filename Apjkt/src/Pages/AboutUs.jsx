import FooterAll from "../Components/Footer/FooterAll";
import { useState, useEffect } from "react";
import Preloader from "./Preloader";
const AboutUs = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="2xl:container mx-auto p-4 mt-[1rem] flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overview Section */}
          <div className="col-span-2 bg-white p-6 shadow-lg rounded-lg flex justify-center items-start flex-col">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p>
              APJ Kalam Tech is a company where precision meets innovation. We
              specialize in crafting high-quality plastic, Hylam, and acrylic
              parts using state-of-the-art CNC router machines. Our team of
              skilled technicians and engineers meticulously machine each
              component to exacting standards, ensuring reliability, accuracy,
              and durability. With a commitment to continuous improvement and
              technological advancement, we invest in the latest CNC router
              technology to stay at the forefront of the industry. Whether you
              need custom prototypes, small-scale production runs, or
              large-scale manufacturing, APJ Kalam Tech is your trusted partner
              for precision machining solutions. Our rigorous quality control
              processes and advanced facility enable us to serve diverse
              industries such as automotive, aerospace, electronics, and medical
              devices, delivering customized solutions and comprehensive support
              to meet your unique requirements.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {/* Vision Section */}
            <div className="bg-teal-500 text-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Vision</h2>
              <p>
                To be the leading provider of precision-engineered CNC machined
                components, recognized for our innovation, quality, and
                commitment to excellence.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Mission</h2>
              <p>
                To deliver superior precision machining solutions through
                cutting-edge technology, skilled craftsmanship, and a relentless
                focus on quality and customer satisfaction. We strive to
                continuously improve our processes and capabilities, ensuring we
                meet and exceed the unique specifications of every project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterAll />
    </div>
  );
};

export default AboutUs;
