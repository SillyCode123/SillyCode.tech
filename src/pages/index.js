import "../css/App.css";
import MenuBar from "./componets/MenuBar";
import { motion } from "framer-motion";

function Index() {
  return (
    <>
      <MenuBar/>  
      <br/>
      <main style={{margin: "0", padding: "0"}}>
        <section className="bgblue">
          <div className="curve"></div>
        </section>
        <div style={{position: "absolute", left:"45%" , top: "50px"}}>
          <section>
            <h1>Functions</h1>
            {/*
            <motion.button
              className="devTeamBtn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ color: "", fontSize: 20 }}
              onClick={() => window.location = "/software"}
            >Software</motion.button>
            */}
            <motion.button
              className="devTeamBtn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ color: "", fontSize: 20 }}
              onClick={() => window.location = "/functions"}
            >Fun Functions</motion.button>
          </section>
        </div>
        <br/>
      </main>
    </>
  );
}

export default Index;
