import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Error404 from './pages/404';
import DevTeam from './pages/devteam/DevTeam';
import SillyGoose from './pages/devteam/sillygoose';
import Kindskopf from './pages/devteam/kindskopf';
import SillyGooseSW from './pages/devteam/sillygooseSW';
import FunctionsPage from './pages/functions/functionspage';
import NimmGame from './pages/functions/nimmgame';
import CLicks from './pages/functions/clicks';
import Dashboard from './pages/dashboard/dashboard';


function App() {
 return <Routes>
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

    {/*404 Page not Found*/}
    <Route path='*' element= {<Error404/>} />
   </Routes>
}

export default App;
