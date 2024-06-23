import { MessageSquareText, Phone, MapPin } from 'lucide-react';
import Navbar from '../Components/Navbar/Navbar';
import { useState, useEffect, useRef } from "react";
import Preloader from "./Preloader";
import emailjs from '@emailjs/browser';

function Contact() {
    const [loading, setLoading] = useState(true);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p0j9rjp', 'template_1zsyao1', form.current, 'GyiqKG9lQ0hMYSsYd')
            .then(
                () => {
                    setStatusMessage('Email sent successfully!');
                    setStatusType('success');
                    form.current.reset();
                },
                (error) => {
                    setStatusMessage(`Failed to send email: ${error.text}`);
                    setStatusType('error');
                }
            );
    };

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className='bg-white'>
       
            <div className='p-5'>
                <div className="2xl:container mx-auto mt-12">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-gray-800 font-bold text-xl">Get In Touch</p>
                                <p className="text-orange-500 font-bold text-5xl">Contact us</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <MessageSquareText className="font-bold" />
                                    <p className="text-xl">apjkalamtech@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="font-bold" />
                                    <p className="text-xl">+91 9952968971</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MapPin className="font-bold" />
                                    <p className="text-xl lg:w-[500px]">14, Satish Nagar, Meenakshi Amman Nagar, Thirumudivakkam, Tamil Nadu Chennai - 600044</p>
                                </div>
                            </div>
                        </div>
                        <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
                            {statusMessage && (
                                <div className={`text-center p-2 rounded ${statusType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {statusMessage}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="firstName">First name</label>
                                    <input id="firstName" name="from_name" className="border-2 w-full h-10 p-4" type="text" required />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last name</label>
                                    <input id="lastName" name="from_name1" className="border-2 w-full h-10 p-4" type="text" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input className="border-2 w-full h-10 p-4" id="email" name="from_email" type="email" required />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input className="border-2 w-full h-10 p-4" id="phone" name="phone_no" type="text" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea className="border-2 p-4 w-full" rows={4} name="message" id="message" required></textarea>
                            </div>
                            <div className="flex justify-center lg:justify-start">
                                <button type="submit" className="bg-orange-500 text-white rounded-lg px-6 py-3">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
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
    );
}

export default Contact;
