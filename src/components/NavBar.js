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
                <nav className= {click? "nav-options-active":"nav-options"}>
                    <NavLink className="navbar-text" to="/" exact>
                        Home
                    </NavLink>
                    <NavLink className="navbar-text" to="/project" exact>
                        Projects
                    </NavLink>
                    <NavLink className="navbar-text" to="/post" exact>
                        Resume
                    </NavLink>
                    <NavLink className="navbar-text" to="/about" exact>
                        About
                    </NavLink>
                </nav>
            <div className="mobile">
                x
            </div>
            </motion.div>
        </header>
    )
}
