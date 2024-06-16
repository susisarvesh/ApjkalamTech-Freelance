function Services() {
  return (
    <>
        <div className="2xl:container mx-auto flex flex-col gap-6 sm:gap-6 md:gap-10 lg:gap-10 mb-[100px]">
        <div className="w-[95%] sm:w-[90%] md:w-[90%] lg:w-[80%] mx-auto" >
            <h1 className="text-[#373636] text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold flex justify-center items-center">Services We Provide</h1>
        </div>
        <div className="w-[90%] md:[80%] lg:w-[80%] mx-auto" >

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50">
                    <p className="text-2xl font-bold flex justify-center item-center ">High-Quality CNC Machining</p>
                    <p>Leveraging the advanced FlexiCAM Ultimate 5-Axis CNC machining center, we deliver ultra-precise, high-strength aluminum components for the aerospace industry. Our state-of-the-art technology ensures exceptional quality and consistency in every product.</p>
                    <div>
                        <button className="bg-[#fc922e] text-white rounded-lg p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>                        </button>
                    </div>
                </div>
                <div className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50">
                    <p className="text-2xl font-bold flex justify-center item-center">High-Precision Carbon Fiber Drone Parts</p>
                    <p>We specialize in precision cutting of carbon fiber for drone parts, ensuring top-quality, high-performance components. Our advanced technology guarantees exceptional accuracy and consistency for all your drone manufacturing needs.</p>
                    <div>
                        <button className="bg-[#fc922e] text-white rounded-lg p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>                        </button>
                    </div>
                </div>
                <div className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50">
                    <p className="text-2xl font-bold flex justify-center item-center">Aerospace-Grade Aluminum Components</p>
                    <p>We manufacture aerospace-grade aluminum components with exceptional precision using advanced CNC router machines. Our cutting-edge technology ensures high-quality, reliable parts that meet the stringent standards of the aerospace industry.</p>
                    <div>
                        <button className="bg-[#fc922e] text-white rounded-lg p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>                        </button>
                    </div>
                </div>
                <div className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50">
                    <p className="text-2xl font-bold flex justify-center item-center">Custom UHMWPE Fabrication</p>
                    <p>Crafted with precision, our UHMWPE machined parts redefine excellence, delivering cutting-edge performance and durability.</p>
                    <div>
                        <button className="bg-[#fc922e] text-white rounded-lg p-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>                        </button>
                    </div>
                </div>
                <div className="p-8 shadow-lg rounded-xl flex flex-col gap-5 bg-slate-50">
                    <p className="text-2xl font-bold flex justify-center item-center">Specialized Filter Plate Fabrication</p>
                    <p>Experience precision in every pore with our specialized fabrication of paper and oil filter plates. Engineered for optimal filtration efficiency, our plates deliver reliability and performance, ensuring your processes run seamlessly.</p>
                    <div>
                        <button className="bg-[#fc922e] text-white rounded-lg p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Services