import '../../css/App.css';
import logo from '../../img/SillyCoder.png';
import { motion } from 'framer-motion';

function FunctionsPage() {

    const nimm = () => {
        window.location = "/functions/nimmgame";
    }

    const click = () => {
        window.location = "/functions/clicks";
    }
    
    const dash = () => {
        window.location = "/dashboard";
    }

    const oos = () => {
        if(window.confirm("Leave this site to https://adorable-dango-7cc7d0.netlify.app/ ?")){
            window.location.replace("https://adorable-dango-7cc7d0.netlify.app/");
        }
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

                    <h1 className='middle' style={{alignItems: 'center', color:'dodgerblue'}} >Functions of SillyCode.tech</h1>
                    
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
                    onClick={nimm}
                    >NimmGame</motion.button>  
                
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={click}
                    >Clicks</motion.button>

                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={oos}
                    >Visit our Old Page</motion.button>

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

export default FunctionsPage;
