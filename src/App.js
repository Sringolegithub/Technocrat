

import { Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Home from './component/Home';
import Expertise from './component/Expertise';

function App() {
  return (
    <>
      <Header />
      
      <Switch>
        <Route path="/about" exact component={About}></Route>
        <Route path="/expertise" exact component={Expertise}></Route>

        
      </Switch> 


    </>
  );
}

export default App;
