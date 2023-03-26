import logo from '../img/SillyCoder.png';
import '../css/App.css';
import { motion } from 'framer-motion';

function Error404() {
    return (
        <div className="App">
          <header className="App-header">
            
            <h1>Error 404 Page not Found</h1>
              <img src={logo} className="App-logo" alt="logo" />
            <p>
            </p>
            <motion.a
               whileHover={{scale: 1.5}} 
               whileTap={{scale: 0.9}} 
              className="App-link"
              href="/index"
              target="_self"
              rel="noopener noreferrer"
            >
                Go Home
            </motion.a>
          </header>
        </div>
      );
}

export default Error404;
