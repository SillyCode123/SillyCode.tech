import "../../css/App.css";
import React from "react";
import GoBack from "../componets/GoHome";
import MenuBar from "../componets/MenuBar";
import { isAndroid, isIOS} from "react-device-detect";
import Android from "./android";
import Ios from "./ios";
import Desktop from "./desktop";

//vars
var content;

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
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showDesktop" />
        Desktop
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showAndroid" />
        Android
        <br/>
        <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id="showIos" />
        Ios
      </>)
  }
  update()
  return (
    <>
        <MenuBar/>
        <br/><br/><br/>
        <main className="middle">
          {content}
        </main>
        <form style={{position: "absolute", top: "12%"}}>
        <span className="middle" style={{fontSize: "25px"}}>Filter</span>
          {filters}
        </form>    
        <GoBack/>
    </>
  )
}

function update() {
  content = null;
  console.log(document.getElementById("showDesktop"));
  /*
  if(document.getElementById("showAndroid").ariaChecked){
    content += <Android/>
  } 

  if(document.getElementById("showIos").ariaChecked){
    content += <Ios/>
  }

  if(document.getElementById("showDesktop").ariaChecked){
    content += <Desktop/>
  }
  */
}


export default SoftPage;