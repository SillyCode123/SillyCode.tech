import React from "react";
import "../../css/App.css";
import { motion } from "framer-motion";

class GoHome extends React.Component {
    render() {
        return <div className="middle">
                <motion.button
                className="btngreenDev"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: "", fontSize: 20, position: "absolute", bottom: "2%"}}
                onClick={() => window.location = "/"}
                >
                Go Home
                </motion.button>
            </div>
    }

}

export default GoHome;