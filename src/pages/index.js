import "../css/App.css";
import logo from "../img/SillyCoder.png";
import { motion } from "framer-motion";

function Index() {
  const dash = () => {
    window.location = "/dashboard";
  };

  /* const fun = () => {
        window.location = "/functions";
    }
    */
  const mem = () => {
    window.location = "/devteam";
  };

  return (
    <body>
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
      <br />
      <main>

         <section class="bgblue">
      <h1>Nice Curves!</h1>
      <p>A website is like a road. The more curves it has the more interesting it is.</p>
      <div class="curve"></div>
    </section>

    <section>
      <h1>Nice Curves!</h1>
      <p>A website is like a road. The more curves it has the more interesting it is.</p>
    </section>
        {/* 
             <motion.button  
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={fun} 
            >
              Functions
            </motion.button>
            */}
        <br />
      </main>
    </body>
  );
}

export default Index;
