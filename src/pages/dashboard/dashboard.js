import { motion } from "framer-motion";
import React from "react";
import logo from "../../img/SillyCoder.png";

//setup the variables
var token_type = "empty";
var access_token = "empty";
var buttonText = "Login"; 

function Dashboard() {
  const [refresh, setRefresh] = React.useState(0);

  const mem = () => {
    window.location = "/devteam";
  };

  window.addEventListener("load", load(setRefresh, refresh));

  const loginclick = () => {
    if(window.location.href.toString().includes("#")){
      document.cookie = "";
      if(window.location.href.includes("sillycode.tech")){
        window.location.href = "https://sillycode.tech/dashboard";
      } else{
        window.location.href = "http://localhost:3000/dashboard";
        console.log("true");
      }
    }  else{
      if(window.location.href.includes("sillycode.tech")){
          window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1043950277738385499&redirect_uri=http%3A%2F%2Fsillycode.tech%2Fdashboard&response_type=token&scope=identify%20guilds";
      } else if(window.location.href.includes("sillycode.netlify.app/")) {
        window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1043950277738385499&redirect_uri=https%3A%2F%2Fsillycode.netlify.app%2Fdashboard&response_type=token&scope=identify%20guilds"
      }else {                                                   
          window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1043950277738385499&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&response_type=token&scope=identify%20guilds";
      }
    }  
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logoNav">
            <motion.a
              href="index"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="logoBtn"
            >
              <img
                className="logo"
                alt=""
                src={logo}
                width="150px"
                height="150px"
              ></img>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="loginbtn"
              id="loginButton"
              onClick={loginclick}
            >
              {buttonText}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="aboutusbtn"
              onClick={mem}
            >
              About Us
            </motion.button>
          </div>
        </div>
      </nav>
      <main style={{padding: "6%"}} id="content">
        <span id="kot" className="middle">Nothing to Display. Please Login.</span>
      </main>
    </>
  );
}

var loaded = true;

function load(setRefresh, refresh) {
    if (window.location.href.toString().includes("#") && loaded) {
        loaded = false;
        buildController();
        setRefresh(refresh + 1);
    } 
}    

function buildController() {
    clearContent();
    login();
    
} 

function clearContent() {
    try {
        document.querySelector("#kot").remove();
    } catch (error) {
        
    }
}

function login() {
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
        const {id, username, avatar ,discriminator} = response
        buildHello(id, username, avatar ,discriminator);
    }).catch(console.error); 

    buttonText = "Logout";
   
}

function buildHello(id, username, avatar ,discriminator) {
  clearContent(); 

  //go the div where we write in
  let body = document.getElementById("content");

  // create the welcome in an h1
  let h1 = document.createElement("h1");
  h1.innerHTML = "Welcome ";
  h1.className = "middle";

  //setup the link to the discord avatar picture and create the img
  let avaurl = "https://cdn.discordapp.com/avatars/" + id + "/" + avatar + ".jpg";
  let img = document.createElement("img");
  img.src = avaurl;
  img.alt = "";
  img.className = "logo123";


  //create the span for the username
  let span = document.createElement("span");
  span.innerText = " " + username;

  //create the span for the Discordtag aka discriminator
  let span1 = document.createElement("span");
  span1.innerText = "#" + discriminator;

  let test = document.createElement("h1");
  test.innerText = "Nothing to Display.";
  test.className = "middle";

  //append the childs
  body.appendChild(h1);
  h1.appendChild(img);
  h1.appendChild(span);
  if(discriminator !== "0") h1.appendChild(span1);
  body.appendChild(document.createElement("br"))
  body.appendChild(test);

}

export default Dashboard;
