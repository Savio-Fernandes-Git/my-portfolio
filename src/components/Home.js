import Aos from 'aos';
import React,{useEffect} from 'react'
import {SocialIcon} from 'react-social-icons';
import "aos/dist/aos.css";
import me from '../Pictures/me.jfif';
import { motion } from 'framer-motion';
import { DiHtml5, DiCss3, DiJsBadge, DiGithubBadge, DiReact, DiVisualstudio } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
    useEffect(() => {
        Aos.init({});
    }, [])

    const containerVariants = {
        hidden: { 
            opacity: 0, 
        },
        visible: { 
            opacity: 1, 
            transition: { duration: 1.5 }
        },
        exit: {
            x: "-100vh",
            transition: { ease: 'easeInOut' }
        }
        };

        const buttonVariants = {
            hover: {
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                
                transition: {
                duration: 0.3,
                yoyo: Infinity
                }
            }
            }
        
    return (
        <motion.div className="home grid grid-cols-1 md:grid-cols-1 grid-flow-column"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
        <div className="intro">
            <h1 data-aos="fade-right" data-aos-duration="2000" className="intro-text">Hello, I am Savio Fernandes</h1>
            <span className="image" data-aos="fade-left" data-aos-duration="2000">
                <motion.img 
                drag
                dragConstraints={{ left:0,top:0,right:0,bottom:0}}
                src={me} alt="My Pic" className="rounded-full border-4 border-white"/>
            </span>
        </div>
        <h1 data-aos="fade-right" data-aos-duration="2000" className="skills-text text-4xl ml-16">Skillset/Tools used</h1>
        <div className="social-icons" data-aos="fade-up" data-aos-duration="2000" >
            <motion.div className="icons" variants={buttonVariants} whileHover="hover"
            data-aos="fade-up" data-aos-duration="2000">
                <DiHtml5 style={{ height:100, width:100 }}/>
                <p className="ml-6 mt-4">HTML 5</p>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" data-aos="fade-up" data-aos-duration="2000">
                <DiCss3 style={{ height:100, width:100 }}/>
                <p className="ml-8 mt-4">CSS 3</p>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" data-aos="fade-up" data-aos-duration="2000">
                <DiJsBadge style={{ height:100, width:100 }}/>
                <p className="ml-2 mt-4">JavaScript</p>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" data-aos="fade-up" data-aos-duration="2000">
                <DiGithubBadge style={{ height:100, width:100 }}/>
                <p className="ml-6 mt-4">Github</p>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" data-aos="fade-up" data-aos-duration="2000">
                <DiReact style={{ height:100, width:100 }}/>
                <p className="ml-6 mt-4">Reactjs</p>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" data-aos="fade-up" data-aos-duration="2000">
                <DiVisualstudio style={{ height:100, width:100 }}/>
                <p className="ml-6 mt-4">VScode</p>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" data-aos="fade-up" data-aos-duration="2000">
                <SiTailwindcss style={{ height:100, width:100 }}/>
                <p className="ml-0 mt-4">TailwindCSS</p>
            </motion.div>
        </div>
        <h1 data-aos="fade-right" data-aos-duration="2000" className="socials-text text-4xl ml-16">Socials</h1>
        <div className="social-icons">
        <motion.div variants={buttonVariants} whileHover="hover">
            <SocialIcon data-aos="fade-up" data-aos-duration="2000" url="https://www.linkedin.com/in/savio15/" fgColor="rgb(25, 175, 180)" bgColor="#333" style={{ height: 150, width: 150 }}/>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover">
            <SocialIcon data-aos="fade-up" data-aos-duration="2000" url="https://github.com/Savio-Fernandes-Git" fgColor="rgb(25, 175, 180)" bgColor="#333" style={{ height: 150, width: 150 }}/>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover">
            <SocialIcon data-aos="fade-up" data-aos-duration="2000" url="mailto:savio-f-tech@gmail.com" fgColor="rgb(25, 175, 180)" bgColor="#333" style={{ height: 150, width: 150 }}/>
        </motion.div>
        </div>
        </motion.div>
    )
}
