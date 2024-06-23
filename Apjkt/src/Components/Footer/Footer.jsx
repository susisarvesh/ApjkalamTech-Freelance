import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-10 p-5 pb-[100px]">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-7">
                    <div className="flex flex-row justify-center lg:justify-start">
                        <img src="https://ik.imagekit.io/zhf0gkzac/apjkt_logo-removebg-preview.png?updatedAt=1718425692719" alt="logo" className="w-28"  />
                    </div>
                    <div className="flex justify-center ">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-base">
                            <div><Link to="/company" className="hover:text-black text-white flex justify-center">About</Link></div>
                            <div><Link to="/solutions/?productId=1" className="hover:text-black text-white flex justify-center">Solutions</Link></div>
                            <div><Link to="/contact" className="hover:text-black text-white flex justify-center">Reach Us</Link></div>
                            <div><Link to="/products/?productId=1" className="hover:text-black text-white flex justify-center">Products</Link></div>
                            {/* <div><Link to="#" className="hover:text-black text-white flex justify-center ">Privacy</Link></div> */}
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 justify-center lg:justify-end text-white text-base ">
                        <div>
                            <Link to="#" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </Link>
                        </div>
                        <div>
                            <Link to="#" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </Link>
                        </div>
                        <div>
                            <Link to="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="font-bold text-white "/>
                </div>
                <div className="flex justify-center text-white ">
                    <p>Copyright &copy; 2024 Apjkt Pvt.Ltd.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
