import React from 'react'
import me from '../Pictures/pfp.jpg';
import { motion } from 'framer-motion';

export default function About() {

    return (
        <div>
        <h1 data-aos="fade-right" data-aos-duration="2500" className="aboutTitle ml-32 mt-16 pb-2 text-4xl">
            About
        </h1>
        <div 
        className="aboutOne grid grid-cols-1 md:grid-cols-2 grid-flow-row m-32 mt-14 gap-12">
                <div 
                data-aos="fade-right" data-aos-duration="2000"
                >
                    <motion.img 
                    drag
                    dragConstraints={{ left:0,top:0,right:0,bottom:0}}
                    src={me} alt="My Pic" className="rounded-full border-4 border-white"/>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000"
                className="text-lg leading-7" 
                >
                

<p>I am Savio Fernandes, a passionate software engineer with experience using the latest development technologies and skills in full-stack development. Seeking to raise tech effectiveness by working with my maximum potential through coordination and diligence.</p><br/>

<p>I was always fascinated by how people developed websites and how the whole thing produced a good-looking product on the browser.</p><br/>

<p>I began my journey in software engineering when I decided I had to do an internship for my undergraduate requirements, since it would provide credit hours for my course. I quickly gathered a curriculum and got into HTML, CSS and Vanilla JavaScript. I spent few hours a day learning new topics, going through courses and learning with practical examples. My short-term goal was to study Reactjs because it was a quite popular framework and it has a huge developer community. Many websites are built on Reactjs. It also allows me to get into React Native which would help me in app development later. </p><br/>

<p>Now, my current motive is to study UI/UX design to complement my full stack skills. </p><br/>

<p>Besides software engineering, I love listening & producing music, skateboarding, playing football, basketball and table tennis. </p><br/>
                </div>
            </div>
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
                    <p className="text-2xl mb-4">TailwindCSS</p>
                </div>
            </div>
        </div>
    )
}
