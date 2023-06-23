import DesktopData from "./json/desktop.json";
import AndroidData from "./json/android.json";
import iosData from "./json/ios.json";
import { motion } from "framer-motion";
import parse from 'html-react-parser';
import MenuBar from "./../componets/MenuBar";

function addContent(platform){
    var cur = getJson(platform);
    var ret = <><h1 className="middle">{platform}</h1><span className="middle">No content availible.</span></>;
    
    if(cur.Name.length > 0){
        ret = <><h1 className="middle">{platform}</h1></>;
        for (var index = 0; index < cur.Name.length; index++) {
            if(ret == <></>) ret = <>{createWiget(cur.Name[index], cur.Img[index], platform)}</>
            else ret = <>{ret}{createWiget(cur.Name[index], cur.Img[index], platform)}</>;
        }
    }
    return ret;    
}

function createWiget(name, img, plattform) {
    return (<>
        <div>    
            <div className="middle"> <img alt="" className="clickable" onClick={() => window.location += "?" + plattform + ":"+ name} c src={img} height="34px"/>   
            <span className="middle">{name}</span></div> 
           
            <div className="middle">
                <div className="grid">
                    <div style={{paddingLeft:"25px", paddingRight:"25px"}}>
                        <motion.button
                            className="indexBtn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: "", fontSize: 20, height:"75px"}}
                            onClick={() => window.location += "?" + plattform + ":"+ name}
                        >Download</motion.button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

function showAppSite(plattform, name) {
    var json = getJson(plattform);
    var i = json.Name.indexOf(name); 

    return (
        <>
            <MenuBar/>
            <main style={{paddingTop:"75px"}}>        
                <h1  className="middle">{name}</h1>
                <div className="middle">
                    <div className="grid">
                        <div style={{padding:"25px"}}>
                        <motion.button
                            className="btnGithub"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: "", fontSize: 20}}
                            onClick={() => window.open(json.Github[i])}
                        >GitHub</motion.button>
                        </div>
                        <div style={{padding:"25px"}}>
                        <motion.button
                            className="indexBtn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: "", fontSize: 20, height:"75px"}}
                            onClick={() => window.open(json.Download[i])}
                        >Download</motion.button>
                        </div>
                        <div style={{padding:"25px"}}>
                        <motion.button
                            className="btngreenDev"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ color: "", fontSize: 20}}
                            onClick={() => window.location = "/software"}
                        >Back to software</motion.button>
                        </div>
                    </div>
                </div>
                <div className="middle"> 
                    <img style={{maxHeight:"500px", maxWidth:"300px"}} className="clickable" onClick={() => window.open(json.Download[i])} src={json.Img[i]} />
                </div>
                {parse(json.Site[i])}
            </main>
        </>
    )
    
}

function getJson(platform) {
    switch (platform) {
        case "Desktop":
            return DesktopData;

        case "Android":
            return AndroidData;

        case "Ios":
           return iosData;
    } 

}

export default addContent;
export {showAppSite}
