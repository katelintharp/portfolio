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

const HomePage: React.FC = () => {
    return (
        <>
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