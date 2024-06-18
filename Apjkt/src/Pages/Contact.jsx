
import { MessageSquareText,Phone,MapPin } from 'lucide-react';
import Navbar from '../Components/Navbar/Navbar';


function Contact() {
  return (
      <div className='bg-white'>
          <Navbar></Navbar>
          <div className='p-[20px]'>
          
        <div className="2xl:container mx-auto mt-[50px]">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8 "> 
                    <div className="flex flex-col gap-4">
                        <p className="text-[#373636] font-bold text-xl">Get In Touch</p>
                        <p className="text-[#fc922e] font-bold text-5xl">Contact us</p>
                        
                    </div>
                    <div className="flex flex-col gap-4"> 
                        <div className="flex items-center gap-4"><p className="font-bold "><MessageSquareText /></p><p className="text-xl">apjkalamtech@gmail.com</p></div>
                        <div className="flex items-center gap-4"><p className="font-bold "><Phone /></p>            <p className="text-xl">+91 9952968971</p></div>
                        <div className="flex  gap-4"><p className="font-bold "><MapPin /></p>           <p className="text-xl lg:w-[500px]">14, Satish Nagar, Meenakshi Amman Nagar, Thirumudivakkam, Tamil Nadu Chennai - 600044</p></div>
                    </div> 
                </div>
                      <form className="flex flex-col gap-6">
                          

                              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
                            <div><label htmlFor="firstName">First name</label><div><input  id="firstName" name="firstName" className="border-2 w-full h-10 p-4 " type="text" required/><p id="firstNamemsg"></p></div></div>
                            <div><label htmlFor="lastName">Last name</label>  <div><input   id="lastName" name="lastName" className="border-2 w-full  h-10 p-4" type="text" required /><p id="LastNamemsg"></p> </div></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div><label htmlFor="email">Email</label><div><input className="border-2 w-full h-10 p-4"    id="email" name="email" type="email" required /><p id="emailmsg"></p>  </div></div>
                            <div><label htmlFor="phone">Phone</label><div> <input className="border-2 w-full h-10 p-4" id="phone" name="phone" type="number" required />   <p id="phonemsg"></p></div></div>
                        </div>
                        <div>
                            <div><label htmlFor="message">Message</label>
                            <textarea className="border-2 p-4 w-full "rows={4} name="message" id="message" required></textarea>
                            <p id="textmsg"></p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center lg:justify-start">
                            <button id="updateBtn" type="submit" className="bg-[#fc922e] text-white rounded-lg px-6 py-3">
                                Submit
                            </button>
                        </div>

                </form>
                    
                    
               
            </div>
              </div>
              
          </div>
          <div className="">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0868106123517!2d80.08307131115947!3d12.966296687295834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52610e4dc0ad15%3A0xa66632ca25544f5e!2sAPJ%20Kalam%20Tech!5e0!3m2!1sen!2sin!4v1718626646557!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
          
      </div>
      
  )
}

export default Contact