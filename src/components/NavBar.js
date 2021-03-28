import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function NavBar() {

        const [click, setClick] = useState(false);
        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

    const navVariants = {
        hidden:{
            y:-250
        },
        visible:{
            y:0,
        transition:{ duration: 1.5}
        }
    }

    return (
        <header className="navbar">
            <motion.div className="container"
            variants={navVariants}
            initial="hidden"
            animate="visible"
            >
            <h1 className="initials">
                SF
            </h1>
            <ul>
                <nav className= {click ? "nav-options active" : "nav-options"}>
                    <NavLink className="navbar-text" to="/" exact onClick={closeMobileMenu}>
                        Home
                    </NavLink>
                    <NavLink className="navbar-text" to="/project"  onClick={closeMobileMenu}>
                        Projects
                    </NavLink>
                    <NavLink className="navbar-text" to="/post"  onClick={closeMobileMenu}>
                        Resume
                    </NavLink>
                    <NavLink className="navbar-text" to="/about"  onClick={closeMobileMenu}>
                        About
                    </NavLink>
                </nav>
            </ul>
            <div className="mobile-menu mr-8" onClick={handleClick}>
                {click ? (
                    <GrClose className="menu-icon" />
                ) : (
                    <GiHamburgerMenu className="menu-icon" />
                )}
            </div>
            </motion.div>
        </header>
    )
}
