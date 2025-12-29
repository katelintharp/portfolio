// pages/HomePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToHash from '../components/ScrollToHash';

const HomePage: React.FC = () => {
    return (
        <>
            <ScrollToHash />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
};

export default HomePage;