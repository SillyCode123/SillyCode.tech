import "../css/App.css";
import logo from "../img/SillyCoder.png";
import { motion } from "framer-motion";

function Index() {
  const dash = () => {
    window.location = "/dashboard";
  };
    
  const mem = () => {
    window.location = "/devteam";
  };

  return (
    <>
      <div className="navbar">
        <div className="logoNav">
          <motion.a
            href="index"
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
      <br/>
      <main style={{margin: "0", padding: "0"}}>
        <section className="bgblue">
          <div className="curve"></div>
        </section>
        <section>
          <h1>IN WORK</h1>
          <span style={{marginLeft: "5%", marginRight: "5%"}}>
            At the moment there are only a few 
            <motion.a
              href="/functions" style={{color:"blue"}} whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}> functions
            </motion.a> for fun.
          </span>
        </section>
        <br/>
      </main>
    </>
  );
}

export default Index;
