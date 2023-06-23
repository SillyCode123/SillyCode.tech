import DesktopData from "./json/desktop.json";
import AndroidData from "./json/android.json";
import iosData from "./json/ios.json";
import { render } from "@testing-library/react";

function addContent(type){
    var cur;
    var ret = <><h1 className="middle">{type}</h1><span className="middle">No content availible.</span></>;
    switch (type) {
        case "Desktop":
            cur = DesktopData;
        break;
        
        case "Android":
            cur = AndroidData;
        break;

        case "Ios":
            cur = iosData;
    } 

    if(cur.Name.length > 0){
        ret = <></>;
        for (var index = 0; index < cur.Name.length; index++) {
            if(ret == <></>) ret = <>{createWiget(cur.Name[index], cur.Img[index], cur.Github[index], cur.Download[index])}</>
            else ret = <>{ret}{createWiget(cur.Name[index], cur.Img[index], cur.Github[index], cur.Download[index])}</>;
        }
    }

    return ret;    
}

function createWiget(name, img, github, download) {
    return (<>
        <div>        
            <span  className="middle">{name}</span>
            <div className="middle">
                <img className="clickable" onClick={() => createPopUP({name}, {img}, {github}, {download})} src={img}/>
            </div>
        </div>
    </>);
}

function createPopUP(name,img,github,download) {
    
}

function closePopUp() {
}


export default addContent
export {createPopUP};