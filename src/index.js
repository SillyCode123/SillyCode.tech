import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from "./pages";
import DevTeam from "./pages/devteam/DevTeam";
import SillyGoose from "./pages/devteam/sillygoose";
import SillyGooseSW from "./pages/devteam/sillygooseSW";
import Kindskopf from "./pages/devteam/kindskopf";
import FunctionsPage from "./pages/functions/functionspage";
import NimmGame from "./pages/functions/nimmgame";
import CLicks from "./pages/functions/clicks";
import Dashboard from "./pages/dashboard/dashboard";
import SoftPage from "./pages/software/softpage";
import Error404 from "./pages/404";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            {/*indexes*/}
            <Route path='/'  element= {<Index/>} />
            <Route path='/index'  element= {<Index/>} />

            {/*DevTeam*/}
            <Route path='/devteam'  element= {<DevTeam/>}/>
            <Route path='/devteam/sillygoose' element= {<SillyGoose/>}/>
            <Route path='/devteam/sillygoose/switched' element= {<SillyGooseSW/>}/>
            <Route path='/devteam/kindskopf' element={<Kindskopf/>}/>

            {/*functions*/}
            <Route path='/functions'  element= {<FunctionsPage/>}/>
            <Route path='/functions/nimmgame'  element= {<NimmGame/>}/>
            <Route path='/functions/clicks'  element= {<CLicks/>}/>

            {/*dashboard*/}
            <Route path='/dashboard'  element= {<Dashboard/>}/>

            {/*Software*/}
            <Route path='/software'  element= {<SoftPage/>}/>


            {/*404 Page not Found*/}
            <Route path='*' element= {<Error404/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
