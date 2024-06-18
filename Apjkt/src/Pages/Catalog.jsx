import FooterAll from "../Components/Footer/FooterAll"


function Catalog() {
    return (
        <div className="">

            <div className="2xl:container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 ">
            <img src="https://ik.imagekit.io/zhf0gkzac/Apjkt/catalog.jpg?updatedAt=1718721030412" alt="" />

          <img src="https://ik.imagekit.io/zhf0gkzac/Apjkt/c2.jpg?updatedAt=1718721030752" alt="" />
            </div>
            <div className="flex justify-center items-center m-[20px]">
                <button className="bg-[#fc922e] text-white p-2 rounded-lg">
                    <a href="../assets/APJKT.pdf" download>Download ▼</a></button>
            </div>
            <FooterAll></FooterAll>
            </div>
  )
}

export default Catalog