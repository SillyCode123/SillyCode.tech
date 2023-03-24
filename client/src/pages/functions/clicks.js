import React from 'react';
import '../../css/App.css';
import logo from '../../img/SillyCoder.png';
import { motion } from 'framer-motion';

var clicks = 0;


function Clicks() {

    const [refresh, setRefresh] = React.useState(0)

    const dash = () => {
        window.location = "/dashboard";
    }

    const addElement = () => {
        clicks += 1;
        let t = document.createElement('li');
        t.innerText="click: " + clicks;
        document.getElementById("test").appendChild(t);
        if(document.getElementById("clickCounter").style.scale === 1.0) {
            document.getElementById("clickCounter").style.scale=1.1;
        } 
        
        setTimeout(() => {document.getElementById("clickCounter").style.scale=1.0 ; }, 100);

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

                    <h1 className='middle' style={{alignItems: 'center', color:'dodgerblue'}} id='playState'> Clicks by SillyGoose</h1>
                    
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={() => {dash();}}
                    >Dashboard</motion.button>  
                     
                </div>   
            </nav>
    
            <div class="middle">
                <motion.h1 id='clickCounter' style={{paddingRight: "2%", paddingTop: "4%"}}>Clicks: {clicks}</motion.h1>
                <div className='grid-around-space'>
                    
                    <motion.button 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        className='indexBtn' 
                        onClick={() => {addElement();setRefresh(refresh + 1); }} 
                    >Click me</motion.button>
                </div>

                <div className='grid-around-space'>
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={() => {window.location.reload()}} 
                >Clear</motion.button>
                </div>

                <div className='grid-around-space'>
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={() => {window.location = "../../"}} 
                >Go Home</motion.button>
                </div>
                
                <div className='grid-around-space'>
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    onClick={() => {window.location = "../functions"}} 
                >Go to Functions</motion.button>
                </div>

            </div>
                <div id='test'style={{fontSize: 30, paddingTop: '5%', paddingLeft: "50%"}}></div>

        </body>
);

}
export default Clicks;
