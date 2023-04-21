import React from "react";
import "../../css/App.css";
import logo from "../../img/SillyCoder.png";
import { motion } from "framer-motion";

var clicks = 0;

function Clicks() {
  const [refresh, setRefresh] = React.useState(0);

  const dash = () => {
    window.location = "/dashboard";
  };

  const addElement = () => {
    clicks += 1;
  };

  const mem = () => {
    window.location = "/devteam";
  };

  return (
    <body className="overflow">
      <nav>
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="aboutusbtn"
              onClick={mem}
            >
              About Us
            </motion.button>
          </div>
        </div>
      </nav>

      <div class="clicks-middle">
        <motion.h1
          id="clickCounter"
          style={{ paddingRight: "2%", paddingTop: "2.5%" }}
        >
          Clicks: 
          <span className="middle" style={{paddingTop: "5%"}}>{clicks}</span>
        </motion.h1>
        <div className="grid-around-space">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="indexBtn"
            onClick={() => {
              addElement();
              setRefresh(refresh + 1);
            }}
          >
            Click me
          </motion.button>
        </div>

        <div className="grid-around-space">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="indexBtn"
            onClick={() => {
              window.location.reload();
            }}
          >
            Clear
          </motion.button>
        </div>

        <div className="grid-around-space">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="indexBtn"
            onClick={() => {
              window.location = "../functions";
            }}
          >
            Go to Functions
          </motion.button>
        </div>
      </div>
      <div
        id="test"
        style={{ fontSize: 30, paddingTop: "5%", paddingLeft: "50%" }}
      ></div>
    </body>
  );
}
export default Clicks;
