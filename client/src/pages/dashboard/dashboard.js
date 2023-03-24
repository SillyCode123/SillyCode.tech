import { motion } from "framer-motion";
import React from "react";
import logo from '../../img/SillyCoder.png';

//setup the variables
var token_type = "empty";
var access_token = "empty";
var buttonText = "Login"; 

function Dashboard() {

    const [refresh, setRefresh] = React.useState(0);

    window.addEventListener('load', load(setRefresh,refresh));

    const loginclick = () => {
        if(window.location.href.includes("sillycode.tech")){
            window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1043950277738385499&redirect_uri=http%3A%2F%2Fsillycode.tech%2Fdashboard&response_type=token&scope=identify%20guilds";
        } else {
            window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1043950277738385499&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=token&scope=identify%20guilds";
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
                    
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    className='indexBtn' 
                    id="loginButton"
                    onClick={loginclick}
                    >{buttonText}</motion.button>  
                     
                </div>   
            </nav>
            <br/>

            <main id="content"><span className="middle">Nothing to Display. Please Login.</span></main>

        </body>
);

}

function load(setRefresh, refresh) {

    if (window.location.href.toString().includes("#")) {
                        
        //get the url
        let url = document.URL;

        //split the url in the terms we need
        const split = url.split("=");
        const split2 = split[1].split("&");
        const split3 = split[2].split("&");

        //order the tokens their content
        token_type = split2[0];
        access_token = split3[0];
        
        //go with the token and token type to the Discordapi
        fetch('https://discord.com/api/users/@me', {
        headers: {
        authorization: `${token_type} ${access_token}`,
        },
        })
        .then(result => result.json())
        .then(response => {

            clearContent();

            //sth button to logout
            buttonText = "Loguot"

            const {id, username, avatar ,discriminator} = response;

            //give the build controller the data from the Api after asking for a cookie
            buildController(id, username, avatar ,discriminator);  
            setRefresh(refresh + 1);
        })
        .catch(console.error); 
    
    } 
}    

function buildController(id, username, avatar ,discriminator) {
    if(window.location.href.includes("sillycode.tech")){
        buildHello(id, username, avatar ,discriminator);
    } else {
       

    }
   
}

function buildHello(id, username, avatar ,discriminator) {
    

    document.getElementById("content").className = "middle";

    //go the div where we write in
    let body = document.getElementById("content");
    

    // create the welcome in an h1
    let h1 = document.createElement("h1"); 
    h1.innerHTML= "Welcome ";
    h1.className = "middle"; 

    //setup the link to the discord avatar picture and create the img
    let avaurl = "https://cdn.discordapp.com/avatars/" + id + "/" +  avatar + ".jpg" ; 
    let img = document.createElement('img');
    img.src = avaurl;
    img.alt = "";
    img.className="round123";


    //create the span for the username
    let span = document.createElement("span");
    span.innerText=" " + username;

    //create the span for the Discordtag aka discriminator
    let span1 = document.createElement("span");
    span1.innerText="#" + discriminator;

    let test= document.createElement("h1");
    test.innerText = "Nothing to Display."
    

    //append the childs
    body.appendChild(h1);
    h1.appendChild(img)
    h1.appendChild(span);
    h1.appendChild(span1);

    document.getElementById("root").appendChild(test);
    test.className = "space"
}

function clearContent() {
    try {
        document.querySelector("br").remove();
        document.querySelector("span").remove();
    } catch (error) {
        
    }
  
}

export default Dashboard;