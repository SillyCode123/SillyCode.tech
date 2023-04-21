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
