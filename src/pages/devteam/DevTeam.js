import MenuBar from "../componets/MenuBar";
import GoHome from "../componets/GoHome";
import "../../css/App.css";
import { motion } from "framer-motion";


function DevTeam() {
  return (
    <>
      <MenuBar/>    
      <main>
        <div className="middle" style={{ fontSize: 40, paddingTop:"3%"}}>
          <motion.h1 style={{ color: "orange" }}>
            Links
          </motion.h1>
        </div>
        <div className="middle">
          <motion.button
            className="devTeamBtn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "", fontSize: 20 }}
            onClick={() => window.open("https://github.com/sillycode123")}
          >
            Github
          </motion.button>
        </div> 
        <br/>
        <div className="middle">
          <motion.button
            className="devTeamBtn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "", fontSize: 20 }}
            onClick={() => window.location = "/software"}
          >
            Our Software
          </motion.button>
        </div>
        <br/>
        <div className="middle" style={{ fontSize: 40 }}>
          <motion.h1 style={{ color: "orange" }}>
            Members
          </motion.h1>
        </div>
        <div className="middle">
          <motion.button
            className="devTeamBtn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "", fontSize: 20 }}
            onClick={() => window.location = "/devteam/sillygoose"}
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
            onClick={() => window.location = "/devteam/kindskopf"}
          >
            Kindskopf
          </motion.button>
        </div>
        <br />
        <GoHome/>
      </main>
    </>
  );
}

export default DevTeam;
