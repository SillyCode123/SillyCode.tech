import React from "react";
import "../../css/App.css";
import MenuBar from "../componets/MenuBar";
import { motion } from "framer-motion";

var clicks = 0;

function Clicks() {
  const [refresh, setRefresh] = React.useState(0);

  const addElement = () => {
    clicks += 1;
  };

  return (
    <body className="overflow">
     <MenuBar/>  

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
