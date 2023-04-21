import MenuBar from "../componets/MenuBar";
import "../../css/App.css";
import { motion } from "framer-motion";


function DevTeam() {
  const sg = () => {
    window.location = "/devteam/sillygoose";
  };


  const kd = () => {
    window.location = "/devteam/kindskopf";
  };

  const gb = () => {
    window.location = "/";
  };

  return (
    <>
      <MenuBar/>    
      <main>
        <div style={{ fontSize: 40 }}>
          <motion.h1 className="text" style={{ color: "orange" }}>
            Members
          </motion.h1>
        </div>
        <br />
        <div className="middle">
          <motion.button
            className="devTeamBtn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "", fontSize: 20 }}
            onClick={sg}
          >
            SillyGoose
          </motion.button>
        </div>
        <br />
        <div className="middle">
          <motion.button
            className="devTeamBtn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "", fontSize: 20 }}
            onClick={kd}
          >
            Kindskopf
          </motion.button>
        </div>
        <br />
        <div className="middle">
          <motion.button
            className="btngreenDev"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "", fontSize: 20 }}
            onClick={gb}
          >
            Go Back
          </motion.button>
        </div>
      </main>
    </>
  );
}

export default DevTeam;
