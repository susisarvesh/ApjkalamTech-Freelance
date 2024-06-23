"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Section() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="p-[15px]">
      <motion.div
        initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
        className="rounded-xl max-w-6xl mx-auto p-6 md:p-12 lg:p-16 shadow-lg mb-[100px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-gray-800 text-center mb-4 text-3xl w-full md:text-start md:text-3xl lg:text-4xl w-auto leading-relaxed lg:text-start">
              Cutting-Edge CNC Machining for Plastics, Metals, and Drone Parts
            </p>
            <p className="text-gray-700 mb-6 text-center md:text-lg lg:text-[20px] lg:text-start md:text-start">
              At APJKT, we deliver precision CNC machining for plastics, metals, and drone parts. Using advanced technology, we ensure top-quality results for all your project needs. Experience excellence in every cut.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/zhf0gkzac/DeWatermark.ai_1717408547209.png?updatedAt=1718434496704"
              alt="CNC Machining"
              className="rounded-lg w-[70%] md:w-3/4 lg:w-2/4 h-auto shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Section;
