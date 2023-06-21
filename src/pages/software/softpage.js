import "../../css/App.css";
import React, {useEffect} from "react";
import GoBack from "../componets/GoHome";
import MenuBar from "../componets/MenuBar";
import { isAndroid, isIOS} from "react-device-detect";
import addContent from "./contentCreator";

//vars
var content = [];
function SoftPage() {
  const [refresh, setRefresh] = React.useState(0);
  var filters = <></>;
  if(isAndroid){
    filters = (
      <>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showAndroid" />
        Android
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showDesktop" />
        Desktop 
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showIos" />
        Ios
      </>)
    content[0] = addContent("Android");
   
    
  } else if(isIOS){
    filters = (
      <>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showIos" />
        Ios
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showAndroid" />
        Android
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showDesktop" />
        Desktop
      </>)
  } else {    
    filters = (
      <>    
        <input type="checkbox" defaultChecked={true} onClick={() => {update(); setRefresh(refresh + 1)}} id="showDesktop" />
        Desktop
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showAndroid" />
        Android
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showIos" />
        Ios
      </>)
  }

  useEffect(() => {
    if (refresh == 0) {
      update()
      setRefresh(refresh +1)
    }
  });

  //ANCHOR jsx
  return (
    <>
      <MenuBar/>
      <br/><br/><br/>
      <main style={{paddingRight:"10%", paddingLeft:"10%"}}>
          <div>{content[0]}</div>
          <div>{content[1]}</div>
          <div>{content[2]}</div>
      </main>
      <div style={{position: "absolute", top:"0%", bottom:"0", left:"1%", right:"90%",borderRight:"white dotted"}}>
        <br/><br/>
        <form style={{paddingTop:"15%"}}>
          <div style={{marginRight:"10%"}}>
            <span className="middle" style={{fontSize: "25px"}}>Filter</span>
            {filters}
          </div>
        </form>
      </div>
      <GoBack/>
    </>
  )
}

//ANCHOR Update
function update() {
  content = [];
  var filter = [false,false,false]; 
  try {
    filter[0] = document.getElementById("showDesktop").checked;
  } catch (error) {
    console.warn(error)
  }
  
  try{
    filter[1] = document.getElementById("showAndroid").checked;
  } catch (error) {
    console.warn(error)
  }
  
  try{
    filter[2] = document.getElementById("showIos").checked;
  } catch (error) {
    console.warn(error)
  }

  if(isAndroid){
    if(filter[1]){
      content[0] = addContent("Android")
    } 
    
    if(filter[0]){
      content[1] = addContent("Desktop")
    }
  
    if(filter[2]){
      content[2] = addContent("Ios")
    }
  } else if (isIOS){
    if(filter[2]){
      content[0] = addContent("Ios")
    }
    if(filter[1]){
      content[1] = addContent("Android")
    } 
    
    if(filter[0]){
      content[2] = addContent("Desktop")
    }
  } else {  
    if(filter[0]){
      content[0] = addContent("Desktop") 
    }
  
    if(filter[1]){
      content[1] = addContent("Android")
    } 
    
    if(filter[2]){
      content[2] = addContent("Ios")
    }
  }   
 
  if(filter[0] && filter[1]){
    content[0] = <>{content[0]} <hr/></>
  }

  if(filter[1] && filter[2]){
    content[1] = <>{content[1]} <hr/></>
  }
}


export default SoftPage;