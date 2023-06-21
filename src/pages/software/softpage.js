import "../../css/App.css";
import React from "react";
import GoBack from "../componets/GoHome";
import MenuBar from "../componets/MenuBar";
import { isAndroid, isIOS} from "react-device-detect";
import Android from "./componets/android";
import Ios from "./componets/ios";
import Desktop from "./componets/desktop";

//vars
var content = <>Error</>;

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
        <input width="50px" height="50px" type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showDesktop" />
        Desktop
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showAndroid" />
        Android
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showIos" />
        Ios
      </>)

  }

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
    console.log(error)
  }
  
  try{
    filter[1] = document.getElementById("showAndroid").checked;
  } catch (error) {
    console.log(error)
  }
  
  try{
    filter[2] = document.getElementById("showIos").checked;
  } catch (error) {
    console.log(error)
  }
     
  if(isAndroid){
    if(filter[1]){
      content[0] = <Android/>
    } 
    
    if(filter[0]){
      content[1] = <Desktop/>
    }
  
    if(filter[2]){
      content[2] = <Ios/>
    }
  } else if (isIOS){
    if(filter[2]){
      content[0] = <Ios/>
    }
    if(filter[1]){
      content[1] = <Android/>
    } 
    
    if(filter[0]){
      content[2] = <Desktop/>
    }
  } else {  
    if(filter[0]){
      content[0] = <Desktop/> 
    }
  
    if(filter[1]){
      content[1] = <Android/>
    } 
    
    if(filter[2]){
      content[2] = <Ios/>
    }
  }    
 
}

export default SoftPage;