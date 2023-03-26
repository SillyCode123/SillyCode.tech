import '../css/App.css';
import logo from '../img/SillyCoder.png';
import { motion } from 'framer-motion';

function Index() {

    const dash = () => {
        window.location = "/dashboard";
    }

    const fun = () => {
        window.location = "/functions";
    }

    const mem = () => {
        window.location = "/devteam";
    }

    return (
        <body>
            <nav>
                <div className='logoNav'>
                    
                    <motion.a
                    href='index'
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    ><img className='round' alt='' src={logo} width="150px" height="150px" ></img>
                    </motion.a>
                    
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={dash}
                    >Dashboard</motion.button>  
                     
                </div>   
            </nav>
            <br/>
            <main>
                <div className='space'>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={mem}
                    >DevTeam</motion.button>  
                
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={fun}
                    > Functions</motion.button>

                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={dash}
                    >Dashboard</motion.button>  
                </div>
                <br/>
                <div className='space'>
                 
                </div>
            </main>
        </body>
      );
}

export default Index;
