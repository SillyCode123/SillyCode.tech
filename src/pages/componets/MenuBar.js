import React from "react";
import logo from "../../img/SillyCoder.png";
import "../../css/App.css";
import { motion } from "framer-motion";

const dash = () => {
    window.location = "../dashboard";
};


const mem = () => {
window.location = "/devteam";
};


class MenuBar extends React.Component {
    
    
    render() {
      return <>
        <nav id="north">
        <div className="navbar">
            <div className="logoNav">
            <motion.a
                href="../index"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="logoBtn"
            >
                <img
                className="logo"
                alt=""
                src={logo}
                width="150px"
                height="150px"
                ></img>
            </motion.a>
    
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="DashboardBtn"
                onClick={dash}
            >
                Dashboard
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="aboutusbtn"
                onClick={mem}
            >
                About Us
            </motion.button>
            </div>
        </div>
        </nav>
      </>;
    }
}

export default MenuBar