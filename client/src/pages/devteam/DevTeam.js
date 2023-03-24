import logo from '../../img/SillyCoder.png';
import '../../css/App.css';
import { motion } from 'framer-motion';

function DevTeam() {
    const dash = () => {
        window.location = "/dashboard";
    }
    
    const sg = () => {
        window.location = "/devteam/sillygoose";
    }

    const kd = () => {
        window.location = "/devteam/kindskopf";
    }

    const gb = () => {
        window.location = "/";
    }

    return (
        <body>
             <nav>
                <div className='logoNav'>
                    
                    <motion.a
                    href='../index'
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
            <main>
                <div style={{fontSize:40}}><motion.h1 className='middle' style={{color:'orange'}}>Members</motion.h1></div>
                <br/>
                <div className='middle'>
                    <motion.button  
                    className='devTeamBtn'
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}  
                    style={{color:'', fontSize:20}}
                    onClick={sg}
                    >SillyGoose</motion.button>
                </div>      
                <br/>
                <div className='middle'>
                    <motion.button  
                    className='devTeamBtn'
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}  
                    style={{color:'', fontSize:20}}
                    onClick={kd}
                    >Kindskopf</motion.button>
                </div>
                <br/>                     
                <div className='middle'>
                    <motion.button  
                    className='btngreenDev'
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}  
                    style={{color:'', fontSize:20}}
                    onClick={gb}
                    >Go Back</motion.button>
                </div>      
                

            </main>
        </body>
      );
}

export default DevTeam;
