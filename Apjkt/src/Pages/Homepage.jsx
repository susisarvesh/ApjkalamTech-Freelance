import { useState, useEffect } from 'react';
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Section from "../Components/Section/Section";
import Services from "../Components/Services/Services";
import Product from "./Products/Product";
import Preloader from "./Preloader";

function Homepage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the timeout as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : (
                <div className={`mainpage ${!loading && 'loaded'}`}>
                    <Hero />
                    <Section />
                    <Product />
                    <Services />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Homepage;
