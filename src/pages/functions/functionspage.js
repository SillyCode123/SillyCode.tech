import "../../css/App.css";
import GoBack from "../componets/GoHome";
import MenuBar from "../componets/MenuBar";
import { motion } from "framer-motion";

function FunctionsPage() {
  return (
    <>
      <MenuBar/>  
      <br />
      <main>
        <div className="space-onTop">
          <div className="space">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="indexBtn"
                onClick={() => window.location = "/functions/nimmgame"}
              >
                NimmGame
              </motion.button>
            </div>

          <div className="space">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={() =>   window.location = "/functions/clicks"}
            >
              Clicks
            </motion.button>
          </div>
          <div className="space">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={() => {
                  if (window.confirm("Leave this site to https://adorable-dango-7cc7d0.netlify.app/ ?")){
                    window.location = "https://adorable-dango-7cc7d0.netlify.app/";
                  }
                } 
              }
            >
              Visit our Old Page
            </motion.button>
          </div>
        </div>
      </main>
      <GoBack/>
    </>
  );
}

export default FunctionsPage;
