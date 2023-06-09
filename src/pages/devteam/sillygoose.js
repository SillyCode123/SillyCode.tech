import "../../css/App.css";
import { motion } from "framer-motion";
import MenuBar from "../componets/MenuBar";
import { isMobile } from "react-device-detect";

function SillyGoose() {
  const git = () => {
    window.open("https://github.com/SillyGoose123");
  };

  const oos = () => {
    if (window.confirm("Leave this site to https://adorable-dango-7cc7d0.netlify.app/ ?")) window.location.replace("https://adorable-dango-7cc7d0.netlify.app/");
  };

  const sw = () => {
    window.location = "/devteam/sillygoose/switched";
  };

  const mem = () => {
    window.location = "/devteam";
  };
  
  if (isMobile) {
    return (
      <>
        <MenuBar />
        <main style={{paddingTop:"75px"}} className="grid">
          <motion.h1
            className="middle"
            style={{ color: "orange", fontSize: 60 }}
          >
            SillyGoose
          </motion.h1>

          <motion.h1 style={{ fontSize: "3em" }} className="middle">
            <span className="blue">Links</span>
          </motion.h1>

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

          <motion.h1
            className="middle"
            style={{ color: "Green", fontSize: "3em" }}
          >
            Languages
          </motion.h1>

          <div style={{ paddingLeft: "20%" }}>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[1]</span> Java
            </motion.h1>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[2]</span>JavaScript
            </motion.h1>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[3]</span> C
            </motion.h1>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[4]</span> C++
            </motion.h1>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[5]</span> Python
            </motion.h1>
          </div>

          <motion.h1 className="middle" style={{ fontSize: "3em" }}>
            <span className="red">Work</span>
          </motion.h1>

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
                href="../index"
              >
                This Site
              </motion.a>
            </h1>

            <h1 className="middle">
              <motion.a
                className="overflow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  color: "darkgoldenrod",
                  fontSize: 40,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={oos}
              >
                Our Old Site
              </motion.a>
            </h1>

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
          <div className="middle">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btngreenDev"
              onClick={mem}
            >
              Back to Members
            </motion.button>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <>
        <MenuBar />
        <main style={{paddingTop:"90px"}}  className="grid">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btngreenDev"
            onClick={mem}
          >
            Back to Members
          </motion.button>
          <motion.h1
            className="middle"
            style={{ color: "orange", fontSize: 40 }}
          >
            SillyGoose
          </motion.h1>
          <div className="right">
            <motion.button
              className="devTeamBtn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ fontSize: 20 }}
              onClick={sw}
            >
              Switch
            </motion.button>
          </div>
          <motion.h1 style={{ color: "Green", fontSize: 40 }}>
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
              <span className="niceBlue">[3]</span> C
            </motion.h1>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[4]</span> HTML+CSS
            </motion.h1>
            <motion.h1 style={{ color: "Yellow", fontSize: 40 }}>
              <span className="niceBlue">[5]</span> Python
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
                href="../index"
              >
                This Site
              </motion.a>
            </h1>

            <h1 className="middle">
              <motion.a
                className="overflow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  color: "darkgoldenrod",
                  fontSize: 40,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={oos}
                cxcv
              >
                Our Old Site
              </motion.a>
            </h1>

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
}

export default SillyGoose;
