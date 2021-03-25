import React from 'react'
import { motion } from 'framer-motion';

export default function About() {

    return (
        <div>
        <h1 data-aos="fade-right" data-aos-duration="2500" className="ml-32 mt-16 pb-2 text-4xl">
            About
        </h1>
        <div 
        className="about grid grid-cols-1 md:grid-cols-2 grid-flow-row m-32 mt-14 gap-12">
                <div 
                data-aos="fade-right" data-aos-duration="2000"
                className="text-3xl">
                    This webpage was built using:
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" 
                >
                    <p className="text-2xl mb-4">Reactjs</p>
                    <p className="text-2xl mb-4">Framer Motion</p>
                    <p className="text-2xl mb-4">AOS</p>
                </div>
            </div>
        </div>
    )
}
