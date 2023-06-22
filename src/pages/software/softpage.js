import "../../css/App.css";
import React, {useEffect} from "react";
import GoBack from "../componets/GoHome";
import MenuBar from "../componets/MenuBar";
import { isAndroid, isIOS, isMobile} from "react-device-detect";
import addContent from "./contentCreator";

//vars
var content = [];
function SoftPage() {
  const [refresh, setRefresh] = React.useState(0);

  // get order
  var order = getOrder();

  //create content and create filter
  var filters = [<></>,<></>,<></>];
  for (var i = 0; i < filters.length; i++) {
    if(i == 0){
      filters[i] = (
        <>
          <input type="checkbox" defaultChecked={true} onClick={() => {update(); setRefresh(refresh + 1)}} id={"show" + order[i]}/>
          {order[i]}
        </>);
    } else {
      filters[i] = (
        <>
          <input type="checkbox" onClick={() => {update(); setRefresh(refresh + 1)}} id={"show" + order[i]} />
          {order[i]}
        </>);
    } 
  }
 

  useEffect(() => {
    if (refresh == 0) {
      update()
      setRefresh(refresh +1)
    }
  });
  if(!isMobile){
    //ANCHOR jsx for pc
    return (
      <>
        <MenuBar/>
        <br/><br/><br/>
        <main style={{paddingLeft:"10%"}}>
            <div>{content[0]}</div>
            <div>{content[1]}</div>
            <div>{content[2]}</div>
            <GoBack/>
        </main>
        <div style={{position: "absolute", top:"0%", bottom:"0", right:"auto", left:"10px", borderRight:"white dotted"}}>
          <br/><br/>
          <form style={{paddingTop:"15%", paddingRight:"10px"}}>
              <span className="middle" style={{fontSize: "25px", borderBottom:"white solid"}}>Filter</span>
              <div>{filters[0]}</div>
              <div>{filters[1]}</div>
              <div>{filters[2]}</div>
          </form>
        </div>
      </>
    )
  } else {
    //ANCHOR jsx for mobile
    return (
      <>
        <MenuBar/>
        <br/><br/><br/>
        <main style={{paddingLeft:"10%"}}>
          Not available at the moment for mobile.
        </main>
        <GoBack/>
      </>
    )
    }
}

//ANCHOR Update
function update() {
  content = [];
  // witch platform
  var plattform = "Desktop";
  if(isAndroid){
   plattform = "Android"
  } else if(isIOS){
    plattform = "Ios"
  }

  //get order
  var order = getOrder();

  //create content and create filter
  var filter = [false, false, false]
  for (var i = 0; i < order.length; i++) {
    filter[i] = getChecked("show" + order[i]);
    if(filter[i]){
      content[i] = addContent(order[i])
    }
  }
  
  if(filter[0] && filter[1] || filter[2]){
    content[0] = <>{content[0]} <hr/></>
  }
  
  if(filter[1] && filter[2]){
    content[1] = <>{content[1]} <hr/></>
  }
}

function getChecked(id) {
  try {
    return document.getElementById(id).checked;
  } catch (error) {
    console.warn(error)
  }

}

function getOrder(){
   // witch platform
   var plattform = "Desktop";
   if(isAndroid){
    plattform = "Android"
   } else if(isIOS){
     plattform = "Ios"
   }
 
   //Get the oder
   switch(plattform){
     case "Desktop":
      return [plattform,"Android","Ios" ]
 
     case "Android":
      return [plattform,"Desktop", "Ios"]
 
     case "Ios":
      return [plattform,"Android","Desktop" ]
   }
}


export default SoftPage;