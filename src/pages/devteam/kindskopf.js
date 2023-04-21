import logo from "../../img/SillyCoder.png";
import "../../css/App.css";
import { motion } from "framer-motion";

function Kindskopf() {
  const dash = () => {
    window.location = "../dashboard";
  };

  const git = () => {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://github.com/Kindskopf123",
    }).click();
  };

  const mem = () => {
    window.location = "/devteam";
  };

  return (
    <>
      <nav id="north">
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
      </nav>

      <main className="grid">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btngreenDev"
          onClick={mem}
        >
          Back to Members
        </motion.button>
        <motion.h1 className="middle" style={{ color: "orange", fontSize: 40 }}>
          Kindskopf
        </motion.h1>
        <samp></samp>
        <motion.h1 className="" style={{ color: "Green", fontSize: 40 }}>
          Languages
        </motion.h1>

        <motion.h1 className="middle">
          <span className="blue">Links</span>
        </motion.h1>

        <motion.h1 className="middle" style={{ fontSize: 40 }}>
          <span className="red">Work</span>
        </motion.h1>
        <div>
          <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
            <span className="niceBlue">[1]</span> Java
          </motion.h1>
          <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
            <span className="niceBlue">[2]</span> JavaScript
          </motion.h1>
          <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
            <span className="niceBlue">[3]</span> HTML+CSS
          </motion.h1>
          <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
            <span className="niceBlue">[4]</span> Python
          </motion.h1>
        </div>
        <div className="middle">
          <motion.button
            className="devTeamBtn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ fontSize: 20 }}
            onClick={git}
          >
            Github
          </motion.button>
        </div>

        <div>
          <h1 className="middle">
            <motion.a
              className="overflow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: "darkgoldenrod",
                fontSize: 40,
                textDecoration: "none",
              }}
              href="https://discord.gg/DKRcNd7Hpn"
              target={"_blank"}
            >
              Our Discord
            </motion.a>
          </h1>
        </div>

        <br />
      </main>
    </>
  );
}

export default Kindskopf;
