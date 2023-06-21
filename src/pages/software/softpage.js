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
        <main style={{paddingLeft:"45%"}}>
          {content[0]}
          <br/>
          {content[1]}
          <br/>
          {content[2]}
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
  content = [];
  var filter = [false,false,false]; 
  try {
    filter[0] = document.getElementById("showDesktop").checked;
  } catch (error) {
    console.error(error)
  }
  
  try{
    filter[1] = document.getElementById("showAndroid").checked;
  } catch (error) {
    console.error(error)
  }
  
  try{
    filter[2] = document.getElementById("showIos").checked;
  } catch (error) {
    console.error(error)
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