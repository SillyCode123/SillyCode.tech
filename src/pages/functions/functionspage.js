import "../../css/App.css";
import GoBack from "../componets/GoHome";
import MenuBar from "../componets/MenuBar";
import { motion } from "framer-motion";

function FunctionsPage() {
  const nimm = () => {
    window.location = "/functions/nimmgame";
  };

  const click = () => {
    window.location = "/functions/clicks";
  };

  const dash = () => {
    window.location = "/dashboard";
  };

  const oos = () => {
    if (
      window.confirm(
        "Leave this site to https://adorable-dango-7cc7d0.netlify.app/ ?"
      )
    ) {
      window.location.replace("https://adorable-dango-7cc7d0.netlify.app/");
    }
  };

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
                onClick={nimm}
              >
                NimmGame
              </motion.button>
            </div>

          <div className="space">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={click}
            >
              Clicks
            </motion.button>
          </div>

          <div className="space">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={oos}
            >
              Visit our Old Page
            </motion.button>
          </div>
          
          <div className="space">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="indexBtn"
              onClick={dash}
            > Dashboard </motion.button>
            </div>
        </div>
      </main>
      <GoBack/>
    </>
  );
}

export default FunctionsPage;
